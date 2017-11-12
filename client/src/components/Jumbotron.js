import React from 'react';
import ReactDOM from 'react-dom';

class JumboComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h2 className="display-3 text-uppercase">
              Culture in Orthotics and Prosthetics
            </h2>
            <img
              src="/css/img/wordart.png"
              alt="Orthotics and Prosthetics"
              width="450"
            />

            <div className="center-hdo">
              <div className="card-panel">
                <a href={'https://hdo.utexas.edu'}>
                  An HDO Capstone Project: A Master's Degree Project for HDO-UT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JumboComponent;
