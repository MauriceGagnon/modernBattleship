import {AuthContext} from './AuthContext.js';
import Auth from './Auth';
import { useState,useMemo } from 'react';

function App() {
  const [auth, setAuth] = useState({isAuth:false,token:null});

  return (
    <AuthContext.Provider value={[auth, setAuth] }>
      <div className="App">
        <Auth/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
