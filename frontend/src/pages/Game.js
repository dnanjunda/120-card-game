import { Link } from 'react-router-dom';
import React, { Component, Text } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/Game.css';
import Seat from '../components/Seat.js';
import Table from '../components/Table.js';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
        };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI/array")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {

        return (
            <div>
                <head>
                    <script type="text/javascript" src="../../../backend/logic/Main.js"></script>
                </head>
                {/*<h1 className='Title-Style'>Game</h1>*/}
                <Container>
                    <Row>
                        <Col>
                            <Seat playerName={"Player 2"}/>
                        </Col>
                        <Col>
                            <Seat playerName={"Player 3"}/>
                        </Col>
                        <Col>
                            <Seat playerName={"Player 4"}/>
                        </Col>
                        <Col>
                            <Seat playerName={"Player 5"}/>
                        </Col>
                        <Col></Col>
                        <Col>
                            <h1>Cutting Suit</h1>
                        </Col>
                        <Col>
                            <h1>Partner Card</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Table/>    
                    </Row>
                    <Row>
                        <h1>Your Cards</h1>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <Link to="/scoreboard">
                                <button className="End-Game" type="button"> End Game </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                {/*<p>array: {this.state.apiResponse.slice(1,18)}</p>
                <h1>{this.state.apiResponse.slice(1,18)}</h1>
                <img src={require("../cards/KS.png")}></img>
                <img src={require(this.state.apiResponse.slice(1,18))}></img>
                <form method="post" action="http://localhost:9000/testAPI/start" >
                    <input type="submit" value="Start" />
                </form> */}
            </div>
        );
    }
}

export default Game;