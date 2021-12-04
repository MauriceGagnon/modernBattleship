import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";
import Home from "./pages/Home";
import Board from "./pages/Board";

export default function App() {
    return (
        <Router>
            <containerMenu>
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
            </containerMenu>

            <hr />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/Board">
                    <Board />
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
