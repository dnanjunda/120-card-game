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
            biddingComplete: false,
            currentBidder: "",
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
            isBidding: true,
            biddingComplete: false,
            currentBidder: "Anoushka",
        })
    }

    render() {

        let textOnTable;

        if (!(this.state.biddingComplete)) {
            if (!(this.state.isBidding)) {
                {/*Only want this text if bidding is going on.*/ }
                textOnTable = <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="2vw" font-family="American Typewriter, serif" dy=".3em" z-index="5">Waiting for {this.state.currentBidder} to bid...</text>;
                {/* need to figure out how to make this go away after (change isBidding to false) */ }
            }
    
            else {
                textOnTable = <BiddingPopup
                    isBidding={this.state.isBidding}
                    minBidAvailable="70"
                    player="Anoushka"
                />;
            }
        }

        else {
            textOnTable = <div></div>;
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
                            <div>
                                <svg width="450" height="450" className="Table">
                                    <circle
                                        cx={'225'}
                                        cy={'225'}
                                        r={'225'}
                                        fill={"#391f03"}
                                    />
                                    {textOnTable}
                                </svg>
                                {textOnTable}
                            </div>

                            <Row>
                                <Card className="Card-Image-One" test={this.state.playerCardImages[0]} />
                                <Card className="Card-Image-Two" test={this.state.playerCardImages[1]} />
                                <Card className="Card-Image-Three" test={this.state.playerCardImages[2]} />
                                <Card className="Card-Image-Four" test={this.state.playerCardImages[3]} />
                                <Card className="Card-Image-Five" test={this.state.playerCardImages[4]} />
                                <Card className="Card-Image-Six" test={this.state.playerCardImages[5]} />
                                <Card className="Card-Image-Seven" test={this.state.playerCardImages[6]} />
                                <Card className="Card-Image-Eight" test={this.state.playerCardImages[7]} />
                                <Card className="Card-Image-Nine" test={this.state.playerCardImages[8]} />
                                <Card className="Card-Image-Ten" test={this.state.playerCardImages[9]} />
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
                                    <Card className="Current-Cutting-Images" test={this.state.cutting} />
                                </Col>
                                <Col>
                                    <h1 className="Current-Partner">Partner Card</h1>
                                    <Card className="Current-Partner-Images" test={this.state.partner} />
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