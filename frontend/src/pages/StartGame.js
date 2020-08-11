import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/StartGame.css';
import {socket} from "../App.js";

class StartGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [], code: "", sample: "abc" };
    }

    callAPI() {
        fetch("http://localhost:9000/codes/getplayers")
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        socket.emit("incoming_data", this.props.location.state.user);
       // this.callAPI();
    }

    componentDidMount() {
        var returnData = [];
        const {codes} = this.props.location.state;
        this.state.code = codes;
        socket.on("received_data", function(data) {
            console.log(data);
            returnData[0] = data[0];
        });
        console.log(returnData);
        this.state.apiResponse[0] = returnData[0];
        console.log(this.state.apiResponse);
        //this.callAPI();
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
                        <li>{this.state.apiResponse}</li>
                        <li>{this.state.apiResponse}</li>
                        <li>{this.state.apiResponse}</li>
                        <li>{this.state.apiResponse}</li>
                    </ol>
                    <h2 className="Waiting-Text">Waiting for five players to join...</h2>

                    <Row>
                        <Col>
                            <Link to="/game">
                                <button className="Button" type="button"> Start Game! </button>
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