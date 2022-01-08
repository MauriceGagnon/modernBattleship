import backgroung from "../images/mainBackground.jpg";
import logo from "../images/LogoModernBattleship.png";
import canon from "../images/blueprintCanon.png";
import logoReact from "../images/reactLogoBlanc.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app.css";
import "../index.scss";

function Rules() {
    return (
        // <div className="backgroundImageHome" style={{ backgroundImage: `url(${backgroung})` }}>
        <div className="backgroundRules">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img className="logo" src={logo} alt="Logo Modern Battleship"></img>
                    </div>
                    <div className="col-4">
                        <h1>GAME RULES</h1>
                    </div>
                </div>
                <div>
                    <img className="canon" src={canon} alt="Blueprint d'un canon"></img>
                </div>
            </div>
        </div>
    );
}

export default Rules;
