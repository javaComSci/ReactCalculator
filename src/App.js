import React, { Component } from 'react';
import './App.css';
import Operands from './Operands.js';
import Operators from './Operators.js';

class App extends Component {
 constructor(){
    super();
    this.state = {
      operandStack: [],
      operatorStack: []
    };
   /* this.setState({
      currentValue: 0
    });*/
    //this.getVal= this.getVal.bind(this);
    
    this.getVal = this.getVal.bind(this);
    this.performOp = this.performOp.bind(this);
  }
  
  getVal(val){
      console.log("Value recieved from Operands is " + val);
      var tempOperandStack = this.state.operandStack.concat(val);
      var tempOperatorStack = this.state.operatorStack;
      if(this.state.tempOperandStack.length >= 2 && this.state.operatorStack.length >= 1){
        var val = 0;
        var op2 = tempOperandStack.pop();
        var op1 = tempOperandStack.pop();
        var operator = tempOperatorStack.pop();
        switch(operator){
            case "+": val = op1 + op2;
                      break;
            case "-": val = op1 - op2;
                      break;
            case "*": val = op1 * op2;
                      break;
            case "/": val = op1 / op2;
                      break;
            default: break;
        }
      }
      this.setState({
        currentValue: val,
        operandStack: tempOperandStack
      });
      //document.getElementById("Display").innerHTML = "CurrentValue: " + this.currentValue;
  }

  performOp(operator){
    console.log("Operator recieved from Operators is " + operator);
    if(this.state.operandStack.length >= 2){
        var val = 0;
        var tempStack = this.state.operandStack;
        var op2 = tempStack.pop();
        var op1 = tempStack.pop();
        switch(operator){
            case "+": val = op1 + op2;
                      break;
            case "-": val = op1 - op2;
                      break;
            case "*": val = op1 * op2;
                      break;
            case "/": val = op1 / op2;
                      break;
            default: break;
        }
        this.setState({
            currentValue: val,
            operandStack: tempStack
        });
    }
  }

  render() {
    return (
      <div className="App">
        <h2 id = "Display"> Current Value: {this.state.currentValue} </h2>
        <Operands updateValue = {this.getVal}/> 
        <Operators getOperator = {this.performOp}/>
      </div>
    );
  }
}

export default App;
