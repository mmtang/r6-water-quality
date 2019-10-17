import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
    render() {
        return (
            <div>
                <div id="table-card" className="card">
                    <div className="card-header">Summary Table</div>
                    <div className="card-body table-responsive table-wrapper">
                        <table className="table table-sm table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" className='column-analyte'>Analyte</th>
                                    <th scope="col" className="text-right col">Trend</th>
                                    <th scope="col" className="text-right col">Count</th>
                                    <th scope="col" className="text-right col">Mean</th>
                                    <th scope="col" className="text-right col">Median</th>
                                    <th scope="col" className="text-right col">Min</th>
                                    <th scope="col" className="text-right col">Max</th>
                                    <th scope="col" className="text-right col">Objective</th>
                                </tr>
                            </thead>
                            <tbody>
                               <TableRow analytes={this.props.analytes} objectives={this.props.objectives} trends={this.props.trends} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;