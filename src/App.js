import React, { Component } from 'react';
import './App.css';
import Operands from './Operands.js';

class App extends Component {
  constructor(){
    super();
    this.state = {};
   /* this.setState({
      currentValue: 0
    });*/
    //this.getVal= this.getVal.bind(this);
    this.getVal = this.getVal.bind(this);
  }
  
  getVal(val){
      console.log("Value recieved from Operands is " + val);
      this.setState({currentValue: val});
      //document.getElementById("Display").innerHTML = "CurrentValue: " + this.currentValue;
  }

  render() {
    return (
      <div className="App">
        <h2 id = "Display"> Current Value: {this.state.currentValue} </h2>
        <Operands updateValue = {this.getVal}/> 
      </div>
    );
  }
}

export default App;
