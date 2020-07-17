import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import '../css/JoinGame.css';

class JoinGame extends React.Component {
    render() {
        return (
            <div>
                <Container>
        <h1 className="Game-Title">Joined game...</h1>
                    <h2 className="Players"> Players in this game:</h2>
                    <ol className="Players-List">
                        <li>Waiting</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                        <li>Waiting</li>
                    </ol>
                    <h2 className="Waiting">Waiting for five players to join...</h2>
                </Container>
                <br/>
                <br/>
            </div>
        );
    }
}

export default JoinGame