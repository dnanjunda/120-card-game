import {Link} from 'react-router-dom';
import React, { Component, Stylesheet } from 'react';
import '../css/Rules.css';
import Navigation from '../components/Navigation';

class Rules extends React.Component {
    render() {
        return (
            <div>
                <Navigation val = {true}/>
                <h1 className="titleStyle"> How To Play: </h1>
            </div>
        );
    }
}

export default Rules