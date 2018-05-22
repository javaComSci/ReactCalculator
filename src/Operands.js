import React from 'react';
import "./Operands.css";
import NumberButton from "./NumberButton.js"

class Operands extends React.Component{

	render(){
		return (
			<div> 
				<table id = "numTable">
					<tbody> 
						<tr>
							<td> 
								<NumberButton 
									clickHandler={() => this.props.updateValue("7")}
									value = "7"
								/>
							</td>
							<td>
								<NumberButton 
									clickHandler={() => this.props.updateValue("8")}
									value = "8"
								/>
							</td>
							<td> 
								<NumberButton 
									clickHandler={() => this.props.updateValue("8")}
									value = "8"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<NumberButton 
									clickHandler={() => this.props.updateValue("4")}
									value = "4"
								/>
							</td>
							<td>
								<NumberButton 
									clickHandler={() => this.props.updateValue("5")}
									value = "5"
								/>
							</td>
							<td>
								<NumberButton 
									clickHandler={() => this.props.updateValue("6")}
									value = "6"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<NumberButton
									clickHandler={() => this.props.updateValue("1")}
									value="1"
								/>
							</td>
							<td><NumberButton 
									clickHandler={() => this.props.updateValue("2")}
									value = "2"
								/>
							</td>
							<td>
								<NumberButton 
									clickHandler={() => this.props.updateValue("3")}
									value = "3"
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}



export default Operands;