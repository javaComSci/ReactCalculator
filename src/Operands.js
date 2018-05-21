import React from 'react';
import "./Operands.css";

class Operands extends React.Component{
	val(valu){
		console.log(valu);
		
	}
	render(){
		return (
			<div> 
				<table>
					<tbody> 
						<tr>
							<td> 
								<button onClick = {this.val.bind(this,"7")}> 7  
								</button> 
							</td>
							<td>
								<button onClick = {this.val.bind(this,"8")}> 8  
								</button> 
							</td>
							<td> 
								<button onClick = {this.val.bind(this,"9")}> 9  
								</button> 
							</td>
						</tr>
						<tr>
							<td>
								<button onClick = {this.val.bind(this,"4")}> 4  
								</button> 
							</td>
							<td>
								<button onClick = {this.val.bind(this,"5")}> 5  
								</button> 
							</td>
							<td>
								<button onClick = {this.val.bind(this,"6")}> 6  
								</button> 
							</td>
						</tr>
						<tr>
							<td>
								<button onClick = {this.val.bind(this,"1")}> 1  
								</button> 
							</td>
							<td>
								<button onClick = {this.val.bind(this,"2")}> 2  
								</button> 
							</td>
							<td>
								<button onClick = {this.val.bind(this,"3")}> 3  
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