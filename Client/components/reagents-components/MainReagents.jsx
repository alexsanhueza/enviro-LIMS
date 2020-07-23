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
    this.displayMode = this.displayMode.bind(this);
    this.displayReagentInfo = this.displayReagentInfo.bind(this);
    this.addReagent = this.addReagent.bind(this);
    this.editReagent = this.editReagent.bind(this);
    this.deleteReagent = this.deleteReagent.bind(this);
  }

  displayMode(mode) {
    this.setState({ display: mode });
  }

  displayReagentInfo(id) {
    const reagents = this.state.reagents;
    this.setState({ current: reagents[id] });
  }

  addReagent(postData) {
    fetch(`/reagents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(postData),
    })
      .then((resp) => resp.json())
      .then((updatedReags) => {
        this.setState({ display: 'REAGENT_INFO', reagents: updatedReags, current: postData });
      });
  }

  editReagent(id, patchData) {
    fetch(`/reagents/edit/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(patchData),
    })
      .then((resp) => resp.json())
      .then((updatedReags) => {
        this.setState({
          reagents: updatedReags,
          current: patchData,
          display: 'REAGENT_INFO',
        });
      })
      .catch((err) => console.log(err));
  }

  deleteReagent(id) {
    fetch(`/reagents/edit/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
      .then((resp) => resp.json())
      .then((updatedReags) => {
        this.setState({
          reagents: updatedReags,
          current: updatedReags[0],
          display: 'REAGENT_INFO',
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    fetch('/reagents')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ reagents: data, current: data[0] });
      })
      .catch((err) => console.log(err));
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
            displayMode={this.displayMode}
            displayReagentInfo={this.displayReagentInfo}
            addReagent={this.addReagent}
            editReagent={this.editReagent}
            deleteReagent={this.deleteReagent}
          />
        </div>
      </div>
    );
  }
}

export default MainReagents;
