import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

export default function Login() {
    const [auth, setAuth] = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errStyle, setErr] = useState({ backgroundColor: "blue" });

    const loginClick = () => {
        axios

            .post("http://104.248.104.227/login", { username: username, password: password })
            .then((response) => {
                setErr({ backgroundColor: "green" });
                let token = response.data.token;
                setAuth({ isAuth: true, token });
                setUsername("");
                setPassword("");
            })

            .catch((err) => {
                setErr({ backgroundColor: "red" });
                setPassword("");
            });
    };

    const handleChange = (event, setStatefct) => {
        setStatefct(event.target.value);
    };

    return (
        <form>
            <div className="log">
                <h3 style={errStyle}>LOG IN</h3>

                <div className="form-group">
                    <label>Warrior name</label>
                    <input value={username} onChange={(event) => handleChange(event, setUsername)} type="text" className="form-control" placeholder="Enter your warrior name" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input value={password} onChange={(event) => handleChange(event, setPassword)} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button onClick={() => loginClick()} type="submit" className="btn btn-primary btn-md btn-block">
                    Sign in
                </button>
                <p className="registered ">
                    Your are not registered <a href="/Login/sign-up">sign up</a>
                </p>
            </div>
        </form>
    );
}
