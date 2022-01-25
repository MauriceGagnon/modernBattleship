import { AuthContext } from "./AuthContext.js";
import React from "react";
// import Auth from './Auth';
import { useState, useMemo } from "react";
import Login from "./pages/components/login.component.js";

function App() {
    const [auth, setAuth] = useState({ isAuth: false, token: null });

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            <div className="App"></div>
            <Login />
        </AuthContext.Provider>
    );
}

export default App;
