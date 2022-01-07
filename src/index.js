import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";
import Home from "./pages/Home";
import Board from "./pages/Board";
import About from "./pages/About";
import Rules from "./pages/Rules";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";

export default function App() {
    return (
        <Router>
            <div>
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
                                </ReactBootstrap.Nav>
                                <ReactBootstrap.Nav>
                                    <ReactBootstrap.Nav.Link href="#deets"></ReactBootstrap.Nav.Link>
                                    <ReactBootstrap.Nav.Link eventKey={2} href="#Log">
                                        <i class="fas fa-user-circle"></i> Logout
                                    </ReactBootstrap.Nav.Link>
                                </ReactBootstrap.Nav>
                            </ReactBootstrap.Navbar.Collapse>
                        </ReactBootstrap.Container>
                    </ReactBootstrap.Navbar>
                </ReactBootstrap.Navbar>
            </div>
            {/* <containerMenu>
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
                <div>
                    <Link to="/About" className="menuAbout">
                        About
                    </Link>
                </div>
            </containerMenu> */}

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
