import React, { Component } from 'react';
import MainContainer from './method-components/MainContainer.jsx';
import MainReagents from './reagents-components/MainReagents.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limsMode: 'METHODS',
    };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(mode) {
    this.setState({ limsMode: mode });
  }

  render() {
    switch (this.state.limsMode) {
      case 'METHODS':
        return <MainContainer changeMode={this.changeMode} />;
      case 'REAGENTS':
        return <MainReagents changeMode={this.changeMode} />;
    }
  }
}

export default App;
