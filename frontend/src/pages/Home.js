/* react imports */
import React from 'react';

/* bootstrap imports */
import { Container, Row, Col } from 'react-bootstrap';

/* css imports */
import '../css/Home.css';

/* component imports */
import JoinDashboard from '../components/JoinDashboard.js';
import LeaderChoicePopup from '../components/LeaderChoicePopup.js';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.vars = { string: '', sample: 'this is the code' };
        this.postData = this.postData.bind(this);
        this.makeid = this.makeid.bind(this);
        this.state = {
            username: '',
            joincode: ''
        }
    }

    inputHandler = (e) => {
        if (e) {
            this.setState({
                username: e.target.value
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
    }

    render() {

        return (
            <div className="Body">
                <Container>
                    <LeaderChoicePopup/>
                    <Row>
                        <Col>
                            <img className="Logo" src={require("../images/homeLogo.png")}></img>
                        </Col>
                        <Col>
                            <p className="Description"> An Original, Online, Multiplayer Card Game!</p>
                            <form >
                                <input className="Name-Box" type="text" placeholder="Enter your name" value={this.state.username} name="username" onChange={this.inputHandler} />
                            </form>
                            <Row>
                                <Col>
                                    <button className="Start-Game" type="button" onClick={this.postData}> Start New Game! </button>
                                </Col>
                                <Col>
                                    <JoinDashboard user={this.state.username} history={this.props.history} />
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