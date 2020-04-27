import React from 'react';
import { Navbar, Nav, Table, Col, Row, Form, Button } from 'react-bootstrap';

const headers = [
	'Customer Name',
	'Mobile No',
	'Due',
	'Balance',
	'Details'
];

const CustomerReceipt = () => {
	return (
		<div className="mt-5" style={{ overflow: 'hidden' }}>
			<Table className="mt-5" responsive="md">
			<Row style={{ margin: '0' }}>
				<Col style={{textAlign: 'center'}} >
					<Form.Label style={{ marginLeft: -40,fontSize:13,color:'#999',fontWeight:'bold' }}>
						Customer Name
					</Form.Label><br/>
					<input className="round-input" style={{outline:'none',boxShadow:'none'}} />
					</Col> 

					<Col style={{textAlign: 'center'}} >
					<Form.Label style={{ marginLeft: -60,fontSize:13,color:'#999',fontWeight:'bold' }}>
						Mobile No.
					</Form.Label><br/>
					<input className="round-input" style={{outline:'none',boxShadow:'none'}} />
					</Col>

				</Row>
				<Row style={{ justifyContent: 'center' }}>
				<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					Search
				</Button>
				</Row>
				<Row style={{ margin: '0' }}>
					<Table className="mt-5">
						<thead className="thead-light">
							<tr>
								{headers.map((i, k) => (
									<th key={k} scope="col">
										{i}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{[
								...Array(7).keys()
							].map((i, k) => (
								<tr key={k}>
									<td
										style={{
											fontSize    : 12,
											color       : '#999',
											borderRight : '0.1px solid #999',
											fontWeight  : 'bold'
										}}
									>
										ARC
									</td>
									<td
										style={{
											fontSize    : 12,
											color       : '#999',
											borderRight : '0.5px solid #999',
											fontWeight  : 'bold'
										}}
									>
										9443050047
									</td>
									<td
										style={{
											fontSize    : 12,
											color       : '#999',
											borderRight : '0.5px solid #999',
											fontWeight  : 'bold'
										}}
									>
										150
									</td>
									<td
										style={{
											fontSize    : 12,
											color       : '#999',
											borderRight : '0.5px solid #999',
											fontWeight  : 'bold'
										}}
									>
										500
									</td>
									<td
										style={{
											fontSize    : 12,
											color       : '#999',
											borderRight : '0.5px solid #999',
											fontWeight  : 'bold'
										}}
									>
										-
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Row>
			</Table>
		</div>
	);
};

export default CustomerReceipt;
