import backgroung from "../images/mainBackground.jpg";
import logo from "../images/LogoModernBattleship.png";
import logoMoe from "../images/moeGameBlanc.png";
import logoReact from "../images/reactLogoBlanc.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import BateauA1 from "../images/pieces/a1.png";
import BateauA2 from "../images/pieces/a2.png";
import BateauA3 from "../images/pieces/a3.png";
import BateauA4 from "../images/pieces/a4.png";
import BateauA5 from "../images/pieces/a5.png";
import pinWhite from "../images/pinWhite.png";
import pinRed from "../images/pinRed.png";

// const Home = () => {
function Home() {
    return (
        <div className="container">
            <div className="bateaux">
                <div className="row">
                    <div className="col-4">
                        <p id="test">Allo</p>
                        <div id="bateauA">
                            <ul>
                                <li>
                                    <img src={BateauA1} alt="Logo Modern Battleship"></img>
                                </li>
                                <li>
                                    <img src={BateauA2} alt="Logo Modern Battleship"></img>
                                </li>
                                <li>
                                    <img src={BateauA3} alt="Logo Modern Battleship"></img>
                                </li>
                                <li>
                                    <img src={BateauA4} alt="Logo Modern Battleship"></img>
                                </li>
                                <li>
                                    <img src={BateauA5} alt="Logo Modern Battleship"></img>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
