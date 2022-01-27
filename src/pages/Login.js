import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import backgroung from "../images/mainBackground.jpg";
import logo from "../images/LogoModernBattleship.png";
import Login from "./components/Login.component.js";
import SignUp from "./components/Signup.component.js";

function Log() {
    return (
        <Router>
            <div className="backgroundImageHome" style={{ backgroundImage: `url(${backgroung})` }}>
                <div className="container">
                    <img className="logoHome" src={logo} alt="Logo Modern Battleship"></img>
                    <div>
                        <div className="log">
                            <div className="outer">
                                <div className="inner">
                                    <Switch>
                                        <Route exact path="/Login" component={Login} />
                                        <Route path="/Login/sign-in" component={Login} />
                                        <Route path="/Login/sign-up" component={SignUp} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Log;
