/* react imports */
import React, { Component } from 'react';

/* bootstrap imports */
import Button from 'react-bootstrap/Button';

/* css imports */
import '../App.css';
import '../css/GameButton.css';

class GameButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.buttonText,
        }
    }

    render() {

        let displayText = () => this.setState({text: this.props.text})
        let clearText = () => this.setState({text: this.props.buttonText})

        return (
            <div>
                <Button id={this.props.className} onMouseEnter={displayText} onMouseLeave={clearText}>
                    {this.state.text}
                </Button>
            </div>
        );
    }
}

export default GameButton;