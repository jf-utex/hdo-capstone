import React from 'react';
import { Link } from 'react-router-dom';

const Conclusions = () => {
  return (
    <div>
      <div className="panel">
        <div className="panel-body">
          <h4 className="panel-title">Conclusions</h4>
          <p className="panel-text">
            Conclusions discussing the need for increased attention to
            organizational culture withing the field of Orthotics and
            Prosthetics
          </p>
          <div>
            <Link to={'/comments'}>Tell me what YOU think!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Conclusions;
