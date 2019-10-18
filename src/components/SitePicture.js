import React, { Component } from 'react';

class SitePicture extends Component {
    render() {
        return (
            <img id="site-pic" className="card-img" src={'./images/' + this.props.site.image} alt={'Photo of ' + this.props.site.name} />
        );
    }
}

export default SitePicture;