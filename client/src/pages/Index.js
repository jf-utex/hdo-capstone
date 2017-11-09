import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  // const styles = {
  // p: {
  //   font-style: 'italic'
  // }
  // };
  return (
    <div className="panel-bodyindex">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontStyle: 'bold',
          fontSize: 20
        }}
      >
        <div>
          <h3>
            There is a difference between Leadership and Management.
            <br />
            <br />
            <li>Leaders inspire while Managers direct.</li>
            <br />
            <li>
              {' '}
              MANAGEMENT is about coping with complexity while LEADERSHIP is
              about coping with change.
            </li>
            <br />
            <li>
              {' '}
              A manager does the THING right while a leader does the RIGHT
              thing.
            </li>
            <br />
          </h3>
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
          “Market competition and demographic changes in the labor force are two
          of the forces challenging organizations to develop more effective
          leadership training, and implementation programs.”
          <p>(Ahn & Ettner, 2017)</p>
          <br />
          <br />
          <p>
            “Organizational Culture refers to a system of shared assumptions,
            values, and beliefs that show employees what is appropriate and
            inappropriate behavior”
          </p>
          <p>(Chatman, J. A., & Eunyoung Cha, S., 2003)</p>
          <br />
          <br />
          <p>
            “Organizational Behavior is a management tool that studies the
            attitudes and behaviors of individuals within a workplace. Learned
            principles from OB studies can be used to optimize productivity.”
          </p>
          <p>(Patel, 2015)</p>
        </p>
      </div>
      <div className="row" />
      <div>
        <Link to={'/intro'}>Next</Link>
      </div>
    </div>
  );
};

export default Index;
