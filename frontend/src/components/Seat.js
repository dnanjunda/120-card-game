import React, { Component, View } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import '../css/Seat.css';

class Seat extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <svg width="200" height="250">
                <circle
                    cx={'100'}
                    cy={'125'}
                    r={'75'}
                    fill={"#E1C699"}
                />
                <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="28px" font-family="Arial" dy=".3em">{this.props.playerName}</text>
            </svg>
        );
    }
}

export default Seat;