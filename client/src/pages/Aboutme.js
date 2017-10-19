import React from "react";
import {Link} from "react-router-dom"

const Aboutme = () => {
  const styles = {
    p: {
      fontSize: '23px',
    }
  }
  return (
    <div>
      <navbar></navbar>
      <jumbotron></jumbotron>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="panel">
            <h4>About Me</h4>
            <p style={styles.p}>30 years in Orthotics - Here are the experiences that led me to this project</p>
            <p>HDO, Internship, Residency, jobs throughout career, coding and career shift.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutme;
