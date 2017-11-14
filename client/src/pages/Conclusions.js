import React from 'react';
import { Link } from 'react-router-dom';

const Conclusions = () => {
  return (
    <div id="container">
      <div className="panel panel-default">
        <div className="panel-body">
          <h3>Conclusions</h3>

          {/* <p className="panel-text"> */}
          <div className="row">
            <div className="col-md-6">
              <p>
                Misconceptions exist about every generation. Veterans are viewed
                as old-fashioned and out of touch. Baby Boomers are stereotyped
                as workaholics who are set in their ways. Generation X has been
                dubbed “the slacker generation.” Generation Y is viewed as
                demanding, impatient, and disloyal. When people do not
                understand each other’s generational culture, styles, and
                backgrounds, conflict arises. (Weingarten, 2009).
              </p>
              <p>
                It is the challenge and responsibility of future leaders to
                understand the motivations of their workers and help sooth
                conflict when generational values are at odds and causing
                distress in the work environment. By understanding these
                motivations, they can work to bring generations together thereby
                reducing the “Generation Gap" that can tear teams apart. Leaders
                must keep in mind, these are guidelines for general behaviors
                and attitudes and are not defining features of an individual.
                Understanding the reasoning behind generational differences may
                help leaders address conflict in the workplace and approach
                problems in the language of these cohorts. It takes some skill,
                however; a good leader will be able to tap into and utilize the
                specific skills of their employees to better serve the
                organization.
              </p>
              <p>
                Organizations are complex and consist of individuals with
                different experiences, skills, and preferences. O&P is no
                different. In fact, we may be more complex than the average
                business. We interact with a special sector of the public that
                is varied in experiences, genders, and generations just as our
                clinicians come from these varied backgrounds, education and
                training. We will work with seasoned clinicians, residents and
                the newly certified as well as other allied health professionals
                that may or may not recognize our expertise.
              </p>
              <p>
                Organizations are the coordination of individual behaviors and
                decision-making processes. To understand the impact of this on
                our organizations, we need to consider how and why individuals
                behave the way they do. Individuals make conscious decisions
                that lead to what they think are the optimal outcomes based on
                their preferences and experiences. These preferences are
                impacted by generational attitudes, specialization, education
                and the organizational expectations. Expanding our knowledge
                about our own organizational behavior and culture will allow us
                to first understand how we interact with one another but shed
                light on how these actions may need to change for the future of
                O&P and the wellness of our patients.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <p>
                  Mentoring those new to clinical practice is vital because they
                  may not have the experiences necessary to have complete
                  knowledge in how to handle situations. We do this with our
                  Residency Programs. It stands to reason we should do the same
                  with our leadership.
                </p>
                <p>
                  When an individual starts a new job, often supervisors will
                  place strong restrictions on the new clinicians’ decisions and
                  actions until they are certain the outcomes coincide with the
                  organizational expectations. This can be suffocating to a
                  seasoned clinician as well as a new clinician that “thinks
                  they know the outcomes to their actions”. It is imperative
                  that the communication be circular and supportive while
                  providing feedback in a timely manner.
                </p>
                <p>
                  It is good for a supervisor to keep in mind that no one person
                  has all the answers. We like to think we know how we make
                  decisions but more often what we do is rationalization based
                  on our available information. We all have cognitive
                  limitations and limited time available to make a decision.
                </p>
                <br />
                <h3>
                  Research Needs in O&P include examination of Culture in
                  Leadership
                </h3>
              </p>
              <ul>
                <li>
                  Communication styles: Peer to Peer and with patient population
                  considering gender and generational differences
                </li>
                <li>Garner experience from incumbants in the field</li>
                <li>Encourage ideas from younger generation</li>
                <li>
                  Increase engagement => encourage growth of field/improved
                  patient care
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link to={'/references'}>Next</Link>
              </li>
              <li className="list-group-item">
                <Link to={'/comments'}>Tell me what YOU think!</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Conclusions;
