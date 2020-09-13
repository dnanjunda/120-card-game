/* react imports */
import React, { Component } from 'react';

/* css imports */
import '../css/LeaderChoicePopup.css';

class LeaderChoicePopup extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        /*this.setState({
            bid: event.target.value,
            isBidding: false,
        });

        this.props.onResponse(this.state.bid);
        alert(this.props.player + ' bid ' + this.state.bid + '!');*/
    }

    render() {
        return (
            <div className="Leader-Choice-Popop-Container">
                <div className="Leader-Choice-Options">
                    <h2 className="Leader-Choice-Question-Text">Choose your cutting suit.</h2>
                    <form>
                        <select className="Cutting-Suit-Input">
                            <option selected value="spades">Spades</option>
                            <option value="diamonds">Diamonds</option>
                            <option value="clubs">Clubs</option>
                            <option value="hearts">Hearts</option>
                        </select>
                    </form>
                </div>
                <div className="Leader-Choice-Options">
                    <h2 className="Leader-Choice-Question-Text">Choose your partner.</h2>
                    <form className="Partner-Card-Input">
                        {/* these options can only be from cards they do not have in their hand */}
                        <select>
                            <option selected value="spades">2 of Spades</option>
                            <option value="diamonds">Diamonds</option>
                            <option value="clubs">Clubs</option>
                            <option value="hearts">Hearts</option>
                        </select>
                    </form>
                </div>
                <button className="Leader-Choice-Submit-Button" onClick={(event) => this.handleSubmit(event)}>Submit</button>
            </div>
        );
    }
}

export default LeaderChoicePopup;