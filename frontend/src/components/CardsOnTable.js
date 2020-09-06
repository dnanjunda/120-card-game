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

        let placeHolderCardOne = <div className="Temporary-Render-One">TEMP RENDER ONE</div>
        let placeHolderCardTwo = <div className="Temporary-Render-Two">TEMP RENDER TWO</div>
        let placeHolderCardThree = <div className="Temporary-Render-Three">TEMP RENDER THREE</div>
        let placeHolderCardFour = <div className="Temporary-Render-Four">TEMP RENDER FOUR</div>

        return (
            <div className="Card-Image-Align">
                <div className="Player-One-Card-Position">
                    {this.props.playerOneCard ? <img className="Player-One-Card" src={Cards[this.props.playerOneCard]}></img> : placeHolderCardOne}
                </div>
                <div className="Player-Two-Card-Position">
                    {this.props.playerTwoCard ? <img className="Player-Two-Card" src={Cards[this.props.playerTwoCard]}></img> : placeHolderCardTwo}
                </div>
                <div className="Player-Three-Card-Position">
                    {this.props.playerThreeCard ? <img className="Player-Three-Card" src={Cards[this.props.playerThreeCard]}></img> : placeHolderCardThree}
                </div>
                <div className="Player-Four-Card-Position">
                    {this.props.playerFourCard ? <img className="Player-Four-Card" src={Cards[this.props.playerFourCard]}></img> : placeHolderCardFour}
                </div>
                <div className="This-Player-Card-Position">
                    {this.props.thisPlayerCard ? <img className="This-Player-Card" src={Cards[this.props.thisPlayerCard]}></img> : null}
                </div>
            </div>
        );
    }
}

export default CardsOnTable;