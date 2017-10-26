import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const styles = {
    p: {
      fontSize: '20px'
    }
  };
  return (
    <div>
      <div>
        <div className="panel-body">
          <h3>Profession or Trade</h3>
          <p>
            The field of Orthotics and Prosthetics (O&P) dates back to almost
            650 B.C. <br /> Because of the long standing history of this field,
            there has been discussion if this is a profession or a trade.
          </p>
          <div>
            <Link to={'/intro'}>Next</Link>
          </div>
          <div>
            <Link to={'/comments'}>Tell me what YOU think!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
