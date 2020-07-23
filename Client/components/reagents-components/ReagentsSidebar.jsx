import React, { Component } from 'react';
import ReagentsInfo from './ReagentsInfo.jsx';

const ReagentsSidebar = ({
  reagents,
  current,
  display,
  displayReagentInfo,
  displayMode,
  addReagent,
  editReagent,
  deleteReagent,
}) => {
  const reagentList = reagents.map((reag, index) => (
    <p key={index} onClick={() => displayReagentInfo(index)}>
      {reag.name}
    </p>
  ));
  return (
    <div id="listContainer">
      <div id="sidebarList">{reagentList}</div>

      <ReagentsInfo
        current={current}
        display={display}
        displayMode={displayMode}
        addReagent={addReagent}
        editReagent={editReagent}
        deleteReagent={deleteReagent}
      />
      <button className="addNew" onClick={() => displayMode('ADD_REAGENT')}>
        Add Reagent
      </button>
    </div>
  );
};

export default ReagentsSidebar;
