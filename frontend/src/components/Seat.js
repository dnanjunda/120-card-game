import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import '../css/Seat.css';

class Seat extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <svg width="100" height="100" className={this.props.className}>
                <circle
                    cx={'50'}
                    cy={'50'}
                    r={'50'}
                    fill={"#631809"}
                />
                <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="18px" font-family="American Typewriter, serif" dy=".3em">{this.props.playerName}</text>
            </svg>
        );
    }
}

export default Seat;