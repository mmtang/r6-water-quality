// Polyfill must be the first lines in src/index.js
import 'react-app-polyfill/ie11'; 
import 'react-app-polyfill/stable';
import React, { Component } from 'react';
import { getGraphDate, getUnique, loadImages } from './Utils.js'
import SiteMenu from './components/SiteMenu';
import RegionMap from './components/RegionMap';
import SiteInfo from './components/SiteInfo';
import Table from './components/Table';
import GraphContainer from './components/GraphContainer';
import ReturnToTop from './components/ReturnToTop';
import WelcomeModal from './components/WelcomeModal';
import sites from './data/sites.csv';
import * as d3 from 'd3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

class App extends Component {
  state = {
      selected: {},
      data: [],
      averages: [],
      objectives: [],
      analytes: [],
      sites: []
  }
  changeActiveSite = (siteCode) => {
      if (siteCode !== this.state.selected.code) {
          const selected = this.state.sites[this.state.sites.findIndex(site => site.code === siteCode)];
          this.loadData(selected);
      }
  }
  loadData = (site) => {
    const parseDate = d3.timeParse('%-m/%-d/%y');
    // data file paths
    const dataPath = './data/' + site.code + '_Data.csv',
          avgPath = './data/' + site.code + '_Averages.csv',
          objPath = './data/' + site.code + '_Objectives.csv',
          trendPath = './trend/' + site.code + '_Trends.json';
    Promise.all([
        d3.csv(dataPath),
        d3.csv(avgPath),
        d3.csv(objPath),
        d3.json(trendPath)
    ]).then(responses => {
        const data = responses[0],
              averages = responses[1],
              objectives = responses[2],
              trends = responses[3];
        // process data
        data.forEach(res => {
            res.SampleDate = parseDate(res.SampleDate);
            res.DataValue = +res.DataValue;
            res.Rank = +res.Rank;
        });
        averages.forEach(res => {
            res.Date = parseDate(res.Date);
            res.AdjustedDate = getGraphDate(res.Date, res.DataType);
            res.DataValue = +res.DataValue;
        })
        objectives.forEach(res => {
            res.Value = +res.Value;
            res.Upper = +res.Upper;
            res.Lower = +res.Lower;
        });
        // organize data by analyte
        const analytes = getUnique(data, 'Analyte');
        const dataByAnalyte = [];
        analytes.forEach(analyte => {
            const analyteData = data.filter(res => res.Analyte === analyte),
                  analyteAverage = averages.filter(res => res.Analyte === analyte),
                  analyteObjective = objectives.filter(res => res.Analyte === analyte);
            dataByAnalyte.push({
                name: analyte,
                data: analyteData,
                average: analyteAverage,
                objective: analyteObjective
            });
        });
        // load site data into state
        this.setState({
            selected: site,
            data: data,
            averages: averages,
            objectives: objectives,
            analytes: dataByAnalyte,
            trends: trends
        });
    });
  }
  componentDidMount() {
    // load all sites into state
    d3.csv(sites).then(res => {
      res.forEach(site => {
        site.id = +site.id;
        site.lat = +site.lat;
        site.long = +site.long;
      });
      this.setState({
        sites: res
      });
      loadImages();
      // initialize app view on default site
      const defaultSiteCode = '637SUS001';
      const defaultSiteObj = res[res.findIndex(site => site.code === defaultSiteCode)];
      this.loadData(defaultSiteObj);
    });
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar fixed-top navbar-dark bg-dark">
            <a className="navbar-brand" href="https://www.waterboards.ca.gov/" target="_blank" rel="noopener noreferrer">
                <img className="nav-logo" src="./images/wb_logo.png" alt="Water Boards Logo" />
                <div className="nav-text">Lahontan Regional Board - Water Quality Monitoring Dashboard</div>
            </a>
            <SiteMenu sites={this.state.sites} selected={this.state.selected} changeActiveSite={this.changeActiveSite} />
        </nav>
        <div id="app-wrapper" className="container-fluid">
            <div className="row">
                <div id="map-container" className="col-md-4">
                    {/* height attribute needed for map render */}
                    <RegionMap sites={this.state.sites} selected={this.state.selected} changeActiveSite={this.changeActiveSite} style={{height: "100vh - 68px"}} />
                </div>
                <div id="right" className="col-md-8">
                    <main>
                      <section>
                        <div id="info-container" style={{maxWidth: "823px"}}>
                          <SiteInfo selected={this.state.selected} />
                        </div>
                      </section>
                      <section>
                          <div id="table-container" style={{maxWidth: "823px"}}><Table selected={this.state.selected} analytes={this.state.analytes} objectives={this.state.objectives} trends={this.state.trends} /></div>
                      </section>
                      <section>
                          <div id="graph-container" style={{maxWidth: "823px"}}><GraphContainer data={this.state.data} averages={this.state.averages} objectives={this.state.objectives} trends={this.state.trends} /></div>
                      </section>
                    </main>
                </div>  
                <ReturnToTop />
            </div>
        </div>
        <WelcomeModal />
      </div>
    );
  }
}

export default App;
