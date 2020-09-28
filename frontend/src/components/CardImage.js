/* react imports */
import React, { Component } from 'react';

/* css imports */
import '../css/Game.css';
import '../css/Results.css';

/* constant imports */
import CardsToImages from '../constants/CardsToImages.js';

class CardImage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <img className={this.props.className} src={CardsToImages[this.props.card]}></img>
        );
    }

}

export default CardImage;