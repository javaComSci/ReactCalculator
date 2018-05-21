import React from 'react';
import "./Operands.css";

class Operands extends React.Component{
	val(valu,func){
		console.log(valu);
		console.log(func);
		this.props.currVal(valu);
	}
	render(){
		return (
			<div> 
				<table>
					<tbody> 
						<tr>
							<td> 
								<button onClick = {this.val.bind(this,"7", this.props.currVal)} > 7  
								</button> 
							</td>
							<td>
								<button onClick = {this.val.bind(this,"8", this.props.currVal)}> 8  
								</button> 
							</td>
							<td> 
								<button onClick = {this.val.bind(this,"9", this.props.currVal)}> 9  
								</button> 
							</td>
						</tr>
						<tr>
							<td>
								<button onClick = {this.val.bind(this,"4", this.props.currVal)}> 4  
								</button> 
							</td>
							<td>
								<button onClick = {this.val.bind(this,"5", this.props.currVal)}> 5  
								</button> 
							</td>
							<td>
								<button onClick = {this.val.bind(this,"6", this.props.currVal)}> 6  
								</button> 
							</td>
						</tr>
						<tr>
							<td>
								<button onClick = {this.val.bind(this,"1", this.props.currVal)}> 1  
								</button> 
							</td>
							<td>
								<button onClick = {this.val.bind(this,"2", this.props.currVal)}> 2  
								</button> 
							</td>
							<td>
								<button onClick = {this.val.bind(this,"3", this.props.currVal)}> 3  
								</button> 
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Operands;