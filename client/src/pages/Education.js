import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Education = () => {
  return (
    <div id="container">
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-2">
              <img src="/css/img/poliokafo.jpg" alt="some text" width="150" />
              <br />
              <br />
            </div>

            <div className="col-md-10">
              <h3 className="panel-header">
                Why Should We Examine Organizational Culture and Organizational
                Behavior?
              </h3>
              <p>
                The difference between orthotics and prosthetics is simple, an
                orthotist must design a device to accommodate a part of the
                anatomy that is inhibiting a patient’s full mobility potential.
                A prosthetist on the other hand, must provide componentry to
                replace anatomy that may be missing, such as a leg or an arm,
                that is preventing a patient to achieve their full mobility
                potential. Combined, the field of Orthotics and Prosthetics is
                referred to O&P.
              </p>

              <p>
                Orthotists and Prosthetists are integral members of the
                healthcare and rehabilitation team. Their unique expertise in
                patient assessment, design, and materials offers patients
                increased mobility and independence. O&P practitioners work in
                settings such as patient care facilities, hospitals,
                rehabilitation facilities, long-term care facilities, and in
                patients' homes. “After completion of the master's degree
                program, you must complete a residency in orthotics,
                prosthetics, or both. To learn more about residencies, visit the
                NCOPE website. (link to NCOPE website) To become certified,
                candidates must pass certification exams in orthotics,
                prosthetics, or both from the American Board for Certification
                in Orthotics, Prosthetics and Pedorthics (ABC), (link to ABC
                Website) the Board of Certification/Accreditation, International
                (BOC),(link to BOC website) or both.”
              </p>
              <p>http://www.opcareers.org/professionals/practitioners/</p>
              <p>
                As Condie mentions in his piece, “The Modern Era of Orthotics”
                we have seen an evolution in how we practice orthotics. Since
                1970 the field has evolved as the introduction of thermoplastics
                became favorable to the traditional metal and leather devices.
                With that development, there was a need for a new classification
                system when describing our patient population and the
                appropriate orthotic intervention. In 1975 Jacqueline Perry, a
                physical therapist, changed how we discussed out patients’
                physical limitations. By describing functional loss instead of
                diagnostic labeling we are now better able to address
                expectations and discuss individual patient characteristics with
                one another within O&P and with other health care professionals.
                (Condie, 2008).
              </p>
              <p>
                There is now a recognition that patients change and as a
                consequence, so do their needs. The International Standards
                Organization formalized an approach to use terminology that
                describes the clinical objectives of an orthosis and the
                functional requirements of an orthosis needed to fulfill those
                objectives. This was a pivital change in how we think about
                orthopedic bracing and limb replacement. By understanding that
                our patent needs change or can be different from patient to
                patient instead of giving a “one size fits all” perscription we
                allow ourselves to be better clinicians.
              </p>
              <p>
                We should also understand the needs and motivations of O&P
                professionals will change over time. We should understand that
                communication differences are present within genders, what works
                for a male may not work for a female, each gender with their own
                strengths and individual weaknesses. Now with a workforce of
                "Millinial" adults quickly out numbering ?Generation X", we may
                need to do business differently as even generational differences
                are known. What if we maximized the strengths of our co-workers
                the same as we maximize the muscle group that is not impacted by
                a disease process? How will those strengths change over time as
                a clinician becomes more seasoned in thier practice. Just as we
                encourage our patients to participate in physical therapy for
                strengthening or avoidance of contracture shouldn’t we consider
                the long term goals of our practitioners and provide ”therapy”
                in the form of leadership training or at the very least
                mentoring?
              </p>
            </div>
          </div>
          <div className="row">
            <img
              src="/css/img/abc-logo.png"
              alt="some text"
              justifyContent="center"
              width="250"
            />
          </div>
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link to={'/allied'}>Next</Link>
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
export default Education;
