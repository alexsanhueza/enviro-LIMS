import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      methods: [],
      current: null,
      display: 'METHOD_INFO',
    };
    this.displayMode = this.displayMode.bind(this);
    this.saveNewMethod = this.saveNewMethod.bind(this);
    this.displayMethodInfo = this.displayMethodInfo.bind(this);
    this.editMethod = this.editMethod.bind(this);
    this.deleteMethod = this.deleteMethod.bind(this);
  }

  displayMode(mode) {
    console.log(mode);
    this.setState({ display: mode });
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
        console.log('New Method successful!');
        this.setState({ display: 'METHOD_INFO', methods: updatedMethods, current: postData });
      });
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
        // console.log('updatedMethods: ', updatedMethods);

        this.setState({
          methods: updatedMethods,
          current: patchData,
          display: 'METHOD_INFO',
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
        });
      });
  }

  displayMethodInfo(id) {
    const methods = this.state.methods;
    this.setState({ current: methods[id] });
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
          <Nav />
        </div>
        <div id="sidebar">
          <Sidebar
            methods={this.state.methods}
            current={this.state.current}
            display={this.state.display}
            displayMode={this.displayMode}
            saveNewMethod={this.saveNewMethod}
            displayMethodInfo={this.displayMethodInfo}
            editMethod={this.editMethod}
            deleteMethod={this.deleteMethod}
          />
        </div>
      </div>
    );
  }
}

export default MainContainer;
