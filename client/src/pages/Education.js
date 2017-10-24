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
            healthcare providers: They see patients to evaluate their physical
            orthopedic needs, recommend a tratment pan for improved physical
            mobility, and in coordination with physicians, physical therapists
            or other health care professionals provide an orthopedic device to
            benefit the patient. They either build a custom device or they will
            have access to prefabricated devices to do this.
          </p>

          <p>
            An orthotist designs, fabricates, and fits custom-made orthopedic
            braces, or "orthoses," and fits pre-fabricated devices, and provides
            related patient care. A prosthetist designs, fabricates, and fits
            custom-made artificial limbs, or "prostheses," and provides related
            patient care. O&P practitioners are integral members of the
            healthcare and rehabilitation team. Practitioners evaluate patients,
            formulate treatment plans, and provide follow-up care and continued
            patient management that ensures the overall welfare of their
            patients. Their unique expertise in patient assessment, design, and
            materials offers patients increased mobility and independence.
            Practitioners work in settings such as patient care facilities,
            hospitals, VA facilities, rehabilitation facilities, long-term care
            facilities, and in patients' homes. Steps to a career as an O&P
            practitioner See a list of O&P practitioner education programs.
            After completion of the master's degree program, you must complete a
            residency in orthotics, prosthetics, or both. To learn more about
            residencies, visit the NCOPE website. To become certified,
            candidates must pass certification exams in orthotics, prosthetics,
            or both from the American Board for Certification in Orthotics,
            Prosthetics and Pedorthics (ABC), the Board of
            Certification/Accreditation, International (BOC), or both. To learn
            more about the requirements for certification, please visit the ABC
            website or the BOC website.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img
                src="/css/img/MastersPrograms.png"
                alt="current o&p Masters Programs"
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
