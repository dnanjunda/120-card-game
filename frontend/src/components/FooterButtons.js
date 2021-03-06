/* react imports */
import React, { Component } from 'react';

/* react router & bootstrap imports */
import { Link } from 'react-router-dom';

/* css imports */
import '../css/FooterButtons.css';

/* backend imports */
import { socket } from "../App.js";

class FooterButtons extends Component {

    constructor(props) {
        super(props);
        this.startgame = this.startgame.bind(this);
    }

    startgame() {
        socket.emit("starting_game");
        this.props.history.push({
            pathname: '/game',
            state: {
                name: this.props.user
            }
        });
    }

    render() {

        /* Game Page, Join Game Page */
        if (this.props.buttonsCount === "1") return (
            <div className="Horizontal-Buttons">
                <Link to={this.props.buttonPath}>
                        <button className={`${this.props.className}-Button Button-Format`}>{this.props.buttonTitle}</button>
                </Link>
            </div>
        );
        else if (this.props.startPage) return (
            <div>
                <div className="Horizontal-Buttons">
                    <Link to={this.props.leftPath}>
                        <button className={`${this.props.className}-Left-Button Button-Format`}>{this.props.leftButtonTitle}</button>
                    </Link>
                </div>
                <div className="Horizontal-Buttons">
                    <button className={`${this.props.className}-Right-Button Button-Format`} onClick={this.startgame}>{this.props.rightButtonTitle}</button>
                </div>
            </div>
        );

        else return (
            <div>
                <div className="Horizontal-Buttons">
                    <Link to={this.props.leftPath}>
                        <button className={`${this.props.className}-Left-Button Button-Format`}>{this.props.leftButtonTitle}</button>
                    </Link>
                </div>
                <div className="Horizontal-Buttons">
                    <Link to={this.props.rightPath}>
                        <button className={`${this.props.className}-Right-Button Button-Format`}>{this.props.rightButtonTitle}</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default FooterButtons