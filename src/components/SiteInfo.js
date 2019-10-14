import React, { Component } from 'react';
import SitePicture from './SitePicture';

class SiteInfo extends Component {
    render() {
        return (
            <div>
                <div id="site-info-card" className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-9">
                            <div className="card-body">
                                <h2 className="card-title site-title">{this.props.selected.display}</h2>
                                <p className="card-text">{this.props.selected.desc}</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <SitePicture site={this.props.selected} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SiteInfo;