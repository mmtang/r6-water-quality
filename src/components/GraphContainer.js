import React, { Component } from 'react';
import DownloadData from './DownloadData';
import GraphSection from './GraphSection';
import { sortIgnoreCap } from '../Utils.js';
import * as d3 from 'd3';

class GraphContainer extends Component {
    // sorts analytes and data by rank for display
    // returns all data nested in objects
    sortByRank = () => {
        const analyte1Set = new Set(),
              analyte2Set = new Set(),
              analyte3Set = new Set();
        this.props.data.forEach(res => {
            switch (res.Rank) {
                case 1:
                    analyte1Set.add(res.Analyte);
                    break;
                case 2:
                    analyte2Set.add(res.Analyte);
                    break;
                case 3:
                    analyte3Set.add(res.Analyte);
                    break;
                default:
                    console.log('Error. Missing Rank value.');
            }
        });
        // sort alphabetical and concatenate
        const analyte1List = sortIgnoreCap(Array.from(analyte1Set));
        const analyte2List = sortIgnoreCap(Array.from(analyte2Set));
        const analyte3List = sortIgnoreCap(Array.from(analyte3Set));
        const analyteList = analyte1List.concat(analyte2List, analyte3List);
        // filter data by analyte
        const analytes = [];
        analyteList.forEach(analyte => {
            const analyteData = this.props.data.filter(res => {
                return res.Analyte === analyte;
            });
            const analyteAvg = this.props.averages.filter(res => {
                return res.Analyte === analyte;
            });
            const analyteObj = this.props.objectives.filter(res => {
                return res.Analyte === analyte;
            });
            analytes.push({
                name: analyte,
                data: analyteData,
                average: analyteAvg,
                objective: analyteObj
            });
        });
        return analytes;
    }
    render() {
        const analytes = this.sortByRank();
        // need to remove rather than redraw because each site has different analytes
        // revisit and clean up
        d3.selectAll('svg').remove();
        d3.selectAll('.tooltip').remove();
        return (
            <div id="graph-card" className="card">
                <div className="card-header">
                    <div className='d-flex flex-row justify-content-between align-items-center card-header-wrapper'>
                        <div>Water Quality Data</div>
                        <div className="download-wrapper">
                            <DownloadData data={this.props.data} label="Download all data" />
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <GraphSection analytes={analytes} trends={this.props.trends} />
                </div>
            </div>
        );
    }
}

export default GraphContainer;