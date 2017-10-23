import React from 'react';
import { Link } from 'react-router-dom';

const Aboutme = () => {
  const styles = {
    p: {
      fontSize: '23px'
    }
  };
  return (
    <div>
      <navbar />
      <jumbotron />
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="panel">
            <h4>About Me</h4>
            <p style={styles.p}>
              30 years in Orthotics - Here are the experiences that led me to
              this project
            </p>
            <p>
              HDO, Internship, Residency, jobs throughout career, coding and
              career shift.
            </p>
            <p>
              Just to set perspective, I am an orthotist. I have been a
              practitioner for almost 30 years and have never desired to be duel
              certified. That said, I hold in high esteem my fellow
              prosthetists. Their perspective in this review may refelct my bias
              and should not be considered a slight to those who are prostetists
              or duel certified.
            </p>
            <p>
              HDO, Internship, Residency, jobs throughout career, coding and
              career shift.
            </p>
          </div>
          <div>
            <Link to={'/comments'}>Tell me what YOU think!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
