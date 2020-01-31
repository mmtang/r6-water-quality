import React, { Component } from 'react';
import { analyteDict, roundToTwo } from '../Utils.js';
import Year from './Year';
import TableTrendIcon from './TableTrendIcon';
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
            return '&#8212';
        }
    }
    handleClick = (event) => {
        this.toggleArrow(event.target);
    }
    toggleArrow = (target) => {
        const caretRight = 'zmdi-caret-right';
        const caretDown = 'zmdi-caret-down';
        const row = target.closest('tr');
        const firstColumn = row.childNodes[0];
        const icon = firstColumn.childNodes[0];
        if (icon.classList.contains(caretRight)) {
            icon.classList.remove(caretRight);
            icon.classList.add(caretDown);
        } else if (icon.classList.contains(caretDown)) {
            icon.classList.remove(caretDown);
            icon.classList.add(caretRight);
        } else {
            icon.classList.add('zmdi-help');
        }
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
                    <td><i className="zmdi zmdi-caret-right zmdi-hc-lg" alt="Click to expand/collapse table row"></i>&nbsp;&nbsp;{analyte.name}</td>
                    <td className="text-right"><TableTrendIcon analyte={analyte.name} trends={this.props.trends} /></td>
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