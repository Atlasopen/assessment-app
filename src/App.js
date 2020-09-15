import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Logout from './Logout';
import { useUser } from 'reactfire';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';


function App() {
  const user = useUser();
  return (
      <div className="App">
        {
          user &&
              <>
              <Router>
                  <Home/>
              </Router>
              </>
        }
        {
          !user &&
          <>
            <Signup />
            <Login />
          </>
        }
      </div>
  );
}

export default App;
