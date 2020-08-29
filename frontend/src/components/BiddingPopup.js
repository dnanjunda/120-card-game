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
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Your bid is ' + this.state.bid + '!');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                
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