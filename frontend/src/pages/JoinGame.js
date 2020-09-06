/* DELETE FILE */

import { Link } from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/JoinGame.css';
import {joinCode, user} from '../components/JoinDashboard';
import {socket} from "../App.js";

class JoinGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [], code: "", sample: "abc", players: [] };
        this.startgame = this.startgame.bind(this);
    }

    callAPI() {
        fetch("http://localhost:9000/codes/getplayers")
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        socket.emit("incoming_data", user);
       // this.callAPI();
    }

    componentDidMount() {
        socket.on("received_data", this.assignData); 
        socket.on("game_started", this.startgame);
    }

    startgame() {
        this.props.history.push({
            pathname: '/game'
            });
    }

    assignData = playerNames => {
        this.setState({apiResponse: [playerNames.names[0], playerNames.names[1], playerNames.names[2], playerNames.names[3], playerNames.names[4]]});
    }

    render() {

        return (
            <div className="Body" location={this.props.location}>
                <Container>
                    <h1 className="Game-Title">Joined game {joinCode} </h1>
                    <h2 className="Players"> Players in this game:</h2>
                    <ol className="Players-List">
                        <li>{this.state.apiResponse[0]}</li>
                        <li>{this.state.apiResponse[1]}</li>
                        <li>{this.state.apiResponse[2]}</li>
                        <li>{this.state.apiResponse[3]}</li>
                        <li>{this.state.apiResponse[4]}</li>
                    </ol>
                    <h2 className="Waiting">Waiting for five players to join...</h2>
                </Container>
                <br />
                <br />
            </div>
        );
    }
}

export default JoinGame