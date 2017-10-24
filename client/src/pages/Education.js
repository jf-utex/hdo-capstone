import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Education = () => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-body">
          <div class="col-md-4">
            <img src="/css/img/poliokafo.jpg" alt="some text" width="150" />
          </div>
          <h4 className="panel-header">Education</h4>
          <p>
            Orthotic and Prosthetic practitioners are in a unique field that
            blend patient care with design and fabrication of devices for the
            physically challenged. They are similar in many ways to other
            healthcare providers in that they see patients to evaluate their
            physical orthopedic needs, recommend a treatment plan for improved
            physical mobility, and in coordination with physicians, physical
            therapists or other health care professionals the orthotist will
            design, fabricate, and fit custom-made orthopedic braces, also known
            as "orthoses". The orthotist may fit pre-fabricated devices and
            provide related patient care. A prosthetist designs, fabricates, and
            fits custom-made artificial limbs, or "prostheses," and provides
            related patient care. provide an orthopedic device to benefit the
            patient.
          </p>

          <p>
            Orthotists and Prosthetic practitioners are integral members of the
            healthcare and rehabilitation team. These practitioners evaluate
            patients, formulate treatment plans, and provide follow-up care and
            continued patient management that ensures the overall welfare of
            their patients. Their unique expertise in patient assessment,
            design, and materials offers patients increased mobility and
            independence. Practitioners work in settings such as patient care
            facilities, hospitals, VA facilities, rehabilitation facilities,
            long-term care facilities, and in patients' homes. Steps to a career
            as an O&P practitioner See a list of O&P practitioner education
            programs. After completion of the master's degree program, you must
            complete a residency in orthotics, prosthetics, or both. To learn
            more about residencies, visit the NCOPE website. To become
            certified, candidates must pass certification exams in orthotics,
            prosthetics, or both from the American Board for Certification in
            Orthotics, Prosthetics and Pedorthics (ABC), the Board of
            Certification/Accreditation, International (BOC), or both. To learn
            more about the requirements for certification, please visit the ABC
            website or the BOC website.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img
                src="/css/img/MastersPrograms.png"
                alt="O&P Masters Programs-2017"
                width="650"
              />
            </div>
          </div>
          <hr />
          <img
            src="../../../../css/img/abc-logo.png"
            alt="some text"
            width="250"
          />
          <div>
            <Link to={'/why'}>Next</Link>
          </div>
          <div>
            <Link to={'/comments'}>Tell me what YOU think!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
