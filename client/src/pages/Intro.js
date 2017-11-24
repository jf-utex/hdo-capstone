import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div id="container">
      <div className="panel panel-default">
        <div className="panel-bodyintro">
          <h3>Orthotic Leadership Today</h3>
          <p>
            Leadership is crucial in any organization. Perhaps this is even more
            the case in a health care field like Orthotics and Prosthetics that
            specifically provides a service requiring full attention to detail
            and creativity in the solutions we provide. It is important for the
            emotional wellbeing of patients, families and professionals alike.
            Anyone searching for resources in O&P leadership, will generally
            find them difficult to locate. In my direct experience, the O&P
            profession has not offered training in leadership through our
            education platform to our professionals. We rarely discuss
            organizational culture or organizational behavior in peer-reviewed
            literature. In short, we are currently not part of an important
            conversation that is ongoing in other professions like sales,
            insurance, machinery, restaurant and hospitality. Even other health
            care organizations have realized that the attention paid to the
            organization itself, and especially to leadership, plays an
            important role in the health of the organization and in the quality
            of service provided to clients. We are missing an opportunity to add
            to the body of knowledge regarding how we treat one another and how
            we can improve our interpersonal relationships in the clinic. We are
            missing the opportunity to garner a higher engagement from our
            employees.
          </p>
          <br />
          <h3>
            This shortcoming appears in the education cornerstone of our
            industry’s stated purpose of research.
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
            We, as a profession, need to take the opportunity to look at our
            culture through a critical lens so as to isolate strengths and
            weaknesses. This reflection will allow us to define what it means to
            be an effective leader in our field and to encourage and support
            developmental opportunities for individuals taking on leadership
            roles. Without this leadership mentoring, we will not keep pace with
            other fields currently developing this understanding and framework
            of leadership in their own organizations.
          </p>
          <p>
            We encourage our patients to adapt to changing technology and
            re-fabricated devices. As a regular dynamic response to new
            information and developing techniques, we change how we manage a
            patient or fabricate a device, taking into account new information,
            and the progressions of the physical realities of our patients. We
            should improve our own interactions outside the examination room by
            applying these very principles whose effectiveness we already know.
          </p>
          <p>
            Our current perspective overlooks the need for internal examination
            of policies, practice, culture and leadership. Without examining who
            we are and why we do what we do, we are missing the opportunity to
            improve our interpersonal relationships with each other and our
            patients. While O&P has been historically excellent at examining
            biomechanical and anatomical principles, we have neglected exploring
            and considering ways to improve our mentoring, our leadership and
            ways to recruit talent to our field.
          </p>
          <br />
          <div className="row">
            <div className="col-md-12">
              <p>
                So far we have not expanded the body of research in these areas,
                and we have fallen behind our allied health colleagues. The
                fields of nursing and physical therapy, among others, are
                actively researching and implementing changes that allow them to
                move forward with current available technology, harness the
                value of incumbent human capital, attract fresh talent and
                engage current talent. Not participating in a conversation being
                had about organizational culture, organizational behavior, and
                employee citizenship sets us apart from our health care peers
                and other organizations in ways that our counterproductive in
                the highly competitive environment for attracting new and
                talented employees.. As long as we are not involved in this
                discussion, we risk being a highly specialized and important
                trade dedicated to providing certain devices rather than a
                profession that is also dedicated to provide unbiased counsel
                and service in an agile manner to clients.
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
