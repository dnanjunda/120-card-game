import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import '../css/StartGame.css';

class StartGame extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h1 className="Game-title">Starting new game...</h1>
                    <h1 className="Game-code">Your game code is...</h1>
                    <h2 className="Players-Title"> Players in your game:</h2>
                    <ol className="Players-list">
                        <li>Waiting</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                    </ol>
                    <h2 className="Waiting-Text">Waiting for five players to join...</h2>
                </Container>
                <br/>
                <br/>
            </div>
        );
    }
}

export default StartGame