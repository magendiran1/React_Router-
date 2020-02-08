import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Homepage from './Router/Homepage'
import Aboutpage from './Router/Aboutpage'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
          
              <Link to="/">Homepage</Link>
              <br></br>
          
            <Link to="/AboutPage">AboutPage</Link>
            </nav>
        </div>

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/AboutPage">
            <Aboutpage />
          </Route>
        </Switch>

      </Router>
      <h1>Hello</h1>
      <hr />

    </div>
  );
}

export default App;
