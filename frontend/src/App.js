import logo from './logo.svg';
import React, { Component, View, Text } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Home from './pages/Home';
import Rules from './pages/Rules';
import Leaderboard from './pages/Leaderboard';
import Navigation from './components/Navigation';
import StartGame from './pages/StartGame';
import JoinGame from './pages/JoinGame';
import Game from './pages/Game';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="Main-Content">
        <Navigation/>
        <Route path="/120-card-game" exact render={(props) => <Home {...props}/>}/>
        <Route path="/" exact render={(props) => <Home {...props}/>}/>
				<Route path="/home" exact render={(props) => <Home {...props}/>}/>
        <Route path="/rules" exact render={(props) => <Rules {...props}/>}/>
        <Route path="/leaderboard" exact render={(props) => <Leaderboard {...props}/>}/>
        <Route path="/startgame" exact render={(props) => <StartGame {...props}/>}/>
        <Route path="/joingame" exact render={(props) => <JoinGame {...props}/>}/>
        <Route path="/game" exact render={(props) => <Game {...props}/>}/>
      </div>
    );
  }
}

export default App;
