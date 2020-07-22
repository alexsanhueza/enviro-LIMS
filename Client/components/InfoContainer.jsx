import React, { Component } from 'react';

const InfoContainer = ({ current, display, saveNewMethod }) => {
  if (current && display === 'METHOD_INFO') {
    return (
      <div>
        <button id="editMethod">Edit Method</button>
        <div>EPA Method: {current.epa_method}</div>
        <div>Description: {current.method_description}</div>
        <div>Instrumentation: {current.instrumentation}</div>
        <div>Department: {current.department}</div>
        <div>Extraction Solvent: {current.extraction_solvent}</div>
      </div>
    );
  } else if (display === 'ADD_METHOD') {
    return (
      <div>
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

        <button
          id="saveMethod"
          onClick={() =>
            saveNewMethod({
              epa_method: document.getElementById('newEpaMethod').value,
              description: document.getElementById('newDescription').value,
              instrumentation: document.getElementById('newInstrumentation').value,
              department: document.getElementById('newDepartment').value,
              extraction_solvent: document.getElementById('newExtSolv').value,
            })
          }
        >
          Save New Method
        </button>
      </div>
    );
  }
  return <div>Fetching Methods Data</div>;
};

export default InfoContainer;
