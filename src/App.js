import React, { Component } from 'react';
import './App.css';
import Operands from './Operands.js';
import Operators from './Operators.js';

class App extends Component {
 constructor(){
    super();
    this.state = {
      operandStack: [],
      operatorStack: [],
      buffer: "",
      currentValue: 0
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
      var tempBuffer = this.state.buffer + val;
      this.setState({
        buffer: tempBuffer,
        currentValue: tempBuffer
      });
      console.log("Buffer has " + this.state.buffer);
  }

  performOp(operator){
    console.log("Operator recieved from Operators is " + operator);

    var tempOperandStack = this.state.operandStack.concat(parseInt(this.state.buffer));
    var tempOperatorStack = this.state.operatorStack.concat(operator);
    this.setState({
        buffer: "",
        operandStack: tempOperandStack,
        operatorStack: tempOperatorStack
      });
      if(operator != "="){
      return;
    }
    var operatorStackLen = tempOperatorStack.length;
    var operandStackLen = tempOperandStack.length;
    console.log("Length of operator stack is " + operatorStackLen);
    console.log("Lenth of operand stack is " + operandStackLen);
    console.log("Operand stack holds " + tempOperandStack);
    console.log("Operator stack holds " + tempOperatorStack);
    if(operatorStackLen == operandStackLen){
      while(tempOperandStack.length > 1){
        var op1 = tempOperandStack.shift();
        var op2 = tempOperandStack.shift();
        var oper = tempOperatorStack.shift();
        var val = 0;
        switch(oper){
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
        tempOperandStack.unshift(val);
        console.log("Value added to the beginning is " + tempOperandStack[0]);
      }
      this.setState({
        buffer: "",
        operandStack: tempOperandStack,
        operatorStack: [],
        currentValue: tempOperandStack[0]
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
