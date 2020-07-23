import React, { Component } from 'react';
import ReagentsInfo from './ReagentsInfo.jsx';

const ReagentsSidebar = ({ reagents, current, display, displayReagentInfo }) => {
  const reagentList = reagents.map((reag, index) => (
    <p key={index} onClick={() => displayReagentInfo(index)}>
      {reag.name}
    </p>
  ));
  return (
    <div id="listContainer">
      <div id="sidebarList">{reagentList}</div>

      <ReagentsInfo current={current} display={display} />
      <button id="addMethod">Add Reagent</button>
    </div>
  );
};

export default ReagentsSidebar;
