import React, { Component } from 'react';
import { render } from 'react-dom';

const Nav = (props) => {
  return (
    <div id="navBtns">
      <button onClick={() => props.changeMode('METHODS')} className="navBtn">
        Methods
      </button>
      <button onClick={() => props.changeMode('REAGENTS')} className="navBtn">
        Reagents
      </button>
      <button className="navBtn">Departments</button>
      <button className="navBtn">Users</button>
    </div>
  );
};

export default Nav;
