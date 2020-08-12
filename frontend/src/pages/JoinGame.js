/* DELETE FILE */

import {Link} from 'react-router-dom';
import React from 'react';
import {Container} from 'react-bootstrap';

class JoinGame extends React.Component {
    render() {
        return (
            <div className="Body">
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