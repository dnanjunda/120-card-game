/* react imports */
import React from 'react';

/* react router & bootstrap imports */
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

/* css imports */
import '../css/StartGame.css';

/* component imports */
import FooterButtons from '../components/FooterButtons.js';

/* backend imports */
import { socket } from "../App.js";

class StartGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: [], code: "", sample: "abc" };
        this.assignData = this.assignData.bind(this);
        this.startgame = this.startgame.bind(this);
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        socket.emit("incoming_data", this.props.location.state.user);
        socket.on("received_data", this.assignData);
        // this.callAPI();
    }

    componentDidMount() {
        const { codes } = this.props.location.state;
        this.state.code = codes;
    }

    assignData = playerNames => {
        this.setState({ apiResponse: [playerNames.names[0], playerNames.names[1], playerNames.names[2], playerNames.names[3], playerNames.names[4]] });
    }

    startgame() {

        socket.emit("starting_game");
        this.props.history.push({
            pathname: '/game',
            state: {
                names: this.state.apiResponse
            }
        });
    }

    render() {

        return (
            <div className="Body">
                <Container>
                    <h1 className="Game-title">Starting new game...</h1>
                    <h1 className="Game-code">Your game code is {this.props.location.state.codes}.</h1>
                    <h2 className="Players-Title"> Players in your game:</h2>
                    <ol className="Players-list">
                        <li>{this.state.apiResponse[0]}</li>
                        <li>{this.state.apiResponse[1]}</li>
                        <li>{this.state.apiResponse[2]}</li>
                        <li>{this.state.apiResponse[3]}</li>
                        <li>{this.state.apiResponse[4]}</li>
                    </ol>
                    <h2 className="Waiting-Text">Waiting for five players to join...</h2>

                    <FooterButtons
                        leftButtonTitle="Return to Home"
                        leftPath="/home"
                        rightButtonTitle="Start Game!"
                        rightPath="/game"
                        className="Start-Game"
                        history={this.props.history}
                        user={this.props.location.state.user}
                        startPage={true}
                    />

                </Container>
                <br />
                <br />
            </div>
        );
    }
}

export default StartGame