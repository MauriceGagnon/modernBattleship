import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "../components/login.component";
import SignUp from "../components/signup.component";

function App() {
    return (
        <div>
            <h1>Allo world</h1>
            <Link className="nav-link" to={"/sign-in"}>
                Login
            </Link>
        </div>

        // <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        //     <ul className="navbar-nav ml-auto">
        //         <li className="nav-item">
        //             <Link className="nav-link" to={"/sign-in"}>
        //                 Login
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link className="nav-link" to={"/sign-up"}>
        //                 Sign up
        //             </Link>
        //         </li>
        //     </ul>
        // </div>
    );
}

export default App;
