import React, { Component } from 'react';
import { analyteDict } from '../Utils.js';
import Graph from './Graph';

class GraphSection extends Component {
    render() {
        return this.props.analytes.map((analyte) => (
            <div key={analyteDict[analyte.name]}>
                <h4 className="analyte-title">{analyte.name}</h4>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-8 col-xl-9">
                        <div id={analyteDict[analyte.name]} className="graph-wrapper"></div>
                    </div>
                    <div className="trend-box col-12 col-md-12 col-lg-4 col-xl-3">
                        {/*<Trend key={analyte.id} analyte={analyte.name} trend={this.props.trends[analyte.name]} />
                        <div className="download-wrapper float-right">
                            <DownloadData key={analyte.id} data={analyte.data} label="Download data" />
                        </div>*/}
                    </div>
                </div>
                <Graph analyte={analyte} />
                <hr />
            </div>
        ));
    }
}

export default GraphSection;