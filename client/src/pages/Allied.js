import React from 'react';
import { Link } from 'react-router-dom';

const Allied = () => {
  return (
    <div>
      {/* <div className="panel panel-default"> */}
      <div className="panel-body">
        <h3 className="panel">
          {/* What can we learn from other allied health professions? */}
        </h3>
        <div className="wrapper">
          <p>
            As of 2017, the O&P community is composed of approximately 6,000
            professionals. Of those 6,000 practitioners, females make up just
            27%. The male to female ratio has historically favored males
            however; the patient gender distribution is relatively evenly
            distributed. That said, why is the field so unbalanced?
          </p>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img
                src="/css/img/genpie.png"
                alt="FEMALE TO MALE distribution"
                width="500"
              />
            </div>
          </div>
          <br />
          <p>
            This was the first question that began my search through the
            literature as outlined by (Webster and Watson, 2017). I utilized
            Google Scholar as well as the University of Texas Libraries. My goal
            was to try to find out what the O&P community has as recorded
            reasons for this imbalance. I wanted to find articles on leadership,
            multigenerational values and suggestions of how leadership can
            address the issues of this particular time in history. I was sure
            I'd find data generated by the O&P community now that it is required
            that we earn a Master's Degree in order to enter the field.
          </p>
          <p>
            I found that a literature search in Google Scholar returned
            thousands of results when searching “leadership in nursing or
            physical therapy” however, only 1-2 relevant articles pertaining
            specifically to O&P. I found a lack of peer reviewed research on the
            field of O&P relating to our organizational behavior, organizational
            culture and a lack of guidelines pertaining to our peer
            leadership/mentoring. I then turned to the nursing community and
            found copious research on these subjects. As it is today, current
            managerial leadership in Orthotics and Prosthetics is taught by “do
            as I say and sometimes do what I do”. As I have learned, this method
            of mentoring may not be appropriate for those newly entering the
            field. I then began to wonder as I reflect on my personal experience
            in the field, is this method of mentoring ever appropriate?
          </p>
          <p>
            Zero articles pertaining to organizational culture or organizational
            behavior O&P.... If we are to maintain professionalism and improve
            our patient care practices, we are obligated to move outside the
            NUPOC definition of "research" and expand our sights to include how
            individuals in our organizations behave.
          </p>
          <br />
          <p>
            <h4>Let's Look at the Generational Gap in Experience</h4>
          </p>
          <p>
            In order to be sustainable in the future, we must change how we look
            at research and ask ourselves how we can best serve our public and
            recognize changing trends in communication and expectations of the
            workplace. We must also consider that future generations may and
            likely DO have different perspectives around health care. These
            shifts have been documented extensively by other professions and
            show that the millennial generation looks at problems through a
            different lens than we have in the past. O&P should embrace a shift
            toward examining not only our biomechanical applications but also to
            look at how we communicate with those that are new to the workforce.
          </p>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img src="/css/img/genmakeup.png" alt="some text" width="500" />
            </div>
          </div>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img
                src="/css/img/racialethback.png"
                alt="some text"
                width="500"
              />
            </div>
          </div>
          <br />
          <p>
            Above are two tables as printed in the "Practice Analysis of
            Certified Practitioners in the Disciplines of Orthotics and
            Prosthetics" 2015 review (Whiteside, S, et. al, 2015). These tables
            show the age distribution of practitioners and the ethnic make-up of
            the field. As indicated by the tables above, the workforce is evenly
            distributed between the ages of 25-64 years. Because of the
            relatively even distribution of the current O&P workforce across age
            groups, we are provided an environment to share our perspectives
            relating to generational differences and begin to explore why our
            gender and ethnic distribution are not as equally distributed. With
            this information, we have an opportunity for a shift toward
            transformational leadership and an increased awareness of our
            gender, ethnic, and generational diversity. Because we do have a
            nice distribution of generations in the field, now would be an
            excellent opportunity to look at generational perspectives as other
            allied health professionals have done.
          </p>

          <div className="card">
            We should ask the questions:
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                What are the differences between the Baby Boomers, Generation X,
                Generation Y, and eventually Generation Z regarding their
                workplace expectations?
              </li>
              <li className="list-group-item">
                What is the difference between management and leadership?
              </li>
              <li className="list-group-item">
                How can leadership promote employee engagement?
              </li>
              <li className="list-group-item">
                How can we engage Generation Y and Generation Z while addressing
                their needs in employment without alienating previous
                generations in the workplace?
              </li>
              <li className="list-group-item">
                Can we find commonalities in each generation, strong enough to
                overcome their differences?
              </li>
              <li className="list-group-item">
                And finally, can we find a common ground within this
                multigenerational workplace to grow and enhance the way we do
                business allowing all persons to be engaged and invested in
                their careers?
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to={'/generation'}>Next</Link>
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
export default Allied;
