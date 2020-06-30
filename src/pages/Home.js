import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/Home.css';
import JoinDashboard from '../components/JoinDashboard.js';
import Navigation from '../components/Navigation';

class Home extends React.Component {
    render() {

        return (
            <div>
                <Navigation val = {false}/>
                <Container>
                    <h1 className="Home-Title">Welcome to 120!</h1>
                    <p className="Description"> An Original, Online, Multiplayer Card Game!</p>
                    <Row>
                        <Col>
                    <Link to="/startgame">
                        <button className="Start-Game" type="button"> Start New Game! </button>
                    </Link>
                    </Col>
                    <Col>
                    <JoinDashboard/>
                    </Col>
                    </Row>
                    {/* <Link to="/joingame">
                        <button className="Join-Game" type="button"> Join A Game! </button>
                    </Link> */}
                </Container>
            </div>
        );
    }
}

export default Home;