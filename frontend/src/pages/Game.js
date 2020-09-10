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

/* backend imports */
import { socket } from "../App.js";

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
            playerName: ""
        };
    }

    callAPI() {
        const data = { name: this.props.location.state.name};
        fetch("http://localhost:9000/testAPI/array", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(res => this.setState({ playerCardImages: res }));
    }

    getNames() {
        const data = { name: this.props.location.state.name};
        fetch("http://localhost:9000/codes/getplayers", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            //.then(res => console.log(res))
            .then(res => this.setState({ players: res }))
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    componentDidMount() {
        this.setGame();
        socket.on("bidding_complete", this.finishBidding);
        socket.on("player_bidding", this.decideBidder);
        socket.on("update_bidder", this.updateBidder);
        socket.on("new_bid", this.updateBid);

    }

    componentWillMount() {
        this.setState({ playerName: this.props.location.state.name});
        this.callAPI();
        this.getNames();
    }

    decideBidder = player => {
        if(this.props.location.state.name === player) {
            this.setState({ playerIsBidding: true});
            //this.setState({ currentBidder: this.props.location.state.name});
            socket.emit("current_bidder", this.props.location.state.name);
        } else {
            this.setState({ playerIsBidding: false});
        }
    }

    updateBid = newBid => {
        this.setState({ bid : newBid});
    }

    updateBidder = name => {
        this.setState({currentBidder: name});
    }

    finishBidding = () => {
        this.setState({ biddingComplete: true});
        this.setState({ gameOngoing: true});
    }

    handleBidResponse = bid => {
        socket.emit("player_bid", bid);
    }

    setGame() {
        this.setState({
            leader: "Waiting",
            bid: "70",
            dealer: "Waiting",
            cutting: "AS",
            partner: "TWOS",
            biddingComplete: false,
            gameOngoing: false,
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
                console.log("in else");
                textOnTable = <BiddingPopup
                    playerIsBidding={this.state.playerIsBidding}
                    minBidAvailable={this.state.bid}
                    player={this.state.playerName}
                    onResponse={this.handleBidResponse}
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
                            <Seat playerName={this.state.players[0]} className={"Player-Two"} />
                            <Seat playerName={this.state.players[1]} className={"Player-Three"} />
                            <Seat playerName={this.state.players[2]} className={"Player-Four"} />
                            <Seat playerName={this.state.players[3]} className={"Player-Five"} />

                            {/*Table*/}
                            <div className="Table">
                                <div className="On-Table">
                                    {textOnTable}
                                </div>
                            </div>
                            <Row>
                                <div className="Cards-In-Hand">
                                    <Card className="Card-Image-One" card={this.state.playerCardImages[0]} />
                                </div>
                                <div className="Cards-In-Hand">
                                    <Card className="Card-Image-Two" card={this.state.playerCardImages[1]} /> 
                                </div>
                                <div className="Cards-In-Hand">
                                    <Card className="Card-Image-Three" card={this.state.playerCardImages[2]} />
                                </div>
                                <div className="Cards-In-Hand">
                                    <Card className="Card-Image-Four" card={this.state.playerCardImages[3]} />
                                </div>
                                <div className="Cards-In-Hand">
                                    <Card className="Card-Image-Five" card={this.state.playerCardImages[4]} />
                                </div>
                                <div className="Cards-In-Hand">
                                    <Card className="Card-Image-Six" card={this.state.playerCardImages[5]} /> 
                                </div>
                                <div className="Cards-In-Hand">
                                    <Card className="Card-Image-Seven" card={this.state.playerCardImages[6]} />
                                </div>
                                <div className="Cards-In-Hand">
                                    <Card className="Card-Image-Eight" card={this.state.playerCardImages[7]} />
                                </div>
                                <div className="Cards-In-Hand">
                                    <Card className="Card-Image-Nine" card={this.state.playerCardImages[8]} />
                                </div>
                                <div className="Cards-In-Hand">
                                    <Card className="Card-Image-Ten" card={this.state.playerCardImages[9]} />
                                </div>
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