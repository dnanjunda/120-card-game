/* react imports */
import React from 'react';

/* bootstrap imports */
import { Container, Row, Col } from 'react-bootstrap';

/* css imports */
import '../css/Game.css';

/* component imports */
import Seat from '../components/Seat.js';
import GameButton from '../components/GameButton.js';
import FooterButtons from '../components/FooterButtons';

/* constant imports */
import CardImages from '../constants/Cards.js';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerCardImages: [],
            playerCards: [],
            players: [],
            leader: "",
            bid: "",
            dealer: "",
            cutting: "",
            partner: "",
            isBidding: false,
            currentBidder: "",
            testCard: "",
        };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI/array")
            .then(res => res.json())
            .then(res => this.setState({ playerCardImages: res }));
    }

    componentDidMount() {
        this.setGame();
    }

    componentWillMount() {
        this.callAPI();
    }

    setGame() {
        this.setState({
            players: ["Anoushka", "Ashley", "Dhanush", "Shreenithi", "Anshul"],
            leader: "Anoushka",
            bid: "75",
            dealer: "Shreenithi",
            cutting: CardImages.AS,
            partner: CardImages.TWOS,
            isBidding: false,
            currentBidder: "Anoushka",
            //testCard: require(this.state.cards[0]),
        })
    }

    render() {

        return (
            <div className="Body">
                <Container>
                    <head>
                        <script type="text/javascript" src="../../../backend/logic/Main.js"></script>
                    </head>
                    {/*Seats*/}
                    <Row>
                        <Col>
                            <Seat playerName={this.state.players[1]} className={"Player-Two"} />
                            <Seat playerName={this.state.players[2]} className={"Player-Three"} />
                            <Seat playerName={this.state.players[3]} className={"Player-Four"} />
                            <Seat playerName={this.state.players[4]} className={"Player-Five"} />

                            {/*Table*/}
                            <svg width="450" height="450" className="Table">
                                <circle
                                    cx={'225'}
                                    cy={'225'}
                                    r={'225'}
                                    fill={"#391f03"}
                                />
                                {/*Only want this text if bidding is going on.*/}
                                <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="24px" font-family="American Typewriter, serif" dy=".3em">Waiting for {this.state.currentBidder} to bid...</text>
                            </svg>

                            <Row>
                                <img className="Card-Image-One" src={this.state.playerCards[0]}></img>
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
                        </Col>
                        <Col>
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
                                <Col>
                                    <h1 className="Current-Cutting">Cutting Suit</h1>
                                    {this.state.cutting ? <img className="Current-Cutting-Images" src={this.state.cutting} responsive /> : null}
                                </Col>
                                <Col>
                                    <h1 className="Current-Partner">Partner Card</h1>
                                    {this.state.partner ? <img className="Current-Partner-Images" src={this.state.partner} responsive /> : null}
                                </Col>
                            </Row>
                            <Row>
                                <FooterButtons
                                    buttonsCount="1"
                                    buttonTitle="End Game"
                                    buttonPath="/results"
                                    className="Game"
                                />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Game;