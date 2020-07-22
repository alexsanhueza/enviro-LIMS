import React, { Component } from 'react';

const InfoContainer = (props) => {
  console.log(props.current);
  props.current;
  if (props.current) {
    return (
      <div>
        <button id="editMethod">Edit Method</button>
        <div>EPA Method: {props.current.epa_method}</div>
        <div>Description: {props.current.method_description}</div>
        <div>Instrumentation: {props.current.instrumentation}</div>
        <div>Department: {props.current.department}</div>
        <div>Extraction Solvent: {props.current.extraction_solvent}</div>
      </div>
    );
  }
  return <div>Fetching Methods Data</div>;
};

export default InfoContainer;
