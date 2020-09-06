/* react imports */
import React, { Component } from 'react';

/* react router imports */
import { Link } from 'react-router-dom';

/* css imports */
import '../css/JoinDashboard.css';

export var joinCode;
export var user;

class JoinDashboard extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        //this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
        this.state = {
            clicked: false,
            joincode: '',
            username: "abc"
        }
    }

    handleClick = () => {
        this.setState({ clicked: true });
    }

    sendCode = () => {
        console.log('Join Code:', this.state.joincode);
        this.props.parentCallback(this.state.joincode);
    }

    inputHandler = (e) => {
        if (e) {
            this.setState({
                joincode: e.target.value
            })
        }
    }

    handleFocus() {
        if (this.state.joincode == 'Enter game code') {
            this.state.joincode = '';
        }
    }

    handleJoin() {
        if (this.state.joincode == '') {

        } else {
            console.log('Join Code:', this.state.joincode);
            const data = { code: this.state.joincode };

            fetch("http://localhost:9000/codes/getcode", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    if (data == "code doesn't exist") {
                        this.state.joincode = '';
                        this.setState({ clicked: false });
                    } else {
                        joinCode = this.state.joincode;
                        user = this.props.user;

                        this.props.history.push(
                            {
                                pathname: '/joingame',
                                state: {
                                    codes: this.state.joincode,
                                    user: this.state.username
                                }
                            });
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    render() {

        {/*if (this.state.visible) return (
            <div className="Join-Modal-Font">
                <button onClick={this.handleModalClick} className="Join-Button">Join A Game!</button>
                <div className="Join-Modal-Container">
                    <div className="Join-Modal-Title">
                        Join A Game!
                    </div>
                    <div className="Join-Modal-Content">
                        <form>
                            <input className="Join-Code-Box" type="text" placeholder="Enter game code" value={this.state.joincode} name="gamecode" onChange={this.inputHandler} />
                        </form>
                    </div>
                    <div>
                        <div className="Join-Modal-Buttons">
                            <Link to="/joingame">
                                <button onClick={this.handleCancelClick} className="Join-Modal-Join-Button">Join</button>
                            </Link>
                        </div>
                        <div className="Join-Modal-Buttons">
                            <button onClick={this.handleCancelClick} className="Join-Modal-Cancel-Button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        ); */}

        if (this.state.clicked) return (
            <div className="Rows">
                <form>
                    <input className="Join-Code-Box" type="text" placeholder="Enter game code" value={this.state.joincode} name="gamecode" onChange={this.inputHandler} />
                </form>
                <Link>
                    <button onClick={this.handleJoin} className="Join-Button-After">Join!</button>
                </Link>
            </div>
        );

        else return (
            <div>
                <button onClick={this.handleClick} className="Join-Button-Before">Join A Game!</button>
            </div>
        );
    }

}

export default JoinDashboard