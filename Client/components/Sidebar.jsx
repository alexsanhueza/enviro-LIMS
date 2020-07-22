import React, { Component } from 'react';
import InfoContainer from './InfoContainer.jsx';

const Sidebar = ({ methods, current }) => {
  const methodList = methods.map((meth, index) => <p key={index}>{meth.epa_method}</p>);

  return (
    <div>
      <div>{methodList}</div>
      <div>{/* <InfoContainer current={current} /> */}</div>
    </div>
  );
};

export default Sidebar;
