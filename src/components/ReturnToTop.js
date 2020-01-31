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
                <a id="return-to-top"><i id="return-icon" class="zmdi zmdi-chevron-up zmdi-hc-3x"></i></a>
            </button>
        );
    }
}

export default ReturnToTop;