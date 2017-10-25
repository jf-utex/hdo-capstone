import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class NavComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        {/* //need this to be right justified */}
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/">
              An HDO Capstone Project
            </NavLink>
          </div>

          <ul className="nav navbar-nav">
            <li className="dropdown">
              <NavLink
                activeClassName="dropdown-toggle"
                data-toggle="dropdown"
                to="/"
              >
                Let's Get Started
                <span className="caret" />
              </NavLink>

              <ul className="dropdown-menu">
                <li>
                  <NavLink to="intro">Intro</NavLink>
                </li>
                <li>
                  <NavLink to="education">Education</NavLink>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="index.js"
              >
                What I have Found
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/why">Why is Culture Important?</NavLink>
                </li>
                <li>
                  <NavLink to="/theproblem">
                    Here are the stats...does it make sense?
                  </NavLink>
                </li>

                <li>
                  <NavLink to="conclusions">Conclusion</NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="index.js"
              >
                Final
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="references">References</NavLink>
                </li>
                <li>
                  <NavLink to="aboutme">
                    About the Author and Acknowledgements
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="index.js"
              >
                Connect
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="comments">Tell me what YOU think</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavComponent;
