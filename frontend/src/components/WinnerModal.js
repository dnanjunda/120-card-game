/* react imports */
import React, { Component } from 'react';

/* react router & bootstrap imports */
import { Link } from 'react-router-dom';

/* css imports */
import '../css/WinnerModal.css';

class WinnerModal extends Component {

    constructor(props) {
        super(props);
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.state = {
            visible: true,
        }
    }

    handleCloseClick = () => {
        this.setState({ visible: false });
    }

    render() {

        if (this.state.visible) return (
            <div className="Winner-Modal-Font">
                <div className="Winner-Modal-Container">
                    <div className="Winner-Modal-Text">
                        {this.props.winningTeam} Team won with {this.props.winningTotal} points!
                    </div>
                    <div>
                        <div className="Winner-Modal-Buttons">
                            <button onClick={this.handleCloseClick} className="Winner-Modal-Close-Button">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );

        else return (
            <div></div>
        );
    }
}

export default WinnerModal;