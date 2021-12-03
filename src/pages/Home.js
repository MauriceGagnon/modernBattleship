import backgroung from "../images/mainBackground.jpg";
import logo from "../images/LogoModernBattleship.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "../app.css";

const Home = () => {
    return (
        <div className="containerHome">
            {/* <containerMenu> */}
            <div>
                <Link to="/" className="menuHome">
                    Home
                </Link>
            </div>
            <div>
                <Link to="/Board" className="menuBoard">
                    Board
                </Link>
            </div>
            {/* </containerMenu> */}
            {/* <img className="logo" src={logo} alt="Logo Modern Battleship"></img> */}
            {/* <img className="backgroung" src={backgroung} alt="Background Modern Battleship"></img> */}

            <div className="container"></div>
        </div>
    );
};

export default Home;
