import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div id="container">
      <div className="panel panel-default">
        <div className="panel-bodyintro">
          <h3>Orthotic Leadership Today</h3>
          <p>
            In my personal experience, the O&P profession has not offered
            training in leadership through our education platform to our
            professionals. I have found that we do not discuss organizational
            culture or organizational behavior in peer-reviewed literature. In
            short, we are not adding to an important conversation that is
            ongoing in other professions like sales, insurance, machinery,
            restaurant and hospitality or even other health care organizations.
            We are missing an opportunity to add to the body of knowledge
            regarding how we treat one another and how we can improve our
            interpersonal relationships in the clinic. We are missing the
            opportunity to garner a higher engagement from our employees.
          </p>
          <br />
          <h3>
            This shortcoming may extend from a cornerstone of our industry’s
            education stated purpose of research.
          </h3>
          <div className="panel-nupoc">
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
                <img src="/css/img/research.jpg" alt="some text" width="170" />
              </div>
            </div>
            <br />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontStyle: 'italic'
              }}
            >
              <p>
                “Research strives to improve quantification and objective
                scientific evidence that informs P&O clinical decision-making;
                and to develop new concepts and devices that will improve the
                quality, cost-effectiveness, and delivery of P&O fittings.“
                (Northwestern University Prosthetic and Orthotic Center, 2017)
              </p>
              <br />
            </div>
          </div>
          <br />
          <p>
            We, as a profession, are not looking at our culture through a
            critical lens to isolate strengths and weaknesses. We are not
            learning how to be good leaders, we are not mentoring in leadership
            and we are failing to keep pace with others on understanding our own
            organization. We encourage our patients to adapt to changing
            technology and re-fabricated devices. Often, we change how we manage
            a patient or fabricate a device according to new information,
            fabrication designs progression of deformities. Shouldn't we also be
            applying these principles to how we engage with each other outside
            of the exam room? Our current perspective ignores the need for
            internal examination of policies, practice, culture and leadership.
            Without examining who we are and why we do what we do, we are
            missing the opportunity to improve our interpersonal relationships
            with each other and our patients. While O&P has been historically
            excellent at examining biomechanical and anatomical principles, we
            are forgetting to look at ways to improve our mentoring, our
            leadership and ways to recruit talent to our field.
          </p>
          <br />
          <div className="row">
            <div className="col-md-12">
              <p>
                Because, we aren't adding to the body of research in these
                areas, we fall behind our allied health colleagues. The fields
                of nursing and physical therapy, among others, are actively
                researching and implementing changes that allow them to move
                forward with current available technology, harness the value of
                incumbent human capital, attract fresh talent and engage current
                talent. Ignoring the fact that there is a conversation being had
                about organizational culture, organizational behavior, and
                employee citizenship sets us apart from our health care peers
                and other organizations that are competing with us for new
                talent. As long as we are not involved in this discussion, we
                will continue to face the question of whether we are a
                profession or a trade.
              </p>
            </div>
          </div>
          <br />
          <br />
          {/* <div className="panel-list"> */}
          <div className="card">
            Some subjects we should be examining in the Orthotics and
            Prosthetics profession are:
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Gender Communication Styles</li>
              <li className="list-group-item">
                Generational Differences in Perspective
              </li>
              <li className="list-group-item">
                Employee Engagement/Employee Citizenship
              </li>
              <li className="list-group-item">
                Appropriate Communication: between colleagues, leadership and
                management
              </li>
              <li className="list-group-item">
                Effective Mentoring and Leadership
              </li>
            </ul>
          </div>
          {/* </div> */}

          <br />
          <br />

          <div className="card">
            <div className="row">
              <div className="col-md-4">
                <Link to={'/'}>Back</Link>
              </div>
              <div className="col-md-4">
                <Link to={'/whatisonp'}>Next</Link>
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

export default Intro;
