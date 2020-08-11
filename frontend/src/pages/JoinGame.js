import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import '../css/JoinGame.css';
import {joinCode, user} from '../components/JoinDashboard';
import {socket} from "../App.js";


class JoinGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [], code: "", sample: "abc", players: [] };
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
        var returnData;
        socket.on("received_data", function(data) {
            returnData = data;
        });
        console.log(returnData);
        this.state.apiResponse = returnData;
        // const {codes} = this.props.location.state;
        // this.state.code = codes;
        //this.callAPI();
    }

    render() {
        return (
            <div className="Body" location={this.props.location}>
                <Container>
                    <h1 className="Game-Title">Joined game {joinCode} </h1>
                    <h2 className="Players"> Players in this game:</h2>
                    <ol className="Players-List">
                        <li>{this.state.players}</li>
                        <li>{this.state.players}</li>
                        <li>{this.state.apiResponse}</li>
                        <li>{this.state.apiResponse}</li>
                        <li>{this.state.apiResponse}</li>
                    </ol>
                    <h2 className="Waiting">Waiting for five players to join...</h2>
                </Container>
                <br/>
                <br/>
            </div>
        );
    }
}

export default JoinGame;