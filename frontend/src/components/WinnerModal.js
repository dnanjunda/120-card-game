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

        if (this.state.visible && this.props.winningTeam === "Leading") return (
            <div className="Winner-Modal-Font">
                <div className="Winner-Modal-Container">
                    <div className="Winner-Modal-Leading-Text">
                        {this.props.winningTeam} Team ({this.props.winningPlayers[0]}, {this.props.winningPlayers[1]}) won with {this.props.winningTotal} points!
                    </div>
                    <div>
                        <div className="Winner-Modal-Buttons">
                            <button onClick={this.handleCloseClick} className="Winner-Modal-Leading-Close-Button">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );

        else if (this.state.visible && this.props.winningTeam === "Defending") return (
            <div className="Winner-Modal-Font">
                <div className="Winner-Modal-Container">
                    <div className="Winner-Modal-Defending-Text">
                        {this.props.winningTeam} Team ({this.props.winningPlayers[0]}, {this.props.winningPlayers[1]}, {this.props.winningPlayers[2]}) won with {this.props.winningTotal} points!
                    </div>
                    <div>
                        <div className="Winner-Modal-Buttons">
                            <button onClick={this.handleCloseClick} className="Winner-Modal-Defending-Close-Button">Close</button>
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

export default WinnerModal