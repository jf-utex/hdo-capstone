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
            <p>
              <h3> need graphs and pictoral stats here</h3>
              Results: Results [when I did the methods, this is what I
              got-characterize outcomes] O&P Statistics Discipline Male Female
              CO 1413 461 CP 1144 264 CPO 2140 657 6079 Practitioners in US
              22.73% are female Statistics provided by The American Board for
              Certification of Orthotics and Prosthetics, 2017 2,650 O & P
              accredited facilities, 25% of which are part of Hanger. The only
              hospitals we track are VA’s of which we have 2%.
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
