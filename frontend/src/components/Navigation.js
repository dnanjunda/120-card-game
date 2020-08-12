/* react imports */
import React, { Component } from 'react';

/* react router & bootstrap imports */
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

/* css imports */
import '../App.css';
import '../css/Navigation.css';

class Navigation extends Component {

    componentDidMount() {
        console.log(this.props.val);
    }

    render() {
        
        return (
            <div>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous"
                />

                <Router>
                    <Navbar bg="#5e715b" >
                        <Navbar.Brand href="/home">
                            <img
                                src={require("../images/navLogoLarger.png")}
                                width="75"
                                height="75"
                                className="d-inline-block align-top"
                                alt="error"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto" >
                                <Nav.Link className="Links" href="/home" to="/home" > Home</Nav.Link>
                                <Nav.Link className="Links" href="/rules" to="/rules"> Rules</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Router>
            </div>
        );
    }
}

export default Navigation;
