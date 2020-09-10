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

        const tempRender0 = <div className="Temporary-Render-0"></div>
        const tempRender1 = <div className="Temporary-Render-1"></div>
        const tempRender2 = <div className="Temporary-Render-2"></div>
        const tempRender3 = <div className="Temporary-Render-3"></div>
        const tempRender4 = <div className="Temporary-Render-4"></div>

        let temporaryRender = [tempRender0, tempRender1, tempRender2, tempRender3, tempRender4];

        return (
            <div className="Card-Image-Align">
                {this.props.tableCards.map((card, index) => 
                    <div className={`Player-${index}-Card-Position`}>
                        {card ? <img className={`Player-${index}-Card`} src={Cards[card]}></img> : temporaryRender[index]}
                    </div>
                )}
            </div>
        );
    }
}

export default CardsOnTable;