import React, { Component } from 'react';
import InfoContainer from './InfoContainer.jsx';

const Sidebar = ({ methods, current, display, displayMode, saveNewMethod, displayMethodInfo, editMethod, deleteMethod }) => {
  const methodList = methods.map((meth, index) => (
    <p key={index} onClick={() => displayMethodInfo(index)}>
      {meth.epa_method}
    </p>
  ));

  return (
    <div>
      <div>{methodList}</div>
      <button id="addMethod" onClick={() => displayMode('ADD_METHOD')}>
        Add Method
      </button>
      <InfoContainer
        current={current}
        display={display}
        saveNewMethod={saveNewMethod}
        displayMode={displayMode}
        editMethod={editMethod}
        deleteMethod={deleteMethod}
      />
    </div>
  );
};

export default Sidebar;
