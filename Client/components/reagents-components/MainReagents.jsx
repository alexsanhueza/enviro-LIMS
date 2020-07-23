import React, { Component } from 'react';
import Nav from '../Nav.jsx';
import ReagentsSidebar from './ReagentsSidebar.jsx';

class MainReagents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reagents: [],
      current: null,
      display: 'REAGENT_INFO',
    };
    this.displayReagentInfo = this.displayReagentInfo.bind(this);
  }

  displayReagentInfo(id) {
    const reagents = this.state.reagents;
    this.setState({ current: reagents[id] });
  }

  componentDidMount() {
    fetch('/reagents')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ reagents: data, current: data[0] });
      });
  }

  render() {
    return (
      <div id="main">
        <div id="nav">
          <div>Select Reagent</div>
          <Nav changeMode={this.props.changeMode} />
        </div>
        <div id="sidebar">
          <ReagentsSidebar
            reagents={this.state.reagents}
            current={this.state.current}
            display={this.state.display}
            displayReagentInfo={this.displayReagentInfo}
          />
        </div>
      </div>
    );
  }
}

export default MainReagents;
