import React from 'react';
import { Navbar, Nav, Table, Col, Row, Form, Button } from 'react-bootstrap';

const headers = [
	'Invoice No',
	'GR No',
	'Invoice Data',
	'Credit Data',
	'Payment Mode',
	'Invoice Amount',
	'Total Amount Paid + Return',
	'Balance Due',
	'Payment',
	'Hold'
];

const VendorPayment = () => {
	return (
		<div className="mt-5">
			<Table className="mt-5" style={{ width:'100%'}}>
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
				<Row style={{ justifyContent: 'center', margin: '0' }}>
				<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					Search
				</Button>
				</Row>
				<Row style={{ margin: '0' }}>
					<Table striped className="mt-5"  >
						<thead className="thead-light">
							<tr >
								{headers.map((i, k) => (
									<th scope="col">{i}</th>
								))}
							</tr>
						</thead>
					</Table>
				</Row>
			</Table>
		</div>
	);
};

export default VendorPayment;
