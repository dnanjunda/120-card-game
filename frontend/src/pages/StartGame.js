import { Link } from 'react-router-dom';
import React, { Component, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/StartGame.css';
import {socket} from "../App.js";

class StartGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [], code: "", sample: "abc" };
        this.assignData = this.assignData.bind(this);
        this.startgame = this.startgame.bind(this);
        // this.getPlayers = this.getPlayers.bind(this);
    }

    callAPI() {
        fetch("http://localhost:9000/codes/getplayers")
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        socket.emit("incoming_data", this.props.location.state.user);
        socket.on("received_data", this.assignData); 
       // this.callAPI();
    }

    componentDidMount() {
        const {codes} = this.props.location.state;
        this.state.code = codes;
        //socket.on("received_data", this.assignData); 
        // {
        //     console.log(data);
        //     console.log(data.names[0]);
        //     var name = data.names[0];
        //     returnData = data.names;
        //     returnData = [...returnData, name];
        //     this.assignData(data);

        // });
        // console.log(returnData);
        // this.setState({apiResponse: [this.state.apiResponse, returnData[0]]});
        // //this.state.apiResponse.push(returnData[0]);
        // console.log(this.state.apiResponse);
        //this.callAPI();
    }

    // useEffect() {
    //     this.getPlayers();
    // };

    // getPlayers = async () => {
    //     socket.on("received_data", this.assignData);
    // }

    assignData = playerNames => {
        this.setState({apiResponse: [playerNames.names[0], playerNames.names[1], playerNames.names[2], playerNames.names[3], playerNames.names[4]]});
    }

    getNames() {
        return (
            <div>
            <li>{this.state.apiResponse[0]}</li>
            <li>{this.state.apiResponse[1]}</li>
            <li>{this.state.apiResponse[2]}</li>
            <li>{this.state.apiResponse[3]}</li>
            <li>{this.state.apiResponse[4]}</li>
            </div>
        );
    }

    startgame() {
        socket.emit("starting_game");
        this.props.history.push({
            pathname: '/game'
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
                        {this.getNames()}
                    </ol>
                    <h2 className="Waiting-Text">Waiting for five players to join...</h2>

                    <Row>
                        <Col>
                            <Link to="/game">
                                <button className="Button" type="button" onClick={this.startgame} > Start Game! </button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/home">
                                <button className="Button" type="button"> Return to Start </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
            </div>
        );
    }
}

export default StartGame