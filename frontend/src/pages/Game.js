import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../css/Game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI/array")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {

        return (
            <div>
                <head>
                    <script type="text/javascript" src="../../../backend/logic/Main.js"></script>
                </head>
                <p> array: {this.state.apiResponse} </p>
                <h1 className='titleStyle'>Game</h1>
                <form method="post" action="http://localhost:9000/testAPI/start" >
                <input type="submit" value="Start" />
                </form>
            </div>
        );
    }
}

export default Game;