import { Link } from 'react-router-dom';
import React, { Component, Stylesheet } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Scoreboard.css';

class Scoreboard extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h1 className="titleStyle"> Scoreboard: </h1>
                    <Row>
                        <Col>
                            <Link to="/home">
                                <button className="Button" type="button"> Return to Home </button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/game">
                                <button className="Button" type="button"> Start Next Game </button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Scoreboard