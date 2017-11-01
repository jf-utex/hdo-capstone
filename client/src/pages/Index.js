import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  const styles = {
    // p: {
    //   font-style: 'italic'
    // }
  };
  return (
    <div>
      <div>
        <div className="panel-bodyindex">
          <p>
            “Market competition and demographic changes in the labor force are
            two of the forces challenging organizations to develop more
            effective leadership training, and implementation programs.”
            <br />
            <br />
            <p>(Ahn & Ettner, 2017)</p>
          </p>
          <div className="row" />
          <div>
            <Link to={'/intro'}>Next</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
