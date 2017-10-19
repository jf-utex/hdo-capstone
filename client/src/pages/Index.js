import React from "react";
import {Link} from "react-router-dom";

const Index = () => {
  return (
    <div>
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <h4 className="panel">Learn About the Orthotic and Prosthetic Profession</h4>
            <h4 className="panel">Profession or Trade</h4>
            <p>This profession was established in 1956 but there is evidence of existence that dates back to almost 650 B.C.</p>
          </div>
        </div>
      </div>

      <div>
        <Link to={"/education"}>Next!</Link>
      </div>
    </div>
  );
}

export default Index;
