import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <div className="log">
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>Warrior name</label>
                        <input type="text" className="form-control" placeholder="Enter your warrior name" />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-md btn-block">
                        Register
                    </button>
                    <p className="registered">
                        Already registered <a href="/sign-in">log in</a>
                    </p>
                </div>
            </form>
        );
    }
}
