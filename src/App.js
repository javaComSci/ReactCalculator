import React, { Component } from 'react';
import './App.css';
import Operands from './Operands.js';

class App extends Component {



  render() {
    return (
      <div className="App">
        <h2 id = "Display"> Display </h2> 
        <Operands/> 
      </div>
    );
  }
}

export default App;
