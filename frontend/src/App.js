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
import Results from './pages/Results';

/* css imports */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* image imports */
import logo from './logo.svg';

/* backend imports */
import socketIOClient from "socket.io-client";

export var socket;

class App extends Component {
    
  constructor() {
    super();
    this.state = {
        response: 0,
        endpoint: "http://127.0.0.1:9000"
    };
    socket = socketIOClient(this.state.endpoint);
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
        <Route path="/results" exact render={(props) => <Results {...props}/>}/>
      </div>
    );
  }
}

export default App;
