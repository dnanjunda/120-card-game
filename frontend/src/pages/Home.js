/* react imports */
import React from 'react';

/* bootstrap imports */
import { Container, Row, Col } from 'react-bootstrap';

/* css imports */
import '../css/Home.css';

/* component imports */
import JoinDashboard from '../components/JoinDashboard.js';

/* backend imports */
import socketIOClient from "socket.io-client";

export var socket;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.vars = { string: '', sample: 'this is the code' };
        this.postData = this.postData.bind(this);
        this.makeid = this.makeid.bind(this);
        this.state = {
            username: '',
            joincode: '',
            endpoint: 'http://localhost:9000/'
        }
        socket = socketIOClient(this.state.endpoint);
    }

    inputHandlerName = (e) => {
        if (e) {
            this.setState({
                username: e.target.value
            })
        }
    }

    inputHandlerJoinCode = (e) => {
        if (e) {
            this.setState({
                joincode: e.target.value
            })
        }
    }

    makeid() {
        var result = 'A2345c';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 6; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    dec2hex(dec) {
        return dec < 10
            ? '0' + String(dec)
            : dec.toString(16)
    }

    generateId(len) {
        var arr = new Uint8Array((len || 6) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr).map(() => this.dec2hex).join('')
    }

    postData() {
        //console.log(() => this.generateId(6));
        // this.vars.string = this.makeid;
        // console.log(this.vars.string);

        //var result           = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 6; i++) {
            this.vars.string += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        const data = { code: this.vars.string };
        console.log('Code:', this.vars.string);

        fetch("http://localhost:9000/codes/addcode", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data == "code already exists") {
                    this.vars.string = '';
                    this.postData();
                }
            })
            .catch((error) => {
                this.vars.string = '';
                this.postData();
                console.error('Error:', error);
            });

        this.props.history.push({
            pathname: '/startgame',
            state: {
                codes: this.vars.string,
                user: this.state.username
            }
        });

        // Default options are marked with *
        // const response = fetch(url, {
        //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //   mode: 'cors', // no-cors, *cors, same-origin
        //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: 'same-origin', // include, *same-origin, omit
        //   headers: {
        //     'Content-Type': 'application/json'
        //     // 'Content-Type': 'application/x-www-form-urlencoded',
        //   },
        //   redirect: 'follow', // manual, *follow, error
        //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //   body: JSON.stringify(data) // body data type must match "Content-Type" header
        // });
        //return response.json(); // parses JSON response into native JavaScript objects
    }

    // callFunc() {
    //     io.sockets.on('connection', function(socket){
    //         console.log("new client connected");
    //     });
    // }


    render() {

        return (
            <div className="Body">
                <Container>
                    <Row>
                        <Col>
                            <img className="Logo" src={require("../images/homeLogo.png")}></img>
                        </Col>
                        <Col>
                            <p className="Description"> An Original, Online, Multiplayer Card Game!</p>
                            <form >
                                <input className="Name-Box" type="text" placeholder="Enter your name" value={this.state.username} name="username" onChange={this.inputHandlerName} />
                            </form>
                            <Row>
                                <Col>
                                    <button className="Start-Game" type="button" onClick={this.postData}> Start New Game! </button>
                                </Col>
                                <Col>
                                    <JoinDashboard/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
            </div>
        );
    }
}

export default Home;