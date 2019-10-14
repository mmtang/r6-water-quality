import React, { Component } from 'react';
import SiteMenuOption from './SiteMenuOption';

class SiteMenu extends Component {
    constructor(props) {
        super(props);
        // bind value to selector
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.changeActiveSite(e.target.value);
    }
    render() {
        return (
            <div>
                <form className="form-inline">
                    <select id="site-select" className="form-control form-control-sm" value={this.props.selected.code} onChange={this.handleChange}>
                        <SiteMenuOption sites={this.props.sites} />
                    </select>
                </form>
            </div>
        )
    }
}

export default SiteMenu;