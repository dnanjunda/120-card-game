import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/Home.css';
import JoinDashboard from '../components/JoinDashboard.js';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.vars = { string: '', sample: 'this is the code' };
        this.postData = this.postData.bind(this);
        this.makeid = this.makeid.bind(this);
    }

    makeid() {
        var result           = 'A2345c';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 6; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    dec2hex (dec) {
        return dec < 10
          ? '0' + String(dec)
          : dec.toString(16)
    }

    generateId (len) {
        var arr = new Uint8Array((len || 6) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr).map(() => this.dec2hex).join('')
    }

    postData() {
        //console.log(() => this.generateId(6));
        // this.vars.string = this.makeid;
        // console.log(this.vars.string);

        //var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 6; i++ ) {
           this.vars.string += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        const data = { code: "QyYQE4" };
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
            if(data == "code already exists") {
                this.vars.string = '';
                this.postData();
            }
        })
        .catch((error) => {
            this.vars.string = '';
            this.postData();
            console.error('Error:', error);
        });

        this.props.history.push({pathname: '/startgame', 
            state: {
                codes: "QyYQE4"
            }});

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

    // sendData() {
    //     var 
    //     fetch();
    // }


    render() {
        return (
            <div>
                <Container>
                    {/* <h1 className="Home-Title">Welcome to 120!</h1>
                    <p className="Description"> An Original, Online, Multiplayer Card Game!</p> */}
                    <Row>
                    <Col>
                    <img className="Logo"
                        src={require("../images/homeLogo.png")}></img>
                        </Col>
                        <Col>
                        {/* <h1 className="Home-Title">Welcome to 120!</h1> */}
                    <p className="Description"> An Original, Online, Multiplayer Card Game!</p>
                    <Row>
                        <Col>
                    {/* <Link to={{
                        pathname: "/startgame",
                        state: {
                        codes: this.vars.sample }}}> */}
                        <button className="Start-Game" type="button" onClick={this.postData} > Start New Game! </button>
                    {/*</Link> */}

                    </Col>
                    <Col>
                    <JoinDashboard/>
                    </Col>
                    </Row>
                    </Col>
                    </Row>
                    {/* <Link to="/joingame">
                        <button className="Join-Game" type="button"> Join A Game! </button>
                    </Link> */}
                </Container>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Home;