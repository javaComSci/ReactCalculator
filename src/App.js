import React, { Component } from 'react';
import './App.css';
import Operands from './Operands.js';

class App extends Component {
  constuctor(){
    //super();
    this.setState({
      currentValue: 0
    });

  }
  
  getVal(val){
      console.log("Value recieved from Operands is " + val);
      this.setState({currentValue: val});
      document.getElementById("Display").innerHTML = "CurrentValue: " + this.currentValue;
  }

  render() {
    return (
      <div className="App">
        <h2 id = "Display"> Current Value: {this.currentValue} </h2>
        <Operands currVal = {this.getVal}/> 
      </div>
    );
  }
}

export default App;
