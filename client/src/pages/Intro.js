import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="panel-bodyintro">
      <h3>Orthotic Leadership and the Future</h3>
      <p>
        In the O&P profession there is currently no training in leadership or
        mentoring our professionals in how to navigate the interpersonal
        relationships between practitioners. We, as a profession, are not
        looking at our culture through a critical lens to isolate strengths and
        weaknesses. This shortcoming may extend from the cornerstone of our
        industry’s education stated purpose of research.
      </p>
      <div className="panel-nupoc">
        <br />
        <p>
          “Research strives to improve quantification and objective scientific
          evidence that informs P&O clinical decision-making; and to develop new
          concepts and devices that will improve the quality,
          cost-effectiveness, and delivery of P&O fittings.“ (Northwestern
          University Prosthetic and Orthotice Center, 2017)
        </p>
        <br />
      </div>
      <div className="row">
        <div className="col-md-2">
          {/* <p> */}
          <img src="/css/img/cairo-toe.jpg" alt="some text" width="170" />
        </div>
        <div className="col-md-4">
          <p>
            This perspective ignores the need for internal examination of
            policies, practice, culture and leadership. Without examining who we
            are and why we do what we do, we are missing the opportunity to
            improve our interpersonal relationships with each other and our
            patients. While O&P has been historically excellent at examining
            biomechanical and anatomical principles, we are forgetting to look
            at ways to improve our mentoring, our leadership and ways to recruit
            talent to our field.
          </p>
        </div>
        <div className="col-md-6">
          <p>
            Currently, we aren't adding to the body of research in these areas.
            While we fail to do so, other allied health organizations are
            researching and implimenting changes that allow them to move forward
            with current technology and attracting fresh talent. Ignoring the
            fact that other allied health care organizations are looking at
            Organizational Culture/Organizational Behavior sets us apart from
            our health care peers. As long as we are not involved in the
            discussion, we will continue to face the question of whether we are
            a profession or a trade.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="panel-list">
        <div className="card">
          Some subjects we should be examining in the Orthotics and Prosthetics
          profession are:
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Gender Communication Styles</li>
            <li className="list-group-item">Generational Differences</li>
            <li className="list-group-item">Employee Engagement</li>
            <li className="list-group-item">Communication Between Collegues</li>
            <li className="list-group-item">
              Effective Mentoring and Leadership
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />

      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to={'/theproblem'}>Next</Link>
          </li>
          <li className="list-group-item">
            <Link to={'/comments'}>Tell me what YOU think!</Link>
          </li>
        </ul>
      </div>

      <div />
    </div>
  );
};

export default Intro;
