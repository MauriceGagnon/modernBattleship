import backgroung from "../images/mainBackground.jpg";
import logo from "../images/LogoModernBattleship.png";
import logoMoe from "../images/moeGameBlanc.png";
import logoReact from "../images/reactLogoBlanc.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
    function Login() {
        const history = useHistory();

        const routeChange = () => {
            let path = "/Login";
            history.push(path);
        };
        const [surname, setsurName] = useState("");
        return (
            <form>
                <p className="advertise">Go back to childhood and enter the world of naval battles like you've never seen before. Face your opponents in a modern online BATTLESHIP games.</p>
                {/* <label>
                    <p className="loginTitle">Enter your warrior name</p>
                    <input className="input" size="35" type="text" value={surname} onChange={(e) => setsurName(e.target.value)} />
                </label> */}
                <button type="submit" className="btnLogin" onClick={routeChange}>
                    START
                </button>
            </form>
        );
    }

    return (
        <div className="backgroundImageHome" style={{ backgroundImage: `url(${backgroung})` }}>
            <div className="container">
                <img className="logoHome" src={logo} alt="Logo Modern Battleship"></img>
                <div className="login">
                    <div>{Login()}</div>
                </div>
                <div>
                    <img className="moeGame" src={logoMoe} alt="Logo Moe Game"></img>
                    <img className="logoReact" src={logoReact} alt="Logo React"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;
