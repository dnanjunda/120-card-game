import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../css/Game.css';

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
        };
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
                <h1 className='titleStyle'>Game</h1>
                <p>array: {this.state.apiResponse.slice(1,18)}</p>
                <h1>{this.state.apiResponse.slice(1,18)}</h1>
                <img src={require("../cards/KS.png")}></img>
                {/*<img src={require(this.state.apiResponse.slice(1,18))}></img>*/}
                <form method="post" action="http://localhost:9000/testAPI/start" >
                    <input type="submit" value="Start" />
                </form>
            </div>
        );
    }
}

export default Game;