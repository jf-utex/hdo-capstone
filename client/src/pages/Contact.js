import React from "react";
import {Link} from "react-router-dom"

const Contact = () => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-body">
          <h4 className="panel">Connect with me</h4>
          <img src="/css/img/construction.png" alt="some text" height="250"/>
        </div>
      </div>
      <div>
        <Link to={"/education"}>Next!</Link>
      </div>
     </div>
  );

}
export default Contact;
