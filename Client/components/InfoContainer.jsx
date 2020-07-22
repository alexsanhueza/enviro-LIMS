import React, { Component } from 'react';

const InfoContainer = ({ current, display, saveNewMethod, displayMode, editMethod, deleteMethod }) => {
  if (current && display === 'METHOD_INFO') {
    return (
      <div className="selectedInfo">
        <div className="infoList">
          <div>EPA Method: {current.epa_method}</div>
          <div>Description: {current.method_description}</div>
          <div>Instrumentation: {current.instrumentation}</div>
          <div>Department: {current.department}</div>
          <div>Extraction Solvent: {current.extraction_solvent}</div>
        </div>
        <div className="infoBtns">
          <button id="editMethod" onClick={() => displayMode('EDIT_METHOD')}>
            Edit Method
          </button>
        </div>
      </div>
    );
  } else if (display === 'ADD_METHOD') {
    return (
      <div className="selectedInfo">
        <div className="infoList">
          <div>
            EPA Method:<input id="newEpaMethod" type="text"></input>
          </div>
          <div>
            Description: <input id="newDescription" type="text"></input>
          </div>
          <div>
            Instrumentation: <input id="newInstrumentation" type="text"></input>
          </div>
          <div>
            Department: <input id="newDepartment" type="text"></input>
          </div>
          <div>
            Extraction Solvent: <input id="newExtSolv" type="text"></input>
          </div>
        </div>
        <div className="infoBtns">
          <button
            id="saveMethod"
            onClick={() =>
              saveNewMethod({
                epa_method: document.getElementById('newEpaMethod').value,
                method_description: document.getElementById('newDescription').value,
                instrumentation: document.getElementById('newInstrumentation').value,
                department: document.getElementById('newDepartment').value,
                extraction_solvent: document.getElementById('newExtSolv').value,
              })
            }
          >
            Save
          </button>
          <button id="cancel" onClick={() => displayMode('METHOD_INFO')}>
            Cancel
          </button>
        </div>
      </div>
    );
  } else if (display === 'EDIT_METHOD') {
    return (
      <div className="selectedInfo">
        <div className="infoList">
          <div>
            EPA Method: <input id="newEpaMethod" type="text" defaultValue={current.epa_method}></input>
          </div>
          <div>
            Description: <input id="newDescription" type="text" defaultValue={current.method_description}></input>
          </div>
          <div>
            Instrumentation: <input id="newInstrumentation" type="text" defaultValue={current.instrumentation}></input>
          </div>
          <div>
            Department: <input id="newDepartment" type="text" defaultValue={current.department}></input>
          </div>
          <div>
            Extraction Solvent: <input id="newExtSolv" type="text" defaultValue={current.extraction_solvent}></input>
          </div>
        </div>
        <div className="infoBtns">
          <button
            id="saveMethod"
            onClick={() =>
              editMethod(current._id, {
                epa_method: document.getElementById('newEpaMethod').value,
                method_description: document.getElementById('newDescription').value,
                instrumentation: document.getElementById('newInstrumentation').value,
                department: document.getElementById('newDepartment').value,
                extraction_solvent: document.getElementById('newExtSolv').value,
              })
            }
          >
            Save Method
          </button>
          <button id="deleteMethod" onClick={() => deleteMethod(current._id)}>
            Delete Method
          </button>
          <button id="cancel" onClick={() => displayMode('METHOD_INFO')}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
  return <div>Fetching Methods Data</div>;
};

export default InfoContainer;
