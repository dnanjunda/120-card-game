/* react imports */
import React, { Component } from 'react';

/* css imports */
import '../css/LeaderChoicePopup.css';

/* constant imports */
import ImagestoCards from '../constants/ImagesToCards.js';

class LeaderChoicePopup extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        
    }

    render() {
        return (
            <div className="Leader-Choice-Popop-Container">
                <div>
                    <h2 className="Leader-Choice-Question-Text Leader-Choice-Cutting-Text">Choose your cutting suit:</h2>
                    <form>
                        <select className="Cutting-Suit-Input Leader-Choice-Input">
                            <option className="Leader-Choice-Selection" selected value="spades">Spades</option>
                            <option className="Leader-Choice-Selection" value="diamonds">Diamonds</option>
                            <option className="Leader-Choice-Selection" value="clubs">Clubs</option>
                            <option className="Leader-Choice-Selection" value="hearts">Hearts</option>
                        </select>
                    </form>
                </div>
                <div>
                    <h2 className="Leader-Choice-Question-Text">Choose your partner card:</h2>
                    <form>
                        <select className="Partner-Card-Input Leader-Choice-Input">
                            {this.props.otherPlayerCards.map((val) =>
                                <option className="Leader-Choice-Selection" value={val}>{ImagestoCards[val]}</option>
                            )}
                        </select>
                    </form>
                </div>
                <button className="Leader-Choice-Submit-Button" onClick={(event) => this.handleSubmit(event)}>Submit</button>
            </div>
        );
    }
}

export default LeaderChoicePopup;