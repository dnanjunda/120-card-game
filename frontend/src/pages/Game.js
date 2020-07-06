import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../css/Game.css';

class Game extends React.Component {
    render() {

        return (
            <div>
                <head>
                    <script type="text/javascript" src="../../../backend/logic/Main.js"></script>
                </head>
                <h1 className='titleStyle'>Game</h1>
                <button onclick="dumb()" >Start</button>
            </div>
        );
    }
}

export default Game;