// App.js

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Routes
import Home from './Home';
import About from './About';
import SynXis from './pages/SynXis';
import Project2 from './pages/Project2';




class App extends Component {
  render() {
    return (
      
    <Router>
        {/* <div className="square"></div>
        <div className="circle"></div> */}
        <div className="content">

        {/* <div className="navigation">
          <div className="navigation-sub">               
            <Link to="/" className="item">Home</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div> */}
        
        {/* Set up the Router */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/SynXis" component={SynXis} />
        <Route path="/Project2" component={Project2} />

      </div>
      </Router>
    );
  }
}

export default App;