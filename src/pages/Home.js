import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class Home extends React.Component {
    render() {
        return (
        <div>
            <Navigation val = {false}/>
            <h1>Welcome to 120!</h1>
         </div>
        );
    }
}

export default Home