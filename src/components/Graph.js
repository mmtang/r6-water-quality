import React, { Component } from 'react';
import { analyteDict, getMidDate } from '../Utils.js';
import * as d3 from 'd3';

class Graph extends Component {
    bufferX = (extent, averages) => {
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        // convert to UNIX
        let min = extent[0].getTime();
        let max = extent[1].getTime();
        // compare min/max to averages, add padding so that all graph elements at edges are fully visible
        if (averages) {
            averages.forEach(avg => {
                // get adjusted date
                const adjustedDate = getMidDate(avg.Date, avg.DataType);
                const dateStamp = adjustedDate.getTime();
                // compare only the minimum dates. maxes should not be an issue since all averages will be positioned before the last result
                if (dateStamp < min) {
                    min = dateStamp;
                }
            });
        }
        const difference = max - min;
        const bufferedMin = min - (difference * .05); 
        const bufferedMax = max + (difference * .05);
        // return date objects
        return [new Date(bufferedMin), new Date(bufferedMax)];
    }
    drawChart = () => {
        // initialize chart elements
        const timeMargin = { top: 30, right: 20, bottom: 30, left: 60 };
        const timeWidth = 495 + timeMargin.left + timeMargin.right;
        const timeHeight = 275 + timeMargin.top + timeMargin.bottom;
        const analyteCode = analyteDict[this.props.analyte.name];
        const parseDate = d3.timeParse('%m/%d/%y');
        const data = this.props.analyte.data;
        const average = this.props.analyte.average;
        const objective = this.props.analyte.objective;
        const chartID = analyteCode + '-chart';
        const chart = d3.select('#' + analyteCode).append('svg')
            .attr('id', chartID)
            .attr('className', 'chart')
            .attr('width', timeWidth)
            .attr('height', timeHeight)
            .call(() => { this.responsive(chartID); });
        // add geometry for clipping chart elements
        const clipPadding = 4;
        chart.append('clipPath')
            .attr('id', 'clip-range')
            .append('rect')
            .attr('x', timeMargin.left + 1)
            .attr('y', 0)
            .attr('width', timeWidth - timeMargin.left - timeMargin.right)
            .attr('height', timeHeight - timeMargin.bottom + clipPadding * 2);
        chart.append('clipPath')
            .attr('id', 'clip')
            .append('rect')
            .attr('x', timeMargin.left - clipPadding)
            .attr('y', 0)
            .attr('width', timeWidth - timeMargin.left - timeMargin.right + clipPadding * 2)
            .attr('height', timeHeight - timeMargin.bottom +clipPadding);
        chart.append('clipPath')
            .attr('id', 'clean-clip')
            .append('rect')
            .attr('x', timeMargin.left)
            .attr('y', 0)
            .attr('width', timeWidth - timeMargin.left - timeMargin.right)
            .attr('height', timeHeight - timeMargin.bottom);
        // add tooltips
        const tooltip = d3.select('body').append('div')
            .attr('id', analyteCode + '-tooltip')
            .attr('class', 'tooltip')
            .style('opacity', 0);
        // initialize axes
        chart.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + (timeHeight - timeMargin.bottom) + ')');
        chart.append('g')
            .attr('class', 'y axis')
            .attr('transform', 'translate(' + timeMargin.left + ', 0)');
        const xExtent = d3.extent(data, (d) => { return d.SampleDate; });
        const xExtentBuffered = this.bufferX(xExtent, average);
        let yMax = d3.max(data, (d) => { return d.DataValue; });
        if (objective.length > 0) {
            if (objective[0].Value > yMax) { 
                yMax = objective[0].Value; 
            }
        }
        const xScale = d3.scaleTime()
            .domain(xExtentBuffered)
            .range([timeMargin.left, timeWidth - timeMargin.right]);
        const yScale = d3.scaleLinear()
            .domain([0, yMax])
            .range([timeHeight - timeMargin.bottom, timeMargin.top]);
        const xAxis = d3.axisBottom()
            .scale(xScale)
            .ticks(5);
        const yAxis = d3.axisLeft()
            .scale(yScale)
            .ticks(5);
        // draw objective range
        if (objective.length > 0) {
            if (objective[0].ObjClass === 'Range') {
                const rangeRect = chart.append('g')
                    .attr('className', 'range-g')
                    .attr('clip-path', 'url(#clip-range)');
                rangeRect.append('rect')
                    .attr('visibility', 'visible')
                    .attr('x', 0)
                    .attr('y', yScale(objective[0].Upper))
                    .attr('width', timeWidth)
                    .attr('height', yScale(objective[0].Lower) - yScale(objective[0].Upper))
                    .attr('fill', '#d6d6d6')
                    .style('opacity', 0.5);
                // draw range box label
                rangeRect.append('text')
                    .attr('class', 'range-label')
                    .attr('x', timeMargin.left + 'px')
                    .attr('y', yScale(objective[0].Upper))
                    .attr('transform', 'translate(5, -5)')
                    .attr('text-anchor', 'left')
                    .text('Range: ' + objective[0].Lower + ' — ' + objective[0].Upper + ' ' + objective[0].Unit); 
            }
        }
        // draw points
        const points = chart.append('g')
            .attr('clip-path', 'url(#clip)');
        points.selectAll('.circle')
            .data(data)
            .enter().append('circle')
            .attr('className', 'circle')
            .attr('r', 4)
            .attr('cx', (d) => { return xScale(d.SampleDate); })
            .attr('cy', (d) => { return yScale(d.DataValue); })
            .attr('fill', (d) => { 
                /*
                if (average.length > 0) {
                    return '#4d5e6b';
                } else {
                    return this.getColor(d, objective); 
                }
                */
                return this.getColor(d, objective); 
            })
            .on('mouseover', (d) => {
                const formatDate = d3.timeFormat('%b %e, %Y');
                return tooltip
                    .style('opacity', 1)
                    .html(formatDate(d.SampleDate) + '<br>' + d.DataValue + ' ' + d.Unit + '<br>' + d.Label);;
            })
            .on("mousemove", () => {
                return tooltip
                    .style('top', (window.event.pageY - 20) + 'px')
                    .style('left', (window.event.pageX + 10) + 'px');
            })
            .on("mouseout", () => {
                return tooltip.style('opacity', 0);
            })
            .merge(points)
            .attr('cx', (d) => { return xScale(d.SampleDate); })
            .attr('cy', (d) => { return yScale(d.DataValue); });
        points.exit()
            .remove();
        // draw averages
        const triangleIcon = d3.symbol().type(d3.symbolTriangle).size(8 * 8);
        const triangles = chart.append('g')
            .attr('clip-path', 'url(#clean-clip)'); 
        triangles.selectAll('.diamond')
            .data(average)
            .enter().append('path')
            .attr('class', 'diamond')
            .attr('d', triangleIcon)
            .attr('transform', (d) => { return 'translate(' + xScale(d.AdjustedDate) + ',' + yScale(d.DataValue) + ')'; })
            .style('fill', (d) => { return this.getColor(d, objective); })
            .on('mouseover', (d) => {
                const formatNum = d3.format('.2f');
                let formatDate;
                if (d.DataType === 'Annual Average') {
                    formatDate = d3.timeFormat('%Y');
                } else if (d.DataType === 'Monthly Mean') {
                    formatDate = d3.timeFormat('%b %Y');
                }
                return tooltip
                    .style('opacity', 1)
                    .html(d.DataType + ': ' + formatDate(d.AdjustedDate) + '<br>' + formatNum(d.DataValue) + ' ' + d.Unit);
            })
            .on('mousemove', () => {
                return tooltip
                    .style('top', (window.event.pageY - 20) + 'px')
                    .style('left', (window.event.pageX + 10) + 'px');
            })
            .on('mouseout', () => {
                return tooltip.style('opacity', 0);
            });
        triangles.exit()
            .remove();
        // draw objective line
        if (objective.length > 0) {
            if (objective[0].Type === 'Max' || objective[0].Type === 'Min') {
                const objLine = chart.append('g')
                    .datum(objective[0])
                    .attr('clip-path', 'url(#clean-clip)');
                objLine.append('line')
                    .attr('className', 'objective')
                    .style('stroke', '#e74c3c')
                    .style('stroke-width', '2px')
                    //.attr('stroke-dasharray', ('9, 3'))
                    .attr('x1', 0)
                    .attr('x2', timeWidth)
                    .attr('y1', (d) => { return yScale(d.Value); })
                    .attr('y2', (d) => { return yScale(d.Value); });
                objLine.append('text')
                    .attr('class', 'line-label')
                    .attr('x', timeMargin.left + 'px')
                    .attr('y', (d) => { return yScale(d.Value); })
                    .attr('transform', 'translate(5, -5)')
                    .attr('text-anchor', 'left')
                    .text((d) => { return d.Label + ': ' + d.Value + ' ' + d.Unit; });
            }
        }
        // draw axes
        chart.select('.x.axis').call(xAxis);
        chart.select('.y.axis').call(yAxis);
        chart.append('text')
            .attr('class', 'axis-label')
            .attr('text-anchor', 'middle')  
            .attr('transform', 'translate(' + 12 + "," + (timeHeight / 2) + ') rotate(-90)')
            .text(data[0].Unit);
    }
    getColor = (d, objective) => {
        const red = '#e84141';
        const green = '#147554';
        const gray = '#4d5e6b';
        if (objective.length > 0) {
            switch (objective[0].Type) {
                case 'Max': 
                    if (d.DataValue > objective[0].Value) {
                        return red;
                    } else {
                        return green;
                    }
                case 'Min':
                    if (d.DataValue < objective[0].Value) {
                        return red;
                    } else {
                        return green;
                    }
                case 'Range':
                    if ((d.DataValue >= objective[0].Lower) && (d.DataValue <= objective[0].Upper)) {
                        return green;
                    } else {
                        return red;
                    }
            }
        } else {
            return gray;
        }
    }
    responsive = (id) => {
        // get container + svg aspect ratio
        const svg = d3.select('#' + id),
            container = svg.node().parentNode,
            width = parseInt(svg.style('width')),
            height = parseInt(svg.style('height')),
            aspect = width / height;
        // add viewBox and preserveAspectRatio properties,
        // and call resize so that svg resizes on inital page load
        svg.attr('viewBox', '0 0 ' + width + ' ' + height)
            .attr('perserveAspectRatio', 'xMinYMid')
            .call(resize);
        // to register multiple listeners for same event type, 
        // you need to add namespace, i.e., 'click.foo'
        // necessary if you call invoke this function for multiple svgs
        // api docs: https://github.com/mbostock/d3/wiki/Selections#on
        d3.select(window).on('resize.' + container.id, resize);
        // get width of container and resize svg to fit it
        function resize() {
            const targetWidth = parseInt(container.offsetWidth);
            svg.attr('width', targetWidth);
            svg.attr('height', Math.round(targetWidth / aspect));
        }
    }
    componentDidMount = () => {
        this.drawChart();
    }
    componentDidUpdate = () => {
        this.drawChart();
    }
    render() {
        return <div />;
    }
}

export default Graph;