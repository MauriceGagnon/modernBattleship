import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Board from "./pages/Board";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function App() {
    return (
        <Router>
            <div className="Navigation">
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
            </div>

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

ReactDOM.render(
    // <React.StrictMode>
    <App />,
    // </React.StrictMode>,
    document.getElementById("root")
);
