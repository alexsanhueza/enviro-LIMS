import React, { Component } from 'react';
import Nav from './Nav.jsx';
import Sidebar from './Sidebar.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      methods: [],
      current: null,
    };
  }

  componentDidMount() {
    fetch('/methods')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
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
          <Sidebar methods={this.state.methods} current={this.state.current} />
        </div>
      </div>
    );
  }
}

export default MainContainer;
