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
import Card from '../components/CardImage.js';
import BiddingPopup from '../components/BiddingPopup.js';
import CardsOnTable from '../components/CardsOnTable';

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
            playerIsBidding: false,
            biddingComplete: false,
            currentBidder: "",
            gameOngoing: false,
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
            cutting: "AS",
            partner: "TWOS",
            playerIsBidding: false,
            biddingComplete: true,
            currentBidder: "Anoushka",
            gameOngoing: true,
        })
    }

    render() {

        let textOnTable;

        // bidding is ongoing
        if (!(this.state.biddingComplete)) {
            if (!(this.state.playerIsBidding)) {
                //Only want this text if bidding is going on
                textOnTable = <text className = "Table-Bidding-Text">Waiting for {this.state.currentBidder} to bid...</text>
                //need to figure out how to make this go away after (change playerIsBidding to false)
            }
    
            else {
                textOnTable = <BiddingPopup
                    playerIsBidding={this.state.playerIsBidding}
                    minBidAvailable="70"
                    player="Anoushka"
                />
            }
        }

        // actual game is ongoing
        else if (this.state.gameOngoing) {
            textOnTable = <CardsOnTable
                thisPlayerCard={"AH"}
                playerOneCard={"QH"}
                playerTwoCard={"EIGHTH"}
                playerThreeCard={"SIXH"}
                playerFourCard={"TENH"}
            />
        }

        // table is empty
        else {
            textOnTable = <div></div>
        }

        return (
            <div className="Body">
                <Container>
                    <head>
                        <script type="text/javascript" src="../../../backend/logic/Main.js"></script>
                    </head>
                    <Row>
                        <Col>
                            {/* Seats */}
                            <Seat playerName={this.state.players[1]} className={"Player-Two"} />
                            <Seat playerName={this.state.players[2]} className={"Player-Three"} />
                            <Seat playerName={this.state.players[3]} className={"Player-Four"} />
                            <Seat playerName={this.state.players[4]} className={"Player-Five"} />

                            {/*Table*/}
                            <div className="Table">
                                <div className="On-Table">
                                    {textOnTable}
                                </div>
                            </div>
                            <Row>
                                <Card className="Card-Image-One" card={this.state.playerCardImages[0]} />
                                <Card className="Card-Image-Two" card={this.state.playerCardImages[1]} />
                                <Card className="Card-Image-Three" card={this.state.playerCardImages[2]} />
                                <Card className="Card-Image-Four" card={this.state.playerCardImages[3]} />
                                <Card className="Card-Image-Five" card={this.state.playerCardImages[4]} />
                                <Card className="Card-Image-Six" card={this.state.playerCardImages[5]} />
                                <Card className="Card-Image-Seven" card={this.state.playerCardImages[6]} />
                                <Card className="Card-Image-Eight" card={this.state.playerCardImages[7]} />
                                <Card className="Card-Image-Nine" card={this.state.playerCardImages[8]} />
                                <Card className="Card-Image-Ten" card={this.state.playerCardImages[9]} />
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
                                    <Card className="Current-Cutting-Images" card={this.state.cutting} />
                                </Col>
                                <Col>
                                    <h1 className="Current-Partner">Partner Card</h1>
                                    <Card className="Current-Partner-Images" card={this.state.partner} />
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