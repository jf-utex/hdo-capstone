import React from "react";
import {Link} from "react-router-dom";

const References = () => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-body">
          <h4 className="panel">References/Bibliography</h4>
          <p>This content should be pulled from MongoDB</p>

        </div>
      </div>
      <div>
        <Link to={"/education"}>Next!</Link>
      </div>
    </div>
  );

}
export default References;
