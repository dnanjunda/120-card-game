/* react imports */
import React, { Component, Button } from 'react';

/* bootstrap imports */
import { Container, Row, Col } from 'react-bootstrap';

/* css imports */
import '../css/CardsOnTable.css';

/* constant imports */
import Cards from '../constants/Cards.js';

class CardsOnTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Card-Image-Align">
                <div className="Player-One-Card-Position">
                    <img className="Player-One-Card" src={Cards[this.props.playerOneCard]}></img>
                </div>
                <div className="Player-Two-Card-Position">
                    <img className="Player-Two-Card" src={Cards[this.props.playerTwoCard]}></img>
                </div>
                <div className="Player-Three-Card-Position">
                    <img className="Player-Three-Card" src={Cards[this.props.playerThreeCard]}></img>
                </div>
                <div className="Player-Four-Card-Position">
                    <img className="Player-Four-Card" src={Cards[this.props.playerFourCard]}></img>
                </div>
                <div className="This-Player-Card-Position">
                    <img className="This-Player-Card" src={Cards[this.props.thisPlayerCard]}></img>
                </div>
            </div>
        );
    }
}

export default CardsOnTable;