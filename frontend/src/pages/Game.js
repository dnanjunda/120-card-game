import { Link } from 'react-router-dom';
import React, { Component, Text } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Game.css';

import Seat from '../components/Seat.js';
import GameButton from '../components/GameButton.js';

import aces from '../cards/AS.png'; //test import

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: "",
            playerOne: "",
            playerTwo: "",
            playerThree: "",
            playerFour: "",
            leader: "",
            bid: "",
            dealer: "",
            cutting: "",
            partner: "",
        };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI/array")
            .then(res => res.text())
            .then(res => this.setState({ cards: res }));
    }

    componentDidMount() {
        this.setGame();
    }

    componentWillMount() {
        this.callAPI();
    }

    setGame() {
        this.setState({
            playerOne: "Ashley",
            playerTwo: "Dhanush",
            playerThree: "Shreenithi",
            playerFour: "Anshul",
            leader: "Anoushka",
            bid: "75",
            dealer: "Shreenithi",
            cutting: require('../cards/AS.png'),
            partner: require('../cards/2S.png'),
        })
    }

    render() {

        return (
            <div className="Body">
                <head>
                    <script type="text/javascript" src="../../../backend/logic/Main.js"></script>
                </head>

                {/*Seats*/}
                <Seat playerName={this.state.playerOne} className={"Player-Two"} />
                <Seat playerName={this.state.playerTwo} className={"Player-Three"} />
                <Seat playerName={this.state.playerThree} className={"Player-Four"} />
                <Seat playerName={this.state.playerFour} className={"Player-Five"} />

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
                        <GameButton buttonText='Leader' text={this.state.leader} className="Leader-Button" />
                    </Col>
                    <Col>
                        <GameButton buttonText='Bid' text={this.state.bid} className="Bid-Button" />
                    </Col>
                    <Col>
                        <GameButton buttonText='Dealer' text={this.state.dealer} className="Dealer-Button" />
                    </Col>
                </Row>
                <Row>
                    <h1 className="Current-Cutting">Cutting Suit</h1>
                    {this.state.cutting ? <img className="Current-Cutting-Images" src={this.state.cutting} responsive /> : null}
                    <h1 className="Current-Partner">Partner Card</h1>
                    {this.state.partner ? <img className="Current-Partner-Images" src={this.state.partner} responsive /> : null}
                </Row>
                <Row>
                    <img className="Card-Image-One" src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Two" src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Three" src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Four" src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Five" src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Six" src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Seven" src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Eight" src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Nine" src={require("../cards/2S.png")}></img>
                    <img className="Card-Image-Ten" src={require("../cards/2S.png")}></img>
                </Row>
                <Row>
                    <Link to="/scoreboard">
                        <button className="End-Game" type="button"> End Game </button>
                    </Link>
                </Row>
                {/*<form method="post" action="http://localhost:9000/testAPI/start" >
                    <input type="submit" value="Start" />
                </form> 
                <p>array: {this.state.cards[0]}</p>
                <h1>{this.state.cards.slice(1,18)}</h1> */}
            </div>
        );
    }
}

export default Game;