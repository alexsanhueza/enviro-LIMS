import React, { Component } from 'react';
import InfoContainer from './InfoContainer.jsx';

const Sidebar = ({ methods, current, display, addMethodMode, saveNewMethod }) => {
  const methodList = methods.map((meth, index) => <p key={index}>{meth.epa_method}</p>);

  return (
    <div>
      <div>{methodList}</div>
      <button id="addMethod" onClick={addMethodMode}>
        Add Method
      </button>
      <InfoContainer current={current} display={display} saveNewMethod={saveNewMethod} />
    </div>
  );
};

export default Sidebar;
