import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav.js';
import HogList from './HogList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogList />
      </div>
    )
  }
}

export default App;
