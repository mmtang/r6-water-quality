import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const isIE = () => {
    const ua = navigator.userAgent;
    const checkIE = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
    return checkIE;
}

if (isIE()) {
    const content = "<p class='text-center'><strong>Internet Explorer is not supported.</strong><br>Please try opening the application using the latest version of FireFox, Chrome, or Safari.</p><p class='text-center'><a href='mailto:swamp@waterboards.ca.gov'>Questions?</a></p>";
    document.getElementById('root').innerHTML = content;
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}
