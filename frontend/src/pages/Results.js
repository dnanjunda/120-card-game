/* react imports */
import React from 'react';

/* react router & bootstrap imports */
import { Link } from 'react-router-dom';
import { Container, Row, Col, Modal } from 'react-bootstrap';

/* css imports */
import '../css/Results.css';

/* components imports */
import WinnerModal from '../components/WinnerModal.js';
import FooterButtons from '../components/FooterButtons.js';

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            players: "",
            points: "",
            winningTeam: "",
            winningTotal: "",
            winningPlayers: "",
        }
    }

    componentDidMount() {
        this.setResults();
    }

    setResults() {
        this.setState({
            players: ["Anoushka", "Ashley", "Dhanush", "Shreenithi", "Anshul"],
            points: ["50", "10", "10", "30", "20"],
            winningTeam: "Leading",
            winningTotal: "80",
            winningPlayers: ["Anoushka", "Shreenithi"],
        })
    }

    render() {

        return (
            <div className="Body">
                <WinnerModal
                    winningTeam={this.state.winningTeam}
                    winningPlayers={this.state.winningPlayers}
                    winningTotal={this.state.winningTotal}
                />

                <div className="Rows">
                    <Col className="Title">
                        Player
                        </Col>
                    <Col className="Title">
                        Cards
                        </Col>
                    <Col className="Title">
                        Points
                        </Col>
                    <Col className="Title">
                        Total Points
                        </Col>
                    <Col className="Title">
                        Games Won
                        </Col>
                    <Col className="Title">
                        Rank
                        </Col>
                </div>

                <div className="Rows">
                    <Col className="Player">
                        {this.state.players[0]} <span>{'\u{1F451}'}</span>
                    </Col>
                    <Col className="Player">
                        <div className="Card-Scroll">
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                        </div>
                    </Col>
                    <Col className="Player">
                        50
                        </Col>
                    <Col className="Player">
                        1000
                        </Col>
                    <Col className="Player">
                        10
                        </Col>
                    <Col className="Player">
                        1
                        </Col>
                </div>

                <div className="Rows">
                    <Col className="Player">
                        {this.state.players[1]}
                    </Col>
                    <Col className="Player">
                        <div className="Card-Scroll">
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                        </div>
                    </Col>
                    <Col className="Player">
                        10
                        </Col>
                    <Col className="Player">
                        1000
                        </Col>
                    <Col className="Player">
                        10
                        </Col>
                    <Col className="Player">
                        3
                        </Col>
                </div>

                <div className="Rows">
                    <Col className="Player">
                        {this.state.players[2]}
                    </Col>
                    <Col className="Player">
                        <div className="Card-Scroll">
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                        </div>
                    </Col>
                    <Col className="Player">
                        10
                        </Col>
                    <Col className="Player">
                        1000
                        </Col>
                    <Col className="Player">
                        10
                        </Col>
                    <Col className="Player">
                        5
                        </Col>
                </div>

                <div className="Rows">
                    <Col className="Player">
                        {this.state.players[3]} <span>{'\u{1F451}'}</span>
                    </Col>
                    <Col className="Player">
                        <div className="Card-Scroll">
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                        </div>
                    </Col>
                    <Col className="Player">
                        30
                        </Col>
                    <Col className="Player">
                        1000
                        </Col>
                    <Col className="Player">
                        10
                        </Col>
                    <Col className="Player">
                        2
                        </Col>
                </div>

                <div className="Rows">
                    <Col className="Player">
                        {this.state.players[4]}
                    </Col>
                    <Col className="Player">
                        <div className="Card-Scroll">
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                            <img className="Card" src={require("../cards/AS.png")}></img>
                        </div>
                    </Col>
                    <Col className="Player">
                        20
                        </Col>
                    <Col className="Player">
                        1000
                        </Col>
                    <Col className="Player">
                        10
                        </Col>
                    <Col className="Player">
                        4
                        </Col>
                </div>

                <FooterButtons
                    leftButtonTitle="Start Next Game"
                    leftPath="/game"
                    rightButtonTitle="End Game"
                    rightPath="/home"
                    className="Results"
                />
            </div>
        );
    }
}

export default Results