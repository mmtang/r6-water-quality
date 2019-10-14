import React, { Component } from 'react';
import sites from '../data/sites.csv';
import * as d3 from 'd3';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import esri from 'react-leaflet';

class RegionMap extends Component {
    activeStyle() {
        return {
            color: '#fff',
            fillColor: '#d34a37',
            fillOpacity: 0.9,
            weight: 1,
            radius: 9
        };
    }
    defaultStyle() {
        return {
            color: '#fff',
            fillColor: '#046b99',
            fillOpacity: 0.9,
            weight: 1,
            radius: 9
        };
    }
    drawMarkers() {
        this.siteLayer = L.featureGroup().addTo(this.map);
        d3.csv(sites).then(res => {
            res.forEach(site => {
                site.id = +site.id;
                site.lat = +site.lat;
                site.long = +site.long;
            });
            res.forEach(site => {
                const content = '<div class="pic-container">' + site.name + '<br />(' + site.code + ')<br/ ></div>';
                const circle = L.circleMarker([site.lat, site.long], this.defaultStyle());
                circle.code = site.code;
                circle.on('click', e => {
                    this.props.changeActiveSite(e.target.code);
                }).addTo(this.siteLayer).bindTooltip(content, {className: 'map-tooltip'});
            });
            this.map.fitBounds(this.siteLayer.getBounds());
        })
    }
    componentDidMount() {
        this.map = L.map('map', {
            center: [39.1968, -119.5224],
            zoom: 7,
            layers: [
                L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
                    subdomains: 'abcd',
                    maxZoom: 19
                }),
            ]
        });
        this.map.createPane('boundaryPane');
        this.map.createPane('circlePane');
        this.drawMarkers();
    }
    // this handles site changes originating from both the map and selector
    componentDidUpdate() {
        const keys = Object.keys(this.siteLayer._layers);
        keys.forEach(key => {
            const siteCode = this.siteLayer._layers[key].code;
            if (siteCode === this.props.selected.code) {
                this.siteLayer._layers[key].setStyle(this.activeStyle());
            } else {
                this.siteLayer._layers[key].setStyle(this.defaultStyle());
            }
        });
    }
    render() {
        return (
            <div id="map"></div>
        )
    }
}

export default RegionMap;