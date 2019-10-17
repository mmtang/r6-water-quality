import React, { Component } from 'react';
import { analyteDict, getTrend, roundToTwo } from '../Utils.js';
import Year from './Year';
import * as d3 from 'd3';

class TableRow extends Component {
    getCount = (data) => data.length;
    getMin = (data) => {
        const values = data.map(d => d.DataValue);
        return d3.min(values);
    }
    getMax = (data) => {
        const values = data.map(d => d.DataValue);
        return d3.max(values);
    }
    getMedian = (data) => {
        const values = data.map(d => d.DataValue);
        return d3.median(values);
    }
    getMean = (data) => {
        const values = data.map(d => d.DataValue);
        return d3.mean(values);
    }
    getObjective = (analyte, objectives) => {
        if (analyte === 'pH') { return '6.5-8.5'}
        const filtered = objectives.filter((obj) => { return obj.Analyte === analyte; }); 
        if (filtered.length > 0) {
            return filtered[0].Value;
        } else {
            return '<ion-icon name="remove" alt="No objective"></ion-icon>';
        }
    }
    getTrendIcon = (trendObj) => {
        const trend = getTrend(trendObj);
        switch(trend) {
            case 'No Significant Trend':
                return '<ion-icon name="remove" alt="No significant trend"></ion-icon>';
            case 'Decreasing':
                return '<ion-icon name="arrow-round-down" alt="Decreasing trend"></ion-icon>';
            case 'Increasing':
                return '<ion-icon name="arrow-round-up" alt="Increasing trend"></ion-icon>';
            default:
                return '<ion-icon name="help" alt="Error"></ion-icon>';
        }
    }
    handleClick = (event) => {
        this.toggleArrow(event.target);
    }
    toggleArrow = (target) => {
        const row = target.closest('tr');
        const firstColumn = row.childNodes[0];
        const icon = firstColumn.childNodes[0];
        icon.name = (icon.name === 'arrow-dropright') ? 'arrow-dropdown'
            : (icon.name === 'arrow-dropdown') ? 'arrow-dropright'
            : 'help';
    }
    render() {
        // sort analytes alphabetical
        const analytes = this.props.analytes.sort((a, b) => {
            const aName = a.name.toLowerCase();
            const bName = b.name.toLowerCase();
            return (aName > bName) ? 1 
                 : (bName > aName) ? -1
                 : 0;
        });
        return analytes.map((analyte) => (
            <React.Fragment key={analyteDict[analyte.name]}>
                <tr data-toggle="collapse" data-target={"." + analyteDict[analyte.name]} className="clickable" onClick={this.handleClick}>
                    <td><ion-icon name="arrow-dropright" alt="Click to expand/contract table row"></ion-icon>&nbsp;&nbsp;{analyte.name}</td>
                    <td className="text-right"><div dangerouslySetInnerHTML={{__html: this.getTrendIcon(this.props.trends[analyte.name])}} /></td>
                    <td className="text-right">{this.getCount(analyte.data)}</td>
                    <td className="text-right">{roundToTwo(this.getMean(analyte.data))}</td>
                    <td className="text-right">{roundToTwo(this.getMedian(analyte.data))}</td>
                    <td className="text-right">{roundToTwo(this.getMin(analyte.data))}</td>
                    <td className="text-right">{roundToTwo(this.getMax(analyte.data))}</td>
                    <td className="text-right"><div dangerouslySetInnerHTML={{__html: this.getObjective(analyte.name, this.props.objectives)}} /></td>
                </tr>
                <Year 
                    data={analyte.data} 
                    getCount={this.getCount}
                    getMin={this.getMin}
                    getMax={this.getMax}
                    getMedian={this.getMedian}
                    getMean={this.getMean}
                    objectiveValue={this.getObjective(analyte.name, this.props.objectives)}
                />
            </React.Fragment>
        ));
    }
}

export default TableRow;