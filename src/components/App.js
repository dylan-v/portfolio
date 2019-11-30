// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import SynXis from './pages/SynXis';



class App extends Component {
  render() {
    return (
      
    <Router>
      <div className="screen">
        <div className="container">
        <div className="navigation">
          {/* <img src={logo} className="logo-image" alt="Logo Image" /> */}
          <div className="navigation-sub">               
            {/* Set up the Links */}
            <Link to="/" className="item">Home</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div>
        </div>
        
        {/* Set up the Router */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/SynXis" component={SynXis} />
      </div>
      </Router>
    );
  }
}

export default App;