import React, { Component } from 'react';

const ReagentsInfo = ({ current, display, displayMode, addReagent, editReagent, deleteReagent }) => {
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
          <button onClick={() => displayMode('EDIT_REAGENT')}>Edit Reagent</button>
        </div>
      </div>
    );
  } else if (current && display === 'ADD_REAGENT') {
    return (
      <div className="selectedInfo">
        <div className="infoList">
          <div>
            Reagent Name:<input id="newReagentName" type="text"></input>
          </div>
          <div>
            Reagent Type: <input id="newType" type="text"></input>
          </div>
          <div>
            CAS ID Number: <input id="newCas" type="text"></input>
          </div>
        </div>
        <div className="infoBtns">
          <button
            onClick={() =>
              addReagent({
                name: document.getElementById('newReagentName').value,
                type: document.getElementById('newType').value,
                cas_number: document.getElementById('newCas').value,
              })
            }
          >
            Save
          </button>
          <button id="cancel" onClick={() => displayMode('REAGENT_INFO')}>
            Cancel
          </button>
        </div>
      </div>
    );
  } else if (current && display === 'EDIT_REAGENT') {
    return (
      <div className="selectedInfo">
        <div className="infoList">
          <div>
            Reagent Name: <input id="newReagentName" type="text" defaultValue={current.name}></input>
          </div>
          <div>
            Reagent Type: <input id="newType" type="text" defaultValue={current.type}></input>
          </div>
          <div>
            CAS ID Number: <input id="newCas" type="text" defaultValue={current.cas_number}></input>
          </div>
        </div>
        <div className="infoBtns">
          <button
            onClick={() =>
              editReagent(current._id, {
                name: document.getElementById('newReagentName').value,
                type: document.getElementById('newType').value,
                cas_number: document.getElementById('newCas').value,
              })
            }
          >
            Save Reagent
          </button>
          <button onClick={() => deleteReagent(current._id)}>Delete Reagent</button>
          <button id="cancel" onClick={() => displayMode('REAGENT_INFO')}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
  return <div>Fetching Reagent Data</div>;
};

export default ReagentsInfo;
