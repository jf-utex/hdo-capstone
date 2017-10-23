import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div>
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <h4 className="panel">History</h4>
            <img src="/css/img/cairo-toe.jpg" alt="some text" width="150" />
            <p>
              the o and p community is comprosed of approximatly 6000
              professionals
            </p>
            <div>
              <Link to={'/comments'}>Tell me what YOU think!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
