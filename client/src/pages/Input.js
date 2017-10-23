import React from 'react';
import { Link } from 'react-router-dom';

const Input = () => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-body">
          <h4 className="panel">Tell me what YOU think</h4>
          <p>place your thoughts below</p>
          <a href="/auth/google">Sign In With Google</a>
          <hr />
          <img src="/css/img/construction.png" alt="some text" height="250" />
        </div>
      </div>
    </div>
  );
};
export default Input;
