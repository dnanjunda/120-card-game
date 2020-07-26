import { Link } from 'react-router-dom';
import React, { Component, Stylesheet } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import '../css/GameResults.css';

import RanksDashboard from '../components/RanksDashboard';

class GameResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }

    render() {

        let closeModal = () => this.setState({ open: false })

        return (
            <div className="Body">
                <Modal
                    show={this.state.open}
                    onHide={closeModal}
                    backdrop="static"
                    keyboard={false}
                    centered
                    id="Win-Modal"
                >
                    <Modal.Body id="Body-Modal">
                        Leading Team (Anoushka, Shreenithi) won with 80 points!
                    </Modal.Body>

                    <Modal.Footer id="Footer-Modal">
                        <button onClick={closeModal} className="Close-Button">Close</button>
                    </Modal.Footer>

                </Modal>

                <Container>
                    <h1 className="Title-Style"> Game Results: </h1>
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