import React, { Component } from 'react';
import $ from 'jquery';

class WelcomeModal extends Component {
    componentDidMount() {
        $(window).on('load', () => {
            $('#welcome-modal').modal({backdrop: 'static', keyboard: false})  
            $('#welcome-modal').modal('show');
        });
    }
    render() {
        return (
            <div id="welcome-modal" className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title"><i id="alert-icon" class="zmdi zmdi-alert-circle" alt="Attention icon"></i>&nbsp;&nbsp;Disclaimer</h5>
                    </div>
                    <div className="modal-body">
                        <div className="text-center">
                            <a href="https://github.com/CAWaterBoardDataCenter" target="_blank" rel="noopener noreferrer"><img id="data-center-logo" className="img-fluid" src="images/data_center_logo.png" alt="Water Boards Data Center logo" /></a>
                        </div>
                        <p><strong>This application is in early development.</strong> It may change at any time without prior notification. All data provided are provisional and should not be used for any particular purpose other than general reference. </p>
                        <p>This application is best viewed in Firefox, Chrome, or Safari. Internet Explorer is not supported.</p>
                        <p>If you have any questions, please contact the <a href="mailto:swamp@waterboards.ca.gov">Surface Water Ambient Monitoring Program</a>.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomeModal;