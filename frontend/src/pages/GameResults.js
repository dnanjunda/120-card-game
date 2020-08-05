import { Link } from 'react-router-dom';
import React, { Component, Stylesheet } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import '../css/GameResults.css';

import RanksDashboard from '../components/RanksDashboard';

class GameResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            playerOne: "",
            playerTwo: "",
            playerThree: "",
            playerFour: "",
            playerFive: "",
            pointsOne: "",
            pointsTwo: "",
            pointsThree: "",
            pointsFour: "",
            pointsFive: "",
            winningTeam: "",
            winningTotal: "",
            winningPlayers: "",
        }
    }

    componentDidMount() {
        this.setGameResults();
    }

    setGameResults() {
        this.setState({
            playerOne: "Anoushka",
            playerTwo: "Ashley",
            playerThree: "Dhanush",
            playerFour: "Shreenithi",
            playerFive: "Anshul",
            pointsOne: "50",
            pointsTwo: "10",
            pointsThree: "10",
            pointsFour: "30",
            pointsFive: "20",
            winningTeam: "Leading",
            winningTotal: "80",
            winningPlayers: "Anoushka, Shreenithi",
        })
    }


    render() {

        let closeModal = () => this.setState({ open: false })

        return (
            <div className="Body">
                <Modal
                    show={this.state.open}
                    onHide={closeModal}
                    backdrop="static"
                    keyboard={false}
                    centered
                    id="Win-Modal"
                >
                    <Modal.Body id="Win-Body-Modal">
                        {this.state.winningTeam} Team ({this.state.winningPlayers}) won with {this.state.winningTotal} points!
                    </Modal.Body>

                    <Modal.Footer id="Win-Footer-Modal">
                        <button onClick={closeModal} className="Win-Close-Button">Close</button>
                    </Modal.Footer>

                </Modal>

                <Container>
                    <h1 className="Page-Title"> Game Results: </h1>
                    <Row>
                        <Col>
                            <Row className="Player-Title">
                                Player
                            </Row>
                            <Row className="Name-One">
                                {this.state.playerOne} <span>{'\u{1F451}'}</span>
                            </Row>
                            <Row className="Names">
                                {this.state.playerTwo}
                            </Row>
                            <Row className="Names">
                                {this.state.playerThree}
                            </Row>
                            <Row className="Names">
                                {this.state.playerFour} <span>{'\u{1F451}'}</span>
                            </Row>
                            <Row className="Names">
                                {this.state.playerFive}
                            </Row>
                        </Col>

                        <Col>
                            <Row className="Card-Title">
                                Cards
                            </Row>
                            <Row>
                                <div className="Card-Scroll-First">
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
                            </Row>
                            <Row>
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
                            </Row>
                            <Row>
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
                            </Row>
                            <Row>
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
                            </Row>
                            <Row>
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
                            </Row>
                        </Col>

                        <Col>
                            <Row className="Point-Title">
                                Points
                            </Row>
                            <Row className="Points-One">
                                {this.state.pointsOne}
                            </Row>
                            <Row className="Points-Two">
                                {this.state.pointsTwo}
                            </Row>
                            <Row className="Points-Three">
                                {this.state.pointsThree}
                            </Row>
                            <Row className="Points-Four">
                                {this.state.pointsFour}
                            </Row>
                            <Row className="Points-Five">
                                {this.state.pointsFive}
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <RanksDashboard
                                buttonTitle="End Game"
                                modalTitle="Final Ranks"
                                path="/home"
                                className="End-Game"
                            />
                        </Col>
                        <Col>
                            <RanksDashboard
                                buttonTitle="Start Next Game"
                                modalTitle="Current Ranks"
                                path="/game"
                                className="Next-Game"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default GameResults