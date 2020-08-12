/* react imports */
import React, { Component } from 'react';

/* react router & bootstrap imports */
import { Link } from 'react-router-dom';

/* css imports */
import '../css/RanksDashboard.css';

class RanksDashboard extends Component {

    constructor(props) {
        super(props);
        this.handleModalClick = this.handleModalClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.state = {
            visible: false,
        }
    }

    handleModalClick = () => {
        this.setState({ visible: true });
    }

    handleCancelClick = () => {
        this.setState({ visible: false });
    }

    render() {

        if (this.state.visible) return (
            <div className="Ranks-Modal-Font">
                <button onClick={this.handleModalClick} className={`${this.props.className}-Ranks-Button`}>Ranks</button>
                <div className={`${this.props.className}-Ranks-Modal-Container`}>
                    <div className="Ranks-Modal-Title">
                        Ranks
                    </div>
                    <div className="Ranks-Modal-Content">
                        
                    </div>
                    <div>
                        <div className="Ranks-Modal-Buttons">
                            <button onClick={this.handleCancelClick} className="Ranks-Modal-Cancel-Button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );

        else return (
            <div className="Ranks-Modal-Font">
                <button onClick={this.handleModalClick} className={`${this.props.className}-Ranks-Button`}>Ranks</button>
            </div>
        );
    }
}

export default RanksDashboard

/*<Modal
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

                </Modal> */