import React, { Component } from 'react';
import ReagentsInfo from './ReagentsInfo.jsx';
const ReagentsSidebar = ({}) => {
  //   const methodList = methods.map((meth, index) => (
  //     <p key={index} onClick={() => displayMethodInfo(index)}>
  //       {meth.epa_method}
  //     </p>
  //   ));

  return (
    <div id="listContainer">
      <div id="sidebarList"></div>

      <ReagentsInfo />
      <button id="addMethod">Add Reagent</button>
    </div>
  );
};

export default ReagentsSidebar;
