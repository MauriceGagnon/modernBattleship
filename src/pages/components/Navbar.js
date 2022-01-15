import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import Board from "../Board.js";
import About from "../About.js";
import Rules from "../Rules.js";
import Login from "../Login.js";
import * as ReactBootstrap from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
    return (
        <Router>
            <ReactBootstrap.Navbar>
                <ReactBootstrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <ReactBootstrap.Container>
                        <ReactBootstrap.Navbar.Brand href="/">MODERN BATTLESHIP</ReactBootstrap.Navbar.Brand>
                        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootstrap.Nav className="me-auto">
                                <ReactBootstrap.Nav.Link href="/Board">Board</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="/About">About</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="/Rules">Rules</ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link href="/Login">Login</ReactBootstrap.Nav.Link>
                            </ReactBootstrap.Nav>
                            <ReactBootstrap.Nav>
                                <ReactBootstrap.Nav.Link href="#deets"></ReactBootstrap.Nav.Link>
                                <ReactBootstrap.Nav.Link eventKey={2} href="#Log">
                                    <FaUserCircle size="1.4em" title="Profil" /> Profil
                                </ReactBootstrap.Nav.Link>
                            </ReactBootstrap.Nav>
                        </ReactBootstrap.Navbar.Collapse>
                    </ReactBootstrap.Container>
                </ReactBootstrap.Navbar>
            </ReactBootstrap.Navbar>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Board">
                    <Board />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Rules">
                    <Rules />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}
