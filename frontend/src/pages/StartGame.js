/* react imports */
import React from 'react';

/* react router & bootstrap imports */
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

/* css imports */
import '../css/StartGame.css';

/* backend imports */
import {socket} from "../pages/Home.js";

class StartGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "", code: "", sample: "abc" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
       // this.callAPI();
    }

    componentDidMount() {
        const {codes} = this.props.location.state;
        this.state.code = codes;
        socket.emit("incoming_data", this.props.location.state.user);
    }

    render() {
        return (
            <div className="Body">
                <Container>
                    <h1 className="Game-title">Starting new game...</h1>
                    <h1 className="Game-code">Your game code is {this.props.location.state.codes}.</h1>
                    <h2 className="Players-Title"> Players in your game:</h2>
                    <ol className="Players-list">
                        <li>{this.props.location.state.user}</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                    </ol>
                    <h2 className="Waiting-Text">Waiting for five players to join...</h2>

                    <Row>
                        <Col>
                            <Link to="/game">
                                <button className="Button" type="button">Start Game!</button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/home">
                                <button className="Button" type="button">Return to Start</button>
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