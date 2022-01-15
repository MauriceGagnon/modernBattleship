import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import backgroung from "../images/mainBackground.jpg";
import logo from "../images/LogoModernBattleship.png";
import logoMoe from "../images/moeGameBlanc.png";
import logoReact from "../images/reactLogoBlanc.png";

import Login from "./components/login.component.js";
import SignUp from "./components/signup.component.js";

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
