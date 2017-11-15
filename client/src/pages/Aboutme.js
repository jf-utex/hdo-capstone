import React from 'react';
import { Link } from 'react-router-dom';

const Aboutme = () => {
  return (
    <div id="container">
      <div className="panel panel-default">
        <div className="panel-body">
          <h3>About Me</h3>
          {/* <p style={styles.p} /> */}
          <p>
            I have been a practicing orthotist for almost 30 years. I have
            worked in most environments an orthotist can work. I am not duel
            certified and cannot speak to the perspective of a prosthetist. My
            biases are certainly reflected in my writings here but my concern
            for the future of O&P is real. My practice in Pediatric Orthotics
            has been my life and my passion for almost my whole career. It
            should also be said that I have recently left the field in pursuit
            of a technical career. My hope is that leadership opportunities or
            at least a more open conversation will be found.
          </p>

          <p>
            I have gradually become disenchanted with O&P and have been looking
            for a way to "move up" the ladder for several years. I have felt the
            need to leave stable employment in search of better opportunity
            because the training and positions were not available. I know there
            are some of you who detest the phrase "the good old boy network" but
            my experience throughout my career is that is prevalent today in
            O&P.
          </p>

          {/* <p>
            My first mentor as I was coming into the field as an orthotic fitter
            (circa 1995) informed me that my hands were too small for orthotics
            and that a woman could never learn the physics required to do the
            job. Lucky for me, I took that as a challenge to prove him wrong.
            But why was that allowed? I have been pigion holed into clinical
            situations and unable to broaden my skills because I am a female and
            "they need a woman to fit a spinal brace". Being the only woman, it
            fell to me to work spinal. I always found it interesting how the job
            got done when I was on vacation or out of the clinic.
          </p> */}
          <p>
            I did have some very good mentors. The instructors at Northwestern
            University who insisted on professionalism and handled each of us
            with respect. Leaders like Chris Piel, who showed me the ropes at
            The Cleveland Clinic and provided stern direction and encouragement.
            He led by example and walked the walk with his team. Everyone on the
            team was trained in fabrication as well as spinal. I have had some
            excellent mentors in my career.
          </p>
          <p>
            It took a lot of soul searching until I happened on to the Human
            Dimensions of Organizations Master's Degree program at the
            University of Texas. I knew the only way for me to prove I could do
            more was to get another degree. This program was a perfect fit. It
            was the best day when I was accepted to HDO. Little did I know how
            completely right my feelings were but also how disenchanted I had
            become with Orthotics. Life as I knew it was ruined!
          </p>
          <p>
            It was through my work in earning my MA-HDO that I re-discovered my
            connection to technology and gained the confidence to move out of
            Orthotics and into Full Stack Web Development. The technology scene
            is much different now than when I was first introduced in college.
            Today it is agile, flexible, collaborative and quite
            honestly...exciting. The communication is more circular with a
            healthy respect for opinion and creativity. I thought I would be
            experiencing these things when I entered Orthotics. Sadly, I did
            not. My hope is that the future leaders of O&P will see clear to
            change the status quo and take greater stock in the human capital
            available to them.
          </p>
          <p>
            I want to extend a big thanks to the University of Texas Human
            Dimensions of Organizations team and classmates, to my supportive
            husband Tom for seeing me through this journey. Still working
            through a tunnel but at least now there is a light at the end.
          </p>
        </div>
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to={'/'}>Next</Link>
            </li>
            <li className="list-group-item">
              <Link to={'/comments'}>Tell me what YOU think!</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
