import React, { Component, View } from 'react';
import '../App.css';
import '../css/Table.css';

class Table extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <svg width="800" height="400">
                <ellipse 
                    cx={"400"} 
                    cy={"200"} 
                    rx={"400"}
                    ry={"200"}
                    fill={"#800000"}
                    />
            </svg>
        );
    }
}

export default Table;