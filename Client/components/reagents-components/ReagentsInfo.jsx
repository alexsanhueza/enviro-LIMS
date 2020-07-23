import React, { Component } from 'react';

const ReagentsInfo = ({ current, display }) => {
  if (current && display === 'REAGENT_INFO') {
    return (
      <div className="selectedInfo">
        <div className="infoList">
          <div>Reagent: {current.name}</div>
          <div>Reagent type: {current.type}</div>
          <div>CAS ID Number: {current.cas_number}</div>
          <div></div>
          <div></div>
        </div>
        <div className="infoBtns">
          <button id="editMethod">Edit Reagent</button>
        </div>
      </div>
    );
  }
  return <div>Fetching Reagent Data</div>;
};

export default ReagentsInfo;
