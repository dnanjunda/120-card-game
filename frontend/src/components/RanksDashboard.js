import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

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
                <button className="EndGame-Button" onClick={openModal}>End Game</button>

                <Modal
                    show={this.state.open}
                    onHide={closeModal}
                    backdrop="static"
                    keyboard={false}
                    centered
                    id="Ranks-Modal"
                >

                    <Modal.Header>
                        <Modal.Title id="Title-Modal">Final Ranks</Modal.Title>
                    </Modal.Header>

                    <Modal.Body id="Body-Modal">
                        <h1>Player</h1>
                        <h1>Games Won</h1>
                        <h1>Total Points</h1>
                        <h1>Rank</h1>
                    </Modal.Body>

                    <Modal.Footer id="Footer-Modal">

                        <Link to="/home">
                            <button className="Home-Button">Home</button>
                        </Link>

                        <button onClick={closeModal} className="Cancel-Button">Cancel</button>
                    </Modal.Footer>

                </Modal>
            </div>
        );
    }
}

export default RanksDashboard