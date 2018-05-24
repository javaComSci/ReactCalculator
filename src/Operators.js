import React from 'react';
import "./Operands.css";

class Operators extends React.Component{
	render(){
		return(
			<div>
				<table id = "opTable">
					<tbody>
						<tr>
							<td>
								<OperatorButton 
									sendOperator={() => this.props.getOperator("+")}
									value = "+"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<OperatorButton 
									sendOperator={() => this.props.getOperator("-")}
									value = "-"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<OperatorButton 
									sendOperator={() => this.props.getOperator("*")}
									value = "*"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<OperatorButton 
									sendOperator={() => this.props.getOperator("/")}
									value = "/"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<OperatorButton 
									sendOperator={() => this.props.getOperator("=")}
									value = "="
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Operators;


class OperatorButton extends React.Component{
	render(){
		return(
			<div>
				<button onClick = {this.props.sendOperator}>
					{this.props.value}
				</button>
			</div>
		);
	}
}
