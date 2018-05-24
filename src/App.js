import React, { Component } from 'react';
import './App.css';
import Operands from './Operands.js';
import Operators from './Operators.js';

class App extends Component {
 constructor(){
    super();
    this.state = {
      allValues: "",
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
      this.setState({
        buffer: this.state.buffer + val,
        currentValue: this.state.buffer + val,
        allValues: this.state.allValues + " " + val
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
        operatorStack: tempOperatorStack,
        allValues: "=" == operator ? operator : this.state.allValues + " " + operator
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
      tempOperatorStack.shift();
      console.log("TEMP OPERATOR STACK IS " + tempOperatorStack);
      console.log("TEMP OPERAND STACK IS " + tempOperandStack);
      this.setState({
        buffer: "",
        operandStack: tempOperandStack,
        operatorStack: [],
        currentValue: tempOperandStack[0],
        allValues: ""
      });
    }

  }

  clearVal(){

  }

  render() {
    return (
      <div className="App">
        <h2 id = "Display"> Current Value: {this.state.currentValue} </h2>
        <p> {this.state.allValues} </p>
        <Operands updateValue = {this.getVal}/> 
        <Operators getOperator = {this.performOp}/>
        <ClearButton clear = {this.clearVal}/>
      </div>
    );
  }
}

export default App;
