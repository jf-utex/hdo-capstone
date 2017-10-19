import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Education = () => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-body">
          <h4 className="panel">History</h4>
          <p>
            the o and p community is comprosed of approximatly 6000
            professionals
          </p>
          <h4 className="panel">Education</h4>
          <p>
            Historically there have been several ways to become a practioner of
            O and P
          </p>
          <img
            src="../../../../css/img/abc-logo.png"
            alt="some text"
            width="250"
          />
        </div>
      </div>
      <div>
        <Link to={'/theproblem'}>Next!</Link>
      </div>
    </div>
  );
};
export default Education;
