/* react imports */
import React, { Component } from 'react';

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
                {this.props.tableCards.map((card, index) => 
                    <div className={`Player-${index}-Card-Position`}>
                        {card ? <img className={`Player-${index}-Card`} src={Cards[card]}></img> : null}
                    </div>
                )}
            </div>
        );
    }
}

export default CardsOnTable;