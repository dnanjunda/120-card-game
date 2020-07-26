import { Link } from 'react-router-dom';
import React, { Component, Stylesheet } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/GameResults.css';

import RanksDashboard from '../components/RanksDashboard';

class GameResults extends React.Component {
    render() {
        return (
            <div className="Body">
                <Container>
                    <h1 className="titleStyle"> Game Results: </h1>
                    <Row>
                        <Col>
                            <RanksDashboard/>
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

export default GameResults