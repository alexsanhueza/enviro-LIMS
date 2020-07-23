import React, { Component } from 'react';
import InfoContainer from './InfoContainer.jsx';

const Sidebar = ({
  methods,
  current,
  display,
  displayMode,
  saveNewMethod,
  displayMethodInfo,
  editMethod,
  deleteMethod,
  getReagents,
  reags,
  getAllReagents,
  allReags,
  handleChange,
  addReagentToMethod,
}) => {
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
        reags={reags}
        saveNewMethod={saveNewMethod}
        displayMode={displayMode}
        editMethod={editMethod}
        deleteMethod={deleteMethod}
        getReagents={getReagents}
        getAllReagents={getAllReagents}
        allReags={allReags}
        handleChange={handleChange}
        addReagentToMethod={addReagentToMethod}
      />
      <button className="addNew" onClick={() => displayMode('ADD_METHOD')}>
        Add Method
      </button>
    </div>
  );
};

export default Sidebar;
