import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/StartGame.css';

class StartGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <Container>
                    <h1 className="Game-title">Starting new game...</h1>
                    <h1 className="Game-code">Your game code is...</h1>
                    <h2 className="Players-Title"> Players in your game:</h2>
                    <ol className="Players-list">
                        <li>Waiting</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                    </ol>
                    <h2 className="Waiting-Text">Waiting for five players to join...</h2>
                    <p className="App-intro">;{this.state.apiResponse}</p>

                    <Row>
                        <Col>
                            <Link to="/game">
                                <button className="Button" type="button"> Start Game! </button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/home">
                                <button className="Button" type="button"> Return to Start </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
            </div>
        );
    }
}

export default StartGame