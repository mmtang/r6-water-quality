import React, { Component } from 'react';
import { analyteDict, roundToTwo } from '../Utils.js';

class Year extends Component {
    render() {
        // get unique years
        const yearSet = new Set();
        this.props.data.forEach(res => {
            yearSet.add(res.SampleDate.getFullYear());
        });
        // filter data by year
        const years = [];
        yearSet.forEach(year => {
            const yearData = this.props.data.filter(res => {
                return res.SampleDate.getFullYear() === year;
            });
            years.push({
                year: year,
                data: yearData,
                analyte: this.props.data[0].Analyte
            });
        });
        // sort descending to show latest years first
        const sortedYears = years.sort((a, b) => b.year - a.year);
        return sortedYears.map(obj => (
            <React.Fragment key={obj.year}>
                <tr className={analyteDict[obj.analyte] + " collapse out"}>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{obj.year}</td>
                    <td className="text-right"><ion-icon name="remove" alt="No objective displayed for year"></ion-icon></td>
                    <td className="text-right">{this.props.getCount(obj.data)}</td>
                    <td className="text-right">{roundToTwo(this.props.getMean(obj.data))}</td>
                    <td className="text-right">{roundToTwo(this.props.getMedian(obj.data))}</td>
                    <td className="text-right">{roundToTwo(this.props.getMin(obj.data))}</td>
                    <td className="text-right">{roundToTwo(this.props.getMax(obj.data))}</td>
                    <td className="text-right"><div dangerouslySetInnerHTML={{__html: this.props.objectiveValue}} /></td>
                </tr>
            </React.Fragment>
        ));
    }
}

export default Year;