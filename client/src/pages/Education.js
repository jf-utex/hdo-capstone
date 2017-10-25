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
            healthcare providers: they see patients to evaluate their physical
            orthopedic needs, recommend a treatment plan for improved physical
            mobility, and in coordination with physicians, physical therapists
            or other health care professionals provide an orthopedic device to
            benefit the patient. They either build a custom device or they will
            have access to prefabricated devices to do this. An orthotist and
            prosthetist will need a physician prescription to provide services
            just as PT, OT, RN or any other health care professional.
          </p>

          <p>
            The difference in orthotics and prosthetics is simple, an orthotist
            must design a device to accommodate a part of the anatomy that is
            inhibiting a patient’s full mobility potential. A prosthetist on the
            other hand, must provide componentry to replace anatomy that may be
            missing, such as a leg or an arm, that is preventing a patient to
            achieve their full mobility potential.
          </p>

          <p>
            Orthotists and Prosthetic practitioners are integral members of the
            healthcare and rehabilitation team. Their unique expertise in
            patient assessment, design, and materials offers patients increased
            mobility and independence. O&P practitioners work in settings such
            as patient care facilities, hospitals, rehabilitation facilities,
            long-term care facilities, and in patients' homes. How do you become
            an orthotist or prosthetist: From
            http://www.opcareers.org/professionals/practitioners/ “After
            completion of the master's degree program, you must complete a
            residency in orthotics, prosthetics, or both. To learn more about
            residencies, visit the NCOPE website. To become certified,
            candidates must pass certification exams in orthotics, prosthetics,
            or both from the American Board for Certification in Orthotics,
            Prosthetics and Pedorthics (ABC), the Board of
            Certification/Accreditation, International (BOC), or both. To learn
            more about the requirements for certification, please visit the ABC
            website or the BOC website.”
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <img
                src="/css/img/mastersprograms.png"
                alt="O&P Masters Programs-2017"
                width="650"
              />
            </div>
          </div>
          <img src="/css/img/abc-logo.png" alt="some text" width="250" />
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
