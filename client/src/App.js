import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './logo.svg';

import Index from './pages/Index.js';
import Conclusions from './pages/Conclusions.js';
import Aboutme from './pages/Aboutme.js';
import Education from './pages/Education.js';
import Theproblem from './pages/Theproblem.js';
import Why from './pages/Why.js';
import References from './pages/References.js';
import Input from './pages/Input.js';
import Contact from './pages/Contact.js';
import Intro from './pages/Intro.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Notes from './pages/Notes.js';

import NavComponent from './components/Navbar.js';
import JumboComponent from './components/Jumbotron.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavComponent />
          <JumboComponent />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/intro" component={Intro} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/theproblem" component={Theproblem} />
            <Route exact path="/why" component={Why} />
            <Route exact path="/conclusions" component={Conclusions} />
            <Route exact path="/aboutme" component={Aboutme} />
            <Route exact path="/references" component={References} />
            <Route exact path="/input" component={Input} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
