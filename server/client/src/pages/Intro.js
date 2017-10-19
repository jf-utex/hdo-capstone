import React from "react";
import {Link} from "react-router-dom";

const Intro = () => {
  return (
    <div>
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <h4 className="panel">History</h4>
            <p>the o and p community is comprosed of approximatly 6000 professionals</p>

          </div>
        </div>
      </div>

      <div>
        <Link to={"/education"}>Next!</Link>
      </div>
    </div>
  );
}

export default Intro;
