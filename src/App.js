import logo from './logo.svg';
import React, { Component, View, Text } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Home from './pages/Home';
import Rules from './pages/Rules';
import Leaderboard from './pages/Leaderboard';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Route path="/120-card-game" exact render={(props) => <Home {...props}/>}/>
        <Route path="/" exact render={(props) => <Home {...props}/>}/>
				<Route path="/home" exact render={(props) => <Home {...props}/>}/>
        <Route path="/rules" exact render={(props) => <Rules {...props}/>}/>
        <Route path="/leaderboard" exact render={(props) => <Leaderboard {...props}/>}/>
      </div>
    );
  }
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>Rules</h2>;
// }

// function Users() {
//   return <h2>Leaderboard</h2>;
// }

export default App;
