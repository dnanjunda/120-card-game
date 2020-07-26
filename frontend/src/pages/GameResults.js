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
        }
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
                    <Modal.Body id="Body-Modal">
                        Leading Team (Anoushka, Shreenithi) won with 80 points!
                    </Modal.Body>

                    <Modal.Footer id="Footer-Modal">
                        <button onClick={closeModal} className="Close-Button">Close</button>
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
                                Anoushka <span>{'\u{1F451}'}</span>
                            </Row>
                            <Row className="Name-Two">
                                Ashley
                            </Row>
                            <Row className="Name-Three">
                                Dhanush
                            </Row>
                            <Row className="Name-Four">
                                Shreenithi <span>{'\u{1F451}'}</span>
                            </Row>
                            <Row className="Name-Five">
                                Anshul
                            </Row>
                        </Col>

                        <Col>
                            <Row className="Card-Title">
                                Cards
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
                                50
                            </Row>
                            <Row className="Points-Two">
                                10
                            </Row>
                            <Row className="Points-Three">
                                10
                            </Row>
                            <Row className="Points-Four">
                                30
                            </Row>
                            <Row className="Points-Five">
                                20
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