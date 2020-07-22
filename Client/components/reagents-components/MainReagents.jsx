import React, { Component } from 'react';
import Nav from '../Nav.jsx';
import ReagentsSidebar from './ReagentsSidebar.jsx';

class MainReagents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="main">
        <div id="nav">
          <div>Select Reagent</div>
          <Nav changeMode={this.props.changeMode} />
        </div>
        <div id="sidebar">
          <ReagentsSidebar />
        </div>
      </div>
    );
  }
}

export default MainReagents;
