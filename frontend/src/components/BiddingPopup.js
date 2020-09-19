/* react imports */
import React, { Component } from 'react';

/* css imports */
import '../css/BiddingPopup.css';

class BiddingPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bid: "",
            isBidding: this.props.playerIsBidding,
        }

        this.handlePass = this.handlePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount = () => {
        const biddingPopup = document.getElementById("Bidding-Popup") === null ? document.getElementById("Bidding-Popup-Dealer") : document.getElementById("Bidding-Popup");
        biddingPopup.addEventListener("keypress", (event) => {
            event.preventDefault();
        });
    }

    handleBackspace = (event) => {
        let backspace = 8;
        if (event.keyCode === backspace) {
            event.preventDefault();
        }
    }

    handleChange = (event) => {
        this.setState({
            bid: event.target.value,
        });
    }

    handleSubmit = (event) => {
        this.setState({
            //bid: event.target.value,
            isBidding: false,
        });

        this.props.onResponse(this.state.bid);
        alert(this.props.player + ' bid ' + this.state.bid + '!');
    }

    handlePass = () => {
        this.setState({
            bid: 0,
            isBidding: false,
        });

        console.log(this.state.bid);

        this.props.onResponse(0);
        alert(this.props.player + ' passed!');
    }

    render() {

        let bidding;

        if (this.state.isBidding && (this.props.dealer != this.props.player)) {
            bidding =
                <div className="Bidding-Popup-Container">
                    <h2 className="Bidding-Question-Text">What is your bid?</h2>
                    <div className="Bidding-Options">
                        <button className="Bidding-Pass-Button" onClick={() => this.handlePass()}>Pass</button>
                        <form>
                            <input id="Bidding-Popup" className="Bidding-Input-Bid" type='number' onKeyDown={(event) => this.handleBackspace(event)} placeholder="Bid" step='5' min={this.props.minBidAvailable} max='120' onChange={this.handleChange} />
                            <button className="Bidding-Submit-Button" onClick={(event) => this.handleSubmit(event)}>Submit</button>
                        </form>
                    </div>
                </div>;
        }

        else if (this.state.isBidding && (this.props.dealer === this.props.player)) {
            bidding = 
                <div className="Bidding-Popup-Container">
                    <h2 className="Bidding-Question-Text">What is your bid?</h2>
                    <div className="Bidding-Options-Dealer">
                        <form>
                            <input id="Bidding-Popup-Dealer" className="Bidding-Input-Bid" type='number' onKeyDown={(event) => this.handleBackspace(event)} placeholder="Bid" step='5' min={this.props.minBidAvailable} max='120' onChange={this.handleChange} />
                            <button className="Bidding-Submit-Button" onClick={() => this.handleSubmit()}>Submit</button>
                        </form>
                    </div>
                 </div>; 
        }

        else {
            bidding = <div></div>;
        }

        return (
            <div>
                {bidding}
            </div>
        );
    }
}

export default BiddingPopup;

/* bootstrap render
    if (this.props.isBidding) return (
        <div className="Bid-Popup-Body">
            <ButtonGroup>
                <Button>Pass</Button>
                <DropdownButton as={ButtonGroup} title="Bid" id="bg-nested-dropdown">
                    {this.props.bidsAvailable.map((bid) => (
                        <Dropdown.Item>{bid}</Dropdown.Item>
                    ))}
                </DropdownButton>
            </ButtonGroup>
        </div>
    );

    else return (
        <div></div>
    );
*/

/*
if (this.props.isBidding) return (
            <div className="Bid-Popup-Body">
                <Col className="Button-Format">
                    <Button id="Pass-Button">Pass</Button>
                </Col>
                <Col>
                    <h2 className="Bid">Bid: </h2>
                    <select>
                        {this.props.bidsAvailable.map((bid) => (
                            <option className="Bid">{bid}</option>
                        ))}
                    </select>
                </Col>
                <Col className="Button-Format">
                    <Button id="Submit-Button">Submit</Button>
                </Col>
            </div>
        );

        else return (
            <div></div>
        );
    */