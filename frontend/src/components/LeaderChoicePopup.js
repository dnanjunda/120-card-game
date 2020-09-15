/* react imports */
import React, { Component } from 'react';

/* css imports */
import '../css/LeaderChoicePopup.css';

/* constant imports */
import ImagestoCards from '../constants/ImagesToCards.js';

class LeaderChoicePopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuttingSuit: "",
            partnerCard: ""
        }
    }

    handleSubmit = (event) => {
        var dataToSend = {
            suit: this.state.cuttingSuit,
            card: this.state.partnerCard
        }
        this.props.onResponse(dataToSend);
    }

    handleSuitChange = (event) => {
        this.setState({
            cuttingSuit: event.target.value,
        });
    }

    handleCardChange = (event) => {
        this.setState({
            partnerCard: event.target.value,
        });
    }

    render() {
        return (
            <div className="Leader-Choice-Popop-Container">
                <div>
                    <h2 className="Leader-Choice-Question-Text Leader-Choice-Cutting-Text">Choose your cutting suit:</h2>
                    <form>
                        <select className="Cutting-Suit-Input Leader-Choice-Input" onChange={this.handleSuitChange}>
                            <option className="Leader-Choice-Selection" value="Spades">Spades</option>
                            <option className="Leader-Choice-Selection" value="Diamonds">Diamonds</option>
                            <option className="Leader-Choice-Selection" value="Clubs">Clubs</option>
                            <option className="Leader-Choice-Selection" value="Hearts">Hearts</option>
                        </select>
                    </form>
                </div>
                <div>
                    <h2 className="Leader-Choice-Question-Text">Choose your partner card:</h2>
                    <form>
                        <select className="Partner-Card-Input Leader-Choice-Input" onChange={this.handleCardChange}>
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