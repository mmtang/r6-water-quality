import React, { Component } from 'react';
import $ from 'jquery';

class ReturnToTop extends Component {
    handleClick = () => {
        this.scrollToTop();
    }
    scrollToTop = () => {
        $('body, html, #right').animate({ scrollTop: 0 }, 'slow');
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                <a id="return-to-top"><ion-icon name="ios-arrow-up" id="return-icon" alt="Return to the top of the page"></ion-icon></a>
            </button>
        );
    }
}

export default ReturnToTop;