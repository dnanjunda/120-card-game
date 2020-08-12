/* react imports */
import React, { Component } from 'react';

/* react router & bootstrap imports */
import { Link } from 'react-router-dom';

/* css imports */
import '../css/FooterButtons.css';

/* component imports */
import RanksDashboard from './RanksDashboard.js';

class FooterButtons extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        /* Game Results Page */
        if (this.props.leftPath === "/ranks") return (
            <div>
                <div className="Horizontal-Buttons">
                    <RanksDashboard className={this.props.className}/>
                </div>
                <div className="Horizontal-Buttons">
                    <Link to={this.props.rightPath}>
                        <button className={`${this.props.className}-Right-Button`}>{this.props.rightButtonTitle}</button>
                    </Link>
                </div>
            </div>
        );

        /* Game Page */
        else if (this.props.rightPath === "/ranks") return (
            <div>
                <div className="Horizontal-Buttons">
                    <Link to={this.props.leftPath}>
                        <button className={`${this.props.className}-Left-Button`}>{this.props.leftButtonTitle}</button>
                    </Link>
                </div>
                <div className="Horizontal-Buttons">
                    <RanksDashboard className={this.props.className}/>
                </div>
            </div>
        );

        else return (
            <div>
                <div className="Horizontal-Buttons">
                    <Link to={this.props.leftPath}>
                        <button className={`${this.props.className}-Left-Button`}>{this.props.leftButtonTitle}</button>
                    </Link>
                </div>
                <div className="Horizontal-Buttons">
                    <Link to={this.props.rightPath}>
                        <button className={`${this.props.className}-Right-Button`}>{this.props.rightButtonTitle}</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default FooterButtons