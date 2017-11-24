import React from 'react';
import { Link } from 'react-router-dom';

const Aboutme = () => {
  return (
    <div id="container">
      <div className="panel panel-default">
        <div className="panel-body">
          <h3>About Me</h3>
          <p>
            I have been a practicing orthotist for almost 30 years. I have
            worked in most environments an orthotist can work. I am not dual
            certified and cannot speak to the perspective of a prosthetist. My
            biases are certainly reflected in my writings here but my concern
            for the future of O&P is real. My practice in Pediatric Orthotics
            has been my life and my passion for almost my whole career. It
            should also be said that I have recently left the field in pursuit
            of a technical career. My hope is that leadership opportunities or
            at least a more open conversation will be found.
          </p>
          <p>
            I have gradually become disenchanted with the leadership options and
            practices in O&P and have devoted the past year to analyzing the
            field so as to offer an understanding of how more agile and
            effective leadership could be imagined and implemented allowing
            talented practitioners to be retained and to take on leadership
            roles at higher management levels. I have felt the need to leave
            stable employment in search of better opportunities for training and
            promotion. My hope is to be part of the process of ensuring that the
            phrase "the good old boy network" becomes a phrase that could not
            describe O&P.
          </p>
          <p>
            The positive impact of the excellent mentors I had in my career is
            evidence of the real difference that its implementation in the
            organizational culture of O&P could make. The instructors at
            Northwestern University insisted on professionalism and handled each
            of us with respect. Leaders like Chris Piel at the Cleveland Clinic
            Foundation provided stern direction and encouragement. He led by
            example and walked the walk with his team. He insisted that each
            team member be accountable for their actions all while having
            respect and compassion for not only his patients but also the
            individuals he works with.
          </p>
          <p>
            It took a lot of soul searching until I happened on to the Human
            Dimensions of Organizations Master's Degree program at the
            University of Texas. I knew the only way for me to prove I could do
            more was to get another degree. This program was a perfect fit.
            Little did I know how completely right my feelings were but also how
            disenchanted I had become with Orthotics as I knew it.
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
            Dimensions of Organizations team and classmates. I owe a huge thank
            you to my advisor Elizabeth Richmond-Garza who heard my rantings and
            was a rigid suporter of this project. Finaly, my sincerest, deepest
            thanks to my supportive husband Tom for his encouragement beyond the
            fear and for seeing me through this journey. I am still working
            through a tunnel but at least now there is a light at the end.
          </p>
          <div className="card">
            <div className="row">
              <div className="col-md-1 col-sm-3" />
              <div className="col-md-9 col-sm-5">
                <div className="card" id="email-phone">
                  <h2 className="heading">Contact Me</h2>
                  <span className="name">Jeannie Flaherty, CO/LO</span>
                  <div className="category">
                    Full Stack Developer/Front-End Design
                  </div>
                  <div>
                    Email:{' '}
                    <a
                      href="mailto:jflaherty@utexas.edu?Subject=Hello!"
                      className="email"
                    >
                      jflaherty@utexas.edu
                    </a>
                  </div>
                  <div>
                    Phone: <span className="tel">(737)222-0016</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-3">
                <div style={{ display: 'flex', justifyContent: 'right' }}>
                  <div>
                    <img
                      src="css/img/portfoliobw.jpg"
                      alt=""
                      className="img-responsive img-circle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="card">
            <div className="row">
              <br />
              <div className="col-md-4">
                <Link to={'/conclusions'}>Back</Link>
              </div>
              <div className="col-md-4">
                <Link to={'/references'}>Next</Link>
              </div>
              <div className="col-md-4">
                <Link to={'/comments'}>Tell me what YOU think!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
