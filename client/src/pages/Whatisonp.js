import React from 'react';
import { Link } from 'react-router-dom';

const Whatisonp = () => {
  return (
    <div id="container">
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-2">
              <br />
              <img src="/css/img/kafo.png" alt="some text" width="150" />
              <br />
              <img src="/css/img/hand.jpeg" alt="some text" width="150" />

              <br />
              <img src="/css/img/spine.png" alt="some text" width="150" />
              <br />
              <img src="/css/img/halo.png" alt="some text" width="150" />
              <br />
            </div>

            <div className="col-md-10">
              <h3 className="panel-header">
                What is Orthotics and Prosthetics and Why Should We Examine
                Organizational Culture/Organizational Behavior?
              </h3>
              <p>
                The difference between orthotics and prosthetics is simple. An
                orthotist must design a device to accommodate a part of the
                anatomy that is inhibiting a patient’s full mobility or physical
                potential. A prosthetist on the other hand, must provide
                componentry to replace anatomy that may be missing due to injury
                or birth defect. A prosthetist also works with the patient to
                achieve their full potential. Combined, the field of Orthotics
                and Prosthetics is referred to O&P.
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
                prosthetics, or both. To learn more about residencies, visit{' '}
                <a href={'http://www.ncope.org/'}>NCOPE</a>. To become
                certified, candidates must pass certification exams in
                orthotics, prosthetics, or both from the
                <a href={'https://www.abcop.org/Pages/default.aspx'}>
                  {' '}
                  American Board for Certification in Orthotics, Prosthetics and
                  Pedorthics
                </a>{' '}
                , or{' '}
                <a href={'https://www.bocusa.org/boc-expands'}>
                  {' '}
                  the Board of Certification/Accreditation, International
                </a>.” For more information on O & P Careers
                <a
                  href={'http://www.opcareers.org/professionals/practitioners'}
                >
                  {' '}
                  go here.
                </a>
              </p>

              <p>
                As Condie mentions in his piece, “The Modern Era of Orthotics”
                we have seen an evolution in how we practice orthotics. Since
                1970 the field has evolved as the introduction of thermoplastics
                became preferred over the traditional metal and leather devices.
                With that development, there was a need for a new classification
                system when describing our patient population and the
                appropriate orthotic intervention. In 1975 Jacqueline Perry, a
                physical therapist, changed how we discussed our patients’
                physical limitations. By describing functional loss instead of
                diagnostic labeling, we are now better able to address
                expectations and discuss individual patient characteristics with
                one another within O&P and with other healthcare professionals.
                (Condie, 2008).
              </p>
              <p>
                Since Jacqueline Perry’s published work, there is a recognition
                that patients change and as a consequence, so do their needs.
                The International Standards Organization (ISO) formalized an
                approach to use terminology that describes the clinical
                objectives of an orthosis/prosthesis and the functional
                requirements of a device needed to fulfill those objectives.
                This was a pivotal change in how we think about orthopedic
                bracing and limb replacement. By understanding that our patent
                needs change or can be different from patient to patient instead
                of giving a “one size fits all” prescription, we allow ourselves
                to be better clinicians.
              </p>
              <p>
                <h4>
                  If we realize that multiple patients with the same diagnosis
                  have different needs, can we now understand the needs and
                  motivations of O&P professionals will change over time?
                </h4>
              </p>
            </div>
          </div>
          <br />
          <div className="card">
            <div className="row">
              <div className="col-md-4">
                <Link to={'/intro'}>Back</Link>
              </div>
              <div className="col-md-4">
                <Link to={'/allied'}>Next</Link>
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
export default Whatisonp;
