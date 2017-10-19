import React from 'react';
import { Link } from 'react-router-dom';

const Conclusions = () => {
  return (
    <div>
      <div className="card">
        <div className="card-header" />
        <div className="card-body">
          <h4 className="card-title">Conclusions</h4>
          <p className="card-text">
            Conclusions discussing the need for increased attention to
            organizational culture withing the field of Orthotics and
            Prosthetics
          </p>
          <Link to={'/education'} className="btn btn-primary">
            Next!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Conclusions;
