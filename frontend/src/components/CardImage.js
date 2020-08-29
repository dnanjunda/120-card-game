/* react imports */
import React, { Component } from 'react';

/* css imports */
import '../css/Game.css';

/* constant imports */
import Cards from '../constants/Cards.js';

class CardImage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <img className={this.props.className} src={Cards[this.props.test]}></img>
        );
    }

}

export default CardImage;