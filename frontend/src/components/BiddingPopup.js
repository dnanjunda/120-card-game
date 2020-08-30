/* react imports */
import React, { Component, Button } from 'react';

/* bootstrap imports */
import { Container, Row, Col } from 'react-bootstrap';

/* css imports */
import '../css/BiddingPopup.css';

class BiddingPopup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bid: "",
            isBidding: this.props.isBidding,
        }

        this.handlePass = this.handlePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            bid: event.target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            bid: event.target.value,
            isBidding: false,
        });

        alert(this.props.player + ' bid ' + this.state.bid + '!');
    }

    handlePass = () => {
        this.setState({
            bid: "0",
            isBidding: false,
        });

        alert(this.props.player + ' passed!');
    }

    render() {

        let bidding;

        if (this.props.isBidding) {
            bidding =
                <div className="Bidding-Popup-Container">
                    <h2 className="Bidding-Question-Text">What is your bid?</h2>
                    <div className="Bidding-Options">
                        <button className="Bidding-Pass-Button" onClick={() => this.handlePass()}>Pass</button>
                        <form>
                            <input className="Bidding-Input-Bid" type='number' placeholder="Bid" step='5' min={this.props.minBidAvailable} max='120' onChange={this.handleChange} />
                            <button className="Bidding-Submit-Button" onClick={(event) => this.handleSubmit(event)}>Submit</button>
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