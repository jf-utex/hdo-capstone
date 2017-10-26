import React from 'react';
import { Link } from 'react-router-dom';

const Aboutme = () => {
  // const styles = {
  //   p: {
  //     fontSize: '40px'
  //   }
  // };
  return (
    <div>
      <navbar />
      <jumbotron />
      <div className="panel-body">
        <div className="panel-1">
          <h3>About Me</h3>
          {/* <p style={styles.p} /> */}
          <p>
            Just to set perspective, I am an orthotist. I have been a
            practitioner for almost 30 years and have never desired to be duel
            certified. That said, I hold in high esteem my fellow prosthetists.
            Their perspective in this review may refelct my bias and should not
            be considered a slight to those who are prostetists or duel
            certified.
          </p>

          <p>
            ** HDO, Internship, Residency, jobs throughout career, coding and
            career shift.
          </p>
          <p>
            I want to extend a big thanks to the University of Texas Human
            Dimensions of Organizations team, my supportive husband, Eric Scott,
            Eric Pelagio and Brandon Simon for their help with this project.
          </p>
        </div>
        <div>
          <Link to={'/'}>Next</Link>
        </div>
        <div>
          <Link to={'/comments'}>Tell me what YOU think!</Link>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
