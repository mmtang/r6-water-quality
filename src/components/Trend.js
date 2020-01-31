import React, { Component } from 'react';
import { getTrend } from '../Utils.js';
import * as d3 from 'd3';

class Trend extends Component {
    getIcon(trend) {
        switch (trend) {
            case 'No Significant Trend':
                return 'zmdi zmdi-minus zmdi-hc-5x';
            case 'Decreasing':
                return 'zmdi zmdi-trending-down zmdi-hc-5x';
            case 'Increasing':
                return 'zmdi zmdi-trending-up zmdi-hc-5x';
            default:
                return 'zmdi zmdi-help zmdi-hc-5x';
        }
    }
    render() {
        const trendText = getTrend(this.props.trend);
        const icon = this.getIcon(trendText);
        const formatNum = d3.format('.2f');
        return (
            <div className="p-2 bd-highlight">
                <div className="trend-card card">
                    <div className="card-header">Trend</div>
                    <div className="card-body">
                        <i className={icon}></i>
                        <ion-icon name={icon} style={{fontSize: "72px"}} alt={trendText}></ion-icon>
                        <h6 className="card-title">{trendText}</h6>
                        <p className="small-text mb-2">
                            <small>Kendall's tau-b: {formatNum(this.props.trend['tau'])}</small><br />
                            <small>p-value: {formatNum(this.props.trend['p_value'])}</small><br />
                            <small>n = {this.props.trend['n']}</small>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Trend;