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
        <div className="panel panel-default">
          <div className="panel-body">
            <h2 className="panel">
              Learn About the Orthotic and Prosthetic Profession
            </h2>
            <h3 className="panel">Profession or Trade</h3>
            <hr />
            <p>The history of this field dates back to almost 650 B.C.</p>
            <div>
              <Link to={'/comments'}>Tell me what YOU think!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
