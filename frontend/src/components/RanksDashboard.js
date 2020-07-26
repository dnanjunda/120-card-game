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
                <button className={this.props.className} onClick={openModal}>{this.props.buttonTitle}</button>

                <Modal
                    show={this.state.open}
                    onHide={closeModal}
                    backdrop="static"
                    keyboard={false}
                    centered
                    id="Ranks-Modal"
                >

                    <Modal.Header>
                        <Modal.Title id="Title-Modal">{this.props.modalTitle}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body id="Body-Modal">
                        Rank
                        Player
                        Games Won
                        Total Points
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