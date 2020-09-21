/* react imports */
import React from 'react';

/* react router & bootstrap imports */
import { Container, Row, Col } from 'react-bootstrap';

/* css imports */
import '../css/Results.css';

/* components imports */
import FooterButtons from '../components/FooterButtons.js';
import Card from '../components/CardImage.js';

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            players: "",
            playerHands: [["AS", "KS", "QS", "JS", "TENS", "NINES", "EIGHTS", "SEVENS", "SIXS", "FIVES"],
                ["FOURS", "THREES", "TWOS", "AD", "KD", "QD", "JD", "TEND", "NINED", "EIGHTD"],
                ["SEVEND", "SIXD", "FIVED", "FOURD", "THREED", "AC", "KC", "QC", "JC", "TENC"],
                ["NINEC", "EIGHTC", "SEVENC", "SIXC", "FIVEC", "FOURC", "THREEC", "AH", "KH", "QH"],
                ["JH", "TENH", "NINEH", "EIGHTH", "SEVENH", "SIXH", "FIVEH", "FOURH", "THREEH", "TWOH"]],
            currentPoints: "",
            totalPoints: "",
            gamesWon: "",
            ranks: "",
            playerInformation: [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']],
            winningTeam: "",
            winningTotal: "",
            winningPlayers: "",
            winningPlayersEmoji: ['', '', '', '', ''],
        }
    }

    componentDidMount() {
        this.setResults();
    }

    setResults() {
        this.setState({
            players: ["Anoushka", "Ashley", "Dhanush", "Shreenithi", "Anshul"],
            currentPoints: ["50", "10", "10", "30", "20"],
            totalPoints: ["1000", "1000", "1000", "1000", "1000"],
            gamesWon: ["10", "10", "10", "10", "10"],
            ranks: ["1", "3", "5", "2", "4"],
            winningTeam: "Leading",
            winningTotal: "80",
            winningPlayers: ["Anoushka", "Shreenithi"],
        });

        // give winning players their crown emojis
        let counter = this.state.winningPlayers.length;
        let emojiArr = ['', '', '', '', ''];
        for (let i = 0; i < this.state.players.length; i++) {
            for (let j = 0; j < this.state.winningPlayers.length; j++) {
                if (this.state.players[i] === this.state.winningPlayers[j]) {
                    emojiArr[i] = '\u{1F451}';

                    counter--;
                    if (counter === 0) {
                        break;
                    }

                    console.log(this.state.winningPlayersEmoji[i]);
                    console.log(counter);
                    console.log("entered");
                }
            }
        }

        // put player info together
        let playerInfoArr = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']];
        for (let i = 0; i < this.state.players.length; i++) {
            playerInfoArr[i][0] = this.state.currentPoints[i];
            playerInfoArr[i][1] = this.state.totalPoints[i];
            playerInfoArr[i][2] = this.state.gamesWon[i];
            playerInfoArr[i][3] = this.state.ranks[i];
        }

        this.setState({
            winningPlayersEmoji: emojiArr,
            playerInformation: playerInfoArr,
        });
    }

    render() {
        console.log(this.state.playerInformation);
        return (
            <div className="Body">
                {this.state.winningPlayersEmoji.map((val) => <h1><span>{val}</span></h1>)}
                <h1 className="Winner-Text">{this.state.winningTeam} Team won with {this.state.winningTotal} points!</h1>
                <div className="Rows">
                    {['Player', 'Cards', 'Points', 'TotalPoints', 'Games Won', 'Rank'].map((title) =>
                        <Col className="Title"><h2>{title}</h2></Col>
                    )}
                </div>
                <div className="Rows">
                    <Col className="Player">
                        {this.state.players[0]} <span>{this.state.winningPlayersEmoji[0]}</span>
                    </Col>
                    <Col className="Player">
                        <div className="Card-Scroll">
                            {this.state.playerHands[0].map((value) => <Card className="Card" card={value} />)}
                        </div>
                    </Col>
                    {this.state.playerInformation[0].map((val) => <Col className="Player">{val}</Col>)}
                    {/*<Col className="Player">50</Col>
                    <Col className="Player">1000</Col>
                    <Col className="Player">10</Col>
                    <Col className="Player">1</Col>*/}
                </div>
                <div className="Rows">
                    <Col className="Player">
                        {this.state.players[1]}
                    </Col>
                    <Col className="Player">
                        <div className="Card-Scroll">
                            {this.state.playerHands[1].map((value) => <Card className="Card" card={value} />)}
                        </div>
                    </Col>
                    {this.state.playerInformation[1].map((val) => <Col className="Player">{val}</Col>)}
                    {/*<Col className="Player">10</Col>
                    <Col className="Player">1000</Col>
                    <Col className="Player">10</Col>
                    <Col className="Player">3</Col>*/}
                </div>
                <div className="Rows">
                    <Col className="Player">
                        {this.state.players[2]}
                    </Col>
                    <Col className="Player">
                        <div className="Card-Scroll">
                            {this.state.playerHands[2].map((value) => <Card className="Card" card={value} />)}
                        </div>
                    </Col>
                    {this.state.playerInformation[2].map((val) => <Col className="Player">{val}</Col>)}
                    {/*<Col className="Player">10</Col>
                    <Col className="Player">1000</Col>
                    <Col className="Player">10</Col>
                    <Col className="Player">5</Col>*/}
                </div>
                <div className="Rows">
                    <Col className="Player">
                        {this.state.players[3]} <span>{'\u{1F451}'}</span>
                    </Col>
                    <Col className="Player">
                        <div className="Card-Scroll">
                            {this.state.playerHands[3].map((value) => <Card className="Card" card={value} />)}
                        </div>
                    </Col>
                    {this.state.playerInformation[3].map((val) => <Col className="Player">{val}</Col>)}
                    {/*<Col className="Player">30</Col>
                    <Col className="Player">1000</Col>
                    <Col className="Player">10</Col>
                    <Col className="Player">2</Col>*/}
                </div>
                <div className="Rows">
                    <Col className="Player">
                        {this.state.players[4]}
                    </Col>
                    <Col className="Player">
                        <div className="Card-Scroll">
                            {this.state.playerHands[4].map((value) => <Card className="Card" card={value} />)}
                        </div>
                    </Col>
                    {this.state.playerInformation[4].map((val) => <Col className="Player">{val}</Col>)}
                    {/*<Col className="Player">20</Col>
                    <Col className="Player">1000</Col>
                    <Col className="Player">10</Col>
                    <Col className="Player">4</Col>*/}
                </div>

                <FooterButtons
                    leftButtonTitle="Start Next Game"
                    leftPath="/game"
                    rightButtonTitle="End Game"
                    rightPath="/home"
                    className="Results"
                />
            </div>
        );
    }
}

export default Results