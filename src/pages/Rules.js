import backgroung from "../images/mainBackground.jpg";
import logo from "../images/LogoModernBattleship.png";
import canon from "../images/blueprintCanon.png";
import logoReact from "../images/reactLogoBlanc.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Rules() {
    return (
        // <div className="backgroundImageHome" style={{ backgroundImage: `url(${backgroung})` }}>
        <div className="container">
            <div className="Rules">
                <div className="row">
                    <div className="col-6">
                        <img className="logoRules" src={logo} alt="Logo Modern Battleship"></img>
                    </div>
                    <div className="col-6">
                        <h1>GAME RULES</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <img className="canon" src={canon} alt="Blueprint d'un canon"></img>
                    </div>
                    <div className="col-7">
                        <h4>GOAL</h4>
                        <p>Your opponent has hidden 5 ships on their grid. Your goal is to guess the location of all 5 ships and sink them before your own fleet sunk. </p>
                        <br></br>
                        <h4>SETUP</h4>
                        <p>Move your 5 ships on your game board labeled "My fleet". Each ship must be placed either horizontally or vertically (not diagonally). Ships can touch each other, but they cannot overlap.</p>
                        <br></br>
                        <h4>YOUR FLEET</h4>
                        <ul>
                            <li>Aircraft Carrier (5 spaces)</li>
                            <li>Battleship (4 spaces)</li>
                            <li>Submarine (3 spaces)</li>
                            <li>Destoyer (3 spaces)</li>
                            <li>Cruiser (2 spaces)</li>
                        </ul>
                        <br></br>
                        <h4>PLAY</h4>
                        <p>
                            You will be invited to take turns. You select a box in the "opponent fleet" board. If you hit a boat, a red pin will appear and if you miss it, there will be a white pin. every time a boat is sunk, a white pin at
                            the top of your board will turn red.
                        </p>
                        <br></br>
                        <h4>WINNING</h4>
                        <p>The first player to successfully sink all 5 of their opponent's ships is the winner! </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rules;
