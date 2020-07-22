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
          <label>EPA Method: </label>
          <input id="newEpaMethod" type="text"></input>
          <br />

          <label>Description: </label>
          <input id="newDescription" type="text"></input>
          <br />

          <label>Instrumentation: </label>
          <input id="newInstrumentation" type="text"></input>
          <br />

          <label>Department: </label>
          <input id="newDepartment" type="text"></input>
          <br />

          <label>Extraction Solvent: </label>
          <input id="newExtSolv" type="text"></input>
          <br />
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
          <label>EPA Method: </label>
          <input id="newEpaMethod" type="text" defaultValue={current.epa_method}></input>
          <br />

          <label>Description: </label>
          <input id="newDescription" type="text" defaultValue={current.method_description}></input>
          <br />

          <label>Instrumentation: </label>
          <input id="newInstrumentation" type="text" defaultValue={current.instrumentation}></input>
          <br />

          <label>Department: </label>
          <input id="newDepartment" type="text" defaultValue={current.department}></input>
          <br />

          <label>Extraction Solvent: </label>
          <input id="newExtSolv" type="text" defaultValue={current.extraction_solvent}></input>
          <br />
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
            Save {current.epa_method}
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
