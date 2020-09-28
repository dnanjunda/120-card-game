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
import LeaderChoicePopup from '../components/LeaderChoicePopup.js';
import CardsOnTable from '../components/CardsOnTable';

/* constant imports */
import CardImages from '../constants/CardsToImages.js';

/* backend imports */
import { socket } from "../App.js";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // this player info
            playerName: "",
            playerTurn: false,
            playerCardImages: [],
            playerCards: [],

            // bidding info
            playerIsBidding: false,
            biddingComplete: false,
            currentBidder: "",
            currentPlayer: "",
            bid: "",
            minBid: "",

            // info of all players
            players: [],
            otherPlayerCards: [],

            // current game info
            gameOngoing: false,
            tableCards: [null, null, null, null, null],
            //leaderChoiceComplete: false,
            leader: "",
            dealer: "",
            cutting: "",
            partner: "",
        };
        this.getOtherCards = this.getOtherCards.bind(this);
    }

    callAPI() {
        const data = { name: this.props.location.state.name };
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
        console.log(this.state.tableCards);
        const data = { name: this.props.location.state.name };
        fetch("http://localhost:9000/codes/getplayers", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(res => this.setState({ players: res }))
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    getOtherCards() {
        const data = { name: this.state.leader };
        fetch("http://localhost:9000/testAPI/otherPlayerCards", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            //.then(res => console.log(res))
            .then(res => this.setState({ otherPlayerCards: res }))
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    componentDidMount() {
        this.setGame();
        //socket.emit("update_dealer", this.setDealer);
        //socket.on("set_dealer", this.setDealer);
        socket.on("bidding_complete", this.finishBidding);
        socket.on("player_bidding", this.decideBidder);
        socket.on("update_bidder", this.updateBidder);
        socket.on("new_bid", this.updateBid);
        socket.on("update_choices", this.updateChoices);
        socket.on("update_turn", this.updateTurn);
        socket.on("player_playing", this.decidePlayer);
        socket.on("card_played", this.updateTable);
        socket.on("hand_complete", this.resetTable);

    }

    /*setDealer = player => {
        //console.log("entered set dealer, player index is ", player);
        // after first game is complete, should get next dealer
        this.setState({ dealer: this.state.players[player] });
        //this.setState({ dealer: "Waiting" });
    }*/

    componentWillMount() {
        this.setState({ playerName: this.props.location.state.name });
        this.callAPI();
        this.getNames();
    }

    decideBidder = player => {
        if (this.props.location.state.name === player) {
            this.setState({ playerIsBidding: true });
            socket.emit("current_bidder", this.props.location.state.name);
        } else {
            this.setState({ playerIsBidding: false });
        }
    }

    decidePlayer = player => {
        if (this.props.location.state.name === player) {
            this.setState({ playerTurn: true });
        } else {
            this.setState({ playerTurn: false });
        }
    }

    updateTable = data => {
        if(this.state.playerName === this.state.currentPlayer) {
            this.state.tableCards[0] = data;
        } else {
            for(let i = 0; i < this.state.players.length; i++) {
                if(this.state.currentPlayer === this.state.players[i]) {
                    this.state.tableCards[i+1] = data;
                }
            }
        }
    }

    resetTable = () => {
        for(let i = 0; i < 5; i++) {
            this.state.tableCards[i] = null;
        }
    }

    updateBid = newBid => {
        this.setState({ bid: newBid[0] });
        //this.setState({ leader : newBid[1]});
        var min = parseInt(this.state.bid);
        if (min != 0) {
            min = min + 5;
            this.setState({ minBid: min.toString() });
        }
    }

    updateBidder = name => {
        this.setState({ currentBidder: name });
    }

    updateTurn = name => {
        this.setState({ currentPlayer: name });
    }

    finishBidding = name => {
        this.setState({ biddingComplete: true });
        this.setState({ leader: name[1] });
        this.getOtherCards();
    }

    updateChoices = data => {
        this.setState({ gameOngoing: true });
        this.setState({ cutting: data.suit });
        this.setState({ partner: data.card });
        this.setState({ leaderChoiceComplete: true });
    }

    handleBidResponse = bid => {
        socket.emit("player_bid", bid);
    }

    handleChoiceResponse = data => {
        socket.emit("leader_choice", data);
        this.setState({ playerTurn: true });
    }

    setGame() {
        this.setState({
            leader: "Waiting",
            bid: "70",
            minBid: "70",
            dealer: "Waiting",
            tableCards: [null, null, null, null, null],
            // each index is which player played card
            // null for that index if player has not played yet
            // last card is this player's card
            //tableCards: ["AH", "QH", "EIGHTH", "SIXH", "TENH"],
            cutting: "AS",
            partner: "TWOS",
            biddingComplete: false,
            gameOngoing: false,
            playerTurn: false,
        });
        //this.setDealer();
    }

    handleCardPlay(index, value) {
        if (this.state.playerTurn) {
            // add card to table
            let tableCardsCopy = [...this.state.tableCards];
            // have it be the player's index here
            let cardToChange = { ...tableCardsCopy[0] };
            cardToChange = value;
            tableCardsCopy[0] = cardToChange;

            // remove card from player hand
            let playerCardImagesCopy = [...this.state.playerCardImages];
            playerCardImagesCopy.splice(index, 1);

            var objToSend = {
                ind: index,
                card: value,
                player: this.state.playerName,
            }

            socket.emit("card_played", objToSend);

            this.setState({
                tableCards: tableCardsCopy,
                playerCardImages: playerCardImagesCopy,
                playerTurn: false,
            });
        }
    }

    render() {

        let textOnTable;

        // bidding is ongoing
        if (!(this.state.biddingComplete)) {
            if (!(this.state.playerIsBidding)) {
                //Only want this text if bidding is going on
                textOnTable = <text className="Table-Bidding-Text">Waiting for {this.state.currentBidder} to bid...</text>
            }
            else {
                textOnTable = <BiddingPopup
                    playerIsBidding={this.state.playerIsBidding}
                    minBidAvailable={this.state.minBid}
                    player={this.state.playerName}
                    dealer={this.state.dealer}
                    onResponse={this.handleBidResponse}
                />
            }
        }

        // actual game is ongoing
        else if (this.state.gameOngoing) {
            textOnTable = <CardsOnTable
                tableCards={this.state.tableCards}
            />
        }

        else if (this.state.leader != "Waiting") {
            if (this.props.location.state.name === this.state.leader) {
                //this.getOtherCards();
                textOnTable = <LeaderChoicePopup
                    otherPlayerCards={this.state.otherPlayerCards}
                    onResponse={this.handleChoiceResponse}
                />
            } else {
                textOnTable = <text className="Table-Bidding-Text">Waiting for {this.state.leader} to choose...</text>
            }
        }

        // table is empty
        else {
            textOnTable = <div></div>
        }

        const leaderChoiceAppears = this.state.leaderChoiceComplete ? "Display-Leader-Choices" : "Hide-Leader-Choices";

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
                                {this.state.playerCardImages.map((value, index) =>
                                    <div className="Cards-In-Hand">
                                        <button className="Card-Button" onClick={() => this.handleCardPlay(index, value)}>
                                            <Card className={`Card-Image-${index}`} card={value} onClick={() => this.handleCardPlay(index, value)} />
                                        </button>
                                    </div>
                                )}
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
                                    <h1 className={`Current-Cutting ${leaderChoiceAppears}`}>Cutting Suit</h1>
                                    <Card className={`Current-Cutting-Images ${leaderChoiceAppears}`} card={this.state.cutting} />
                                </Col>
                                <Col>
                                    <h1 className={`Current-Partner ${leaderChoiceAppears}`}>Partner Card</h1>
                                    <Card className={`Current-Partner-Images ${leaderChoiceAppears}`} card={this.state.partner} />
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