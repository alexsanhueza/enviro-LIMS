import React, { Component } from 'react';
import InfoContainer from './InfoContainer.jsx';

const Sidebar = ({ methods, current, display, displayMode, saveNewMethod, displayMethodInfo, editMethod, deleteMethod }) => {
  const methodList = methods.map((meth, index) => (
    <p key={index} onClick={() => displayMethodInfo(index)}>
      {meth.epa_method}
    </p>
  ));

  return (
    <div id="listContainer">
      <div id="sidebarList">{methodList}</div>

      <InfoContainer
        current={current}
        display={display}
        saveNewMethod={saveNewMethod}
        displayMode={displayMode}
        editMethod={editMethod}
        deleteMethod={deleteMethod}
      />
      <button id="addMethod" onClick={() => displayMode('ADD_METHOD')}>
        Add Method
      </button>
    </div>
  );
};

export default Sidebar;
