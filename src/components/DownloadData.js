import React, { Component } from 'react';
import * as d3 from 'd3';

class DownloadData extends Component {
    downloadCSV = (data) => {
        const fileName = 'R6_Download_' + Date.now() + '.csv';
        const fileData = this.formatData(data);
        const csvContent = this.convertToCSV(fileData);
        if (this.checkEdge()) {
            let blob = new Blob([csvContent], { type: 'data:text/csv;charset=utf-8;' });
            const linkElement = document.createElement('a');
            const url = URL.createObjectURL(blob);
            linkElement.setAttribute('href', url);
            linkElement.setAttribute('download', fileName);
            const clickEvent = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': false
            });
            linkElement.dispatchEvent(clickEvent);
        } else {
            let csv = document.createElement('a');
            csv.href = 'data:text/csv;charset=utf-8,' +  encodeURIComponent(csvContent);
            csv.target = '_blank';
            csv.download = fileName;
            document.body.appendChild(csv);
            csv.click();
        } 
    }
    formatData = (data) => {
        const formatDate = d3.timeFormat('%Y-%m-%d');
        const selected = data.map(d => {
            return {
                'SiteCode': '"' + d.SiteCode + '"',
                'SampleDate': formatDate(d.SampleDate),
                'Analyte': '"' + d.Analyte + '"',
                'Unit': '"' + d.Unit + '"',
                'Result': d.DataValue,
                'MDL': d.MDL,
                'RL': d.RL,
                'ResQualCode': '"' + d.ResQualCode + '"',
                'QACode': '"' + d.QACode + '"',
                'Compliance': '"' + d.Compliance + '"'
            };
        });
        return selected;
    }
    convertToCSV = (data) => {
        let csvString = '';
        const header = Object.keys(data[0]);
        const values = data.map(obj => {
            return Object.keys(obj)
                .map(e => { return obj[e]; })
                .join(',');
        });
        const body = values.join('\r\n');
        csvString += header + '\r\n' + body;
        return csvString;
    }
    checkEdge = () => {
        const ua = window.navigator.userAgent;
        return (/edge|msie\s|trident\//i.test(ua)) ? true : false;
    }
    render() {
        return (
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => { this.downloadCSV(this.props.data) }}><ion-icon name="download" style={{fontSize: "16px", color: "#fff"}} alt="Download icon"></ion-icon>&nbsp;&nbsp;{this.props.label}&nbsp;</button>
        );
    }

}

export default DownloadData;