import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <div className="log">
                    <h3>Log in</h3>

                    <div className="form-group">
                        <label>Warrior name</label>
                        <input type="text" className="form-control" placeholder="Enter your warrior name" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-md btn-block">
                        Sign in
                    </button>
                    <p className="registered ">
                        Your are not registered <a href="/sign-up">sign up</a>
                    </p>
                </div>
            </form>
        );
    }
}
