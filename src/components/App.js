import '../styles/App.css';

import React, { Component } from 'react';

import Tree from '../containers/Tree'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tree/>
      </div>
    );
  }
}

export default App;
