import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './logo.svg';

import Index from './pages/Index.js';
import Conclusions from './pages/Conclusions.js';
import Aboutme from './pages/Aboutme.js';
import Whatisonp from './pages/Whatisonp.js';
import Allied from './pages/Allied.js';
import Generation from './pages/Generation.js';
import Why from './pages/Why.js';
import References from './pages/References.js';

import Intro from './pages/Intro.js';
import Comments from './pages/Comments.js';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

import NavComponent from './components/Navbar.js';
import JumboComponent from './components/Jumbotron.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <NavComponent />
            <JumboComponent />
            <Switch>
              <Route exact path="/comments" component={Comments} />
              <Route exact path="/" component={Index} />
              <Route exact path="/intro" component={Intro} />
              <Route exact path="/whatisonp" component={Whatisonp} />
              <Route exact path="/allied" component={Allied} />
              <Route exact path="/generation" component={Generation} />
              <Route exact path="/why" component={Why} />
              <Route exact path="/conclusions" component={Conclusions} />
              <Route exact path="/aboutme" component={Aboutme} />
              <Route exact path="/references" component={References} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

const ScrollToTop = withRouter(
  class extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }

    render() {
      return this.props.children;
    }
  }
);

export default App;
