import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Homepage from './Router/Homepage'
import Aboutpage from './Router/Aboutpage'
import Login from './Router/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <div class="header">
         <span > <Link to="/homepage">Homepage</Link>&nbsp; </span> 
         {/* Link is  nav tool {*To* is one property of link its used for which path need put the link  } */}
          <Link to="/AboutPage">AboutPage</Link>
        </div>
        <Switch>
          {/* Switch is use the render children of the component */}
          <Route exact path="/homepage">
            {/* Route is nothing but its use to tell the path {exact is  used for exACT PATH } */}
            <Homepage />
          </Route>
          <Route exact path="/Aboutpage">
            <Aboutpage />
          </Route>
          <Route path="/login" component={Login}></Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
