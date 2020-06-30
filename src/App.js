import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Rules from './pages/Rules';
import Leaderboard from './pages/Leaderboard';
import StartGame from './pages/StartGame';
import JoinGame from './pages/JoinGame';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="Main-Content">
        {/* <Route path="/" exact render={(props) => <Home {...props}/>}/>
				<Route path="/home" exact render={(props) => <Home {...props}/>}/>
        <Route path="/Rules" exact render={(props) => <Rules {...props}/>}/>
        <Route path="/Leaderboard" exact render={(props) => <Leaderboard {...props}/>}/> */}

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rules">Rules</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/rules">
            <Rules />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/startgame">
            <StartGame />
          </Route>
          <Route path="/joingame">
            <JoinGame />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
      </Router>
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
