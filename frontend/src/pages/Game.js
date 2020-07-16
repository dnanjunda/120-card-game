import { Link } from 'react-router-dom';
import React, { Component, Text } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Game.css';

import Seat from '../components/Seat.js';
import GameButton from '../components/GameButton.js';

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
            <div className="Main-Content">
                <head>
                    <script type="text/javascript" src="../../../backend/logic/Main.js"></script>
                </head>

                {/*Seats*/}
                <Seat playerName={"Player 2"} className={"Player-Two"} />
                <Seat playerName={"Player 3"} className={"Player-Three"} />
                <Seat playerName={"Player 4"} className={"Player-Four"} />
                <Seat playerName={"Player 5"} className={"Player-Five"} />

                {/*Table*/}
                <svg width="450" height="450" className="Table">
                    <circle
                        cx={'225'}
                        cy={'225'}
                        r={'225'}
                        fill={"#4c2519"}
                    />
                </svg>

                <Row>
                    <Col>
                        <GameButton buttonText='Leader' text='Anoushka' className="Leader-Button" />
                    </Col>
                    <Col>
                        <GameButton buttonText='Bid' text='75' className="Bid-Button" />
                    </Col>
                </Row>
                <Row>
                    <h1 className="Current-Cutting">Cutting Suit</h1>
                    <img className="Current-Cutting-Images"
                        src={require("../cards/AS.png")}></img>
                    <h1 className="Current-Partner">Partner Card</h1>
                    <img className="Current-Partner-Images"
                        src={require("../cards/2S.png")}></img>
                </Row>
                <Row>
                    <img className="Card-Image-One"
                        src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Two"
                        src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Three"
                        src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Four"
                        src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Five"
                        src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Six"
                        src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Seven"
                        src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Eight"
                        src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Nine"
                        src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Ten"
                        src={require("../cards/2S.png")}></img>
                </Row>
                <Row>
                    <Link to="/scoreboard">
                        <button className="End-Game" type="button"> End Game </button>
                    </Link>
                </Row>

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