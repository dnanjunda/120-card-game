/* react imports */
import React, { Component } from 'react';

/* react router imports */
import { Route } from "react-router-dom";

/* page imports */
import Home from './pages/Home';
import Rules from './pages/Rules';
import Navigation from './components/Navigation';
import StartGame from './pages/StartGame';
import JoinGame from './pages/JoinGame';
import Game from './pages/Game';
import GameResults from './pages/GameResults';

/* css imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* image imports */
import logo from './logo.svg';

/* backend imports */
import socketIOClient from "socket.io-client";

class App extends Component {
    
  constructor() {
    super();
    this.state = {
        response: 0,
        endpoint: "http://127.0.0.1:9000"
    };
  }

  componentDidMount() {
    //const {endpoint} = this.state;
    //Very simply connect to the socket
    //const socket = socketIOClient(endpoint);
    //Listen for data on the "outgoing data" namespace and supply a callback for what to do when we get one. In this case, we set a state variable
    //socket.on("outgoing data", data => this.setState({response: data.num}));
  }

  render() {
    return (
      <div className="Main-Content">
        <Navigation/>
        <Route path="/120-card-game" exact render={(props) => <Home {...props}/>}/>
        <Route path="/" exact render={(props) => <Home {...props}/>}/>
		    <Route path="/home" exact render={(props) => <Home {...props}/>}/>
        <Route path="/rules" exact render={(props) => <Rules {...props}/>}/>
        <Route path="/startgame" exact render={(props) => <StartGame {...props}/>}/>
        <Route path="/joingame" exact render={(props) => <JoinGame {...props}/>}/>
        <Route path="/game" exact render={(props) => <Game {...props}/>}/>
        <Route path="/results" exact render={(props) => <GameResults {...props}/>}/>
      </div>
    );
  }
}

export default App;
