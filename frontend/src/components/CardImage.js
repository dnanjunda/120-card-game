/* react imports */
import React, { Component } from 'react';
import Cards from '../constants/Cards.js';
import '../css/Game.css';

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