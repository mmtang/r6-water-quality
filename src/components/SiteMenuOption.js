import React, { Component } from 'react';

class SiteMenuOption extends Component {
    render() {
        return this.props.sites.map(site => (
            <React.Fragment key={site.id}>
                <option value={site.code}>{site.name}</option>
            </React.Fragment>
        ));
    }
}

export default SiteMenuOption;