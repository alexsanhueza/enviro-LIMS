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
    this.addMethodMode = this.addMethodMode.bind(this);
    this.saveNewMethod = this.saveNewMethod.bind(this);
  }

  addMethodMode() {
    this.setState({ display: 'ADD_METHOD' });
  }

  saveNewMethod(postData) {
    console.log(postData);
    fetch(`/methods`, {
      method: 'POST',
      body: JSON.stringify(postData),
    })
      .then((resp) => resp.json())
      .then(() => {
        console.log('New Method successful!');
        this.setState({ display: 'METHOD_INFO' });
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
          <Nav />
        </div>
        <div id="sidebar">
          <Sidebar
            methods={this.state.methods}
            current={this.state.current}
            display={this.state.display}
            addMethodMode={this.addMethodMode}
            saveNewMethod={this.saveNewMethod}
          />
        </div>
      </div>
    );
  }
}

export default MainContainer;
