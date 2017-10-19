import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const styles = {
    p: {
      fontSize: '23px'
    }
  };
  return (
    <div>
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <h3 className="panel">
              Learn About the Orthotic and Prosthetic Profession
            </h3>
            <h4 className="panel">Profession or Trade</h4>
            <hr />
            <p>
              The history of this field dates back to almost 650 B.C. There is
              eveidence of prosthetic toes
            </p>
          </div>
        </div>
      </div>
      <div>
        <Link to={'/education'}>Next!</Link>
      </div>
    </div>
  );
};

export default Index;
