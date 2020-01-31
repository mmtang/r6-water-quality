import React, { Component } from 'react';
import { getTrend } from '../Utils.js';

class TableTrendIcon extends Component {
    getIcon = (trend) => {
        switch(trend) {
            case 'No Significant Trend':
                return 'zmdi zmdi-minus zmdi-hc-lg';
            case 'Decreasing':
                return 'zmdi zmdi-arrow-left zmdi-hc-rotate-270 zmdi-hc-lg';
            case 'Increasing':
                return 'zmdi zmdi-arrow-left zmdi-hc-rotate-90 zmdi-hc-lg';
            default:
                return 'zmdi zmdi-help zmdi-hc-lg';
        }
    }
    render() {
        const trend = getTrend(this.props.trends[this.props.analyte]);
        const icon = this.getIcon(trend);
        return (
            <i className={icon} alt="Trend icon"></i>
        )
    }

}

export default TableTrendIcon;