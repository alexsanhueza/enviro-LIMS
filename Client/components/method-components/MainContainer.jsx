import React, { Component } from 'react';
import Nav from '../Nav.jsx';
import Sidebar from './Sidebar.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      methods: [],
      current: null,
      display: 'METHOD_INFO',
      reags: null,
      allReags: null,
      toAdd: null,
    };
    this.displayMode = this.displayMode.bind(this);
    this.saveNewMethod = this.saveNewMethod.bind(this);
    this.displayMethodInfo = this.displayMethodInfo.bind(this);
    this.editMethod = this.editMethod.bind(this);
    this.deleteMethod = this.deleteMethod.bind(this);
    this.getReagents = this.getReagents.bind(this);
    this.getAllReagents = this.getAllReagents.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  displayMode(mode) {
    this.setState({ display: mode, reags: null });
  }
  saveNewMethod(postData) {
    fetch(`/methods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(postData),
    })
      .then((resp) => resp.json())
      .then((updatedMethods) => {
        this.setState({ display: 'METHOD_INFO', methods: updatedMethods, current: postData, reags: null });
      })
      .catch((err) => console.log(err));
  }

  editMethod(id, patchData) {
    fetch(`/methods/edit/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(patchData),
    })
      .then((resp) => resp.json())
      .then((updatedMethods) => {
        this.setState({
          methods: updatedMethods,
          current: patchData,
          display: 'METHOD_INFO',
          reags: null,
        });
      })
      .catch((err) => console.log(err));
  }

  deleteMethod(id) {
    fetch(`/methods/edit/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
      },
    })
      .then((res) => res.json())
      .then((updatedMethods) => {
        this.setState({
          methods: updatedMethods,
          current: updatedMethods[0],
          display: 'METHOD_INFO',
          reags: null,
        });
      });
  }

  displayMethodInfo(id) {
    const methods = this.state.methods;
    this.setState({ display: 'METHOD_INFO', current: methods[id], reags: null });
  }

  getReagents(id) {
    fetch(`/methods/reagents/${id}`)
      .then((resp) => resp.json())
      .then((reags) => this.setState({ reags: reags }));
  }

  getAllReagents() {
    fetch('/reagents')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.setState({
          display: 'ADD_REAGENTS',
          allReags: data,
        });
      })
      .catch((err) => console.log(err));
  }
  handleChange(e) {
    this.setState({
      toAdd: e.target.value,
    });
  }

  componentDidMount() {
    fetch('/methods')
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ methods: data, current: data[0] });
      });
  }

  render() {
    return (
      <div id="main">
        <div id="nav">
          <div>Select Method</div>
          <Nav changeMode={this.props.changeMode} />
        </div>
        <div id="sidebar">
          <Sidebar
            methods={this.state.methods}
            current={this.state.current}
            display={this.state.display}
            reags={this.state.reags}
            allReags={this.state.allReags}
            displayMode={this.displayMode}
            saveNewMethod={this.saveNewMethod}
            displayMethodInfo={this.displayMethodInfo}
            editMethod={this.editMethod}
            deleteMethod={this.deleteMethod}
            getReagents={this.getReagents}
            getAllReagents={this.getAllReagents}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default MainContainer;
