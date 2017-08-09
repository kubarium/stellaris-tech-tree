import '../styles/reset.css'
import '../styles/App.css';

import React, { Component } from 'react';

import Area from '../containers/Area'
import Tree from '../containers/Tree'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Area/>
        <Tree/>
      </div>
      );
  }
}

export default App;
