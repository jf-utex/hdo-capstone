import React from 'react';
import ReactDOM from 'react-dom';

class NavComponent extends React.Component {
  dropToggle() {
    let links = document.querySelector('.dropdown-menu');
    if (links.style.display === 'block') {
      links.style.display = 'none';
    } else {
      links.style.display = 'block';
    }
  }
  render() {
    return (
      <nav className="navbar navbar-inverse">
        {/* //need this to be right justified */}
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              An HDO Capstone Project
            </a>
          </div>

          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="/">
                Let's Get Started
                <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="Intro" onClick={this.dropToggle}>
                    Intro
                  </a>
                </li>
                <li>
                  <a href="Education" onClick={this.dropToggle}>
                    Education
                  </a>
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
                  <a href="Why" onClick={this.dropToggle}>
                    Why is Culture Important?
                  </a>
                </li>
                {/* <li>
                  <a href="Discussion" onClick={this.dropToggle}>Discussion</a>
                </li> */}
                <li>
                  <a href="Conclusions" onClick={this.dropToggle}>
                    Conclusion
                  </a>
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
                  <a href="References" onClick={this.dropToggle}>
                    References
                  </a>
                </li>
                <li>
                  <a href="Aboutme" onClick={this.dropToggle}>
                    About the Author and Acknowledgements
                  </a>
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
                  <a href="Comments" onClick={this.dropToggle}>
                    Tell me what YOU think
                  </a>
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
