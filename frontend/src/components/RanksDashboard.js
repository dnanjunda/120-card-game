/* react imports */
import React, { Component } from 'react';

/* react router & bootstrap imports */
import { Link } from 'react-router-dom';
import { Modal, Container, Row, Col } from 'react-bootstrap';

/* css imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/RanksDashboard.css';

class RanksDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    render() {

        let closeModal = () => this.setState({ open: false })
        let openModal = () => this.setState({ open: true })

        return (
            <div>
                <button className={this.props.className} onClick={openModal}>{this.props.buttonTitle}</button>

                <Modal
                    show={this.state.open}
                    onHide={closeModal}
                    backdrop="static"
                    keyboard={false}
                    centered
                    size="lg"
                    id="Ranks-Modal"
                >
                    <Modal.Header id="Header-Modal">
                        <Modal.Title id="Title-Modal">{this.props.modalTitle}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body id="Body-Modal">
                        <Container>
                            <Row className="Rank-Titles">
                                <Col>
                                    Rank
                                </Col>
                                <Col>
                                    Player
                                </Col>
                                <Col>
                                    Games Won
                                </Col>
                                <Col>
                                    Total Points
                                </Col>
                            </Row>
                            <Row className="Rankings">
                                <Col>
                                    1
                                </Col>
                                <Col>
                                    Anoushka
                                </Col>
                                <Col>
                                    10
                                </Col>
                                <Col>
                                    1000
                                </Col>
                            </Row>
                            <Row className="Rankings">
                                <Col>
                                    1
                                </Col>
                                <Col>
                                    Anoushka
                                </Col>
                                <Col>
                                    10
                                </Col>
                                <Col>
                                    1000
                                </Col>
                            </Row>
                            <Row className="Rankings">
                                <Col>
                                    1
                                </Col>
                                <Col>
                                    Anoushka
                                </Col>
                                <Col>
                                    10
                                </Col>
                                <Col>
                                    1000
                                </Col>
                            </Row>
                            <Row className="Rankings">
                                <Col>
                                    1
                                </Col>
                                <Col>
                                    Anoushka
                                </Col>
                                <Col>
                                    10
                                </Col>
                                <Col>
                                    1000
                                </Col>
                            </Row>
                            <Row className="Rankings">
                                <Col>
                                    1
                                </Col>
                                <Col>
                                    Anoushka
                                </Col>
                                <Col>
                                    10
                                </Col>
                                <Col>
                                    1000
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>

                    <Modal.Footer id="Footer-Modal">

                        <Link to={this.props.path}>
                            <button className="Continue-Button">Continue</button>
                        </Link>

                        <button onClick={closeModal} className="Cancel-Button">Cancel</button>
                    </Modal.Footer>

                </Modal>
            </div>
        );
    }
}

export default RanksDashboard