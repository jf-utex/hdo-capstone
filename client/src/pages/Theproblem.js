import React from "react";
import {Link} from "react-router-dom";

const Theproblem = () => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-body">
          <h4 className="panel">What we can learn from other allied health professions</h4>
          <p></p>

        </div>
      </div>
      <div>
        <Link to={"/education"}>Next!</Link>
      </div>
    </div>
  );

}
export default Theproblem;
