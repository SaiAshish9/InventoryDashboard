import React from 'react';
import { Row, Col, Form, Button, Table } from 'react-bootstrap';

const buttonsLeft = [
	{
		btn1 : 'Admin',
		btn2 : 'Sell'
	},
	{
		btn1 : 'Sell Edit',
		btn2 : 'Cancel'
	},
	{
		btn1 : 'Estimate',
		btn2 : 'Buy'
	},
	{
		btn1 : 'Leads',
		btn2 : 'Order'
	},
	{
		btn1 : 'Profile',
		btn2 : 'Inventory'
	},
	{
		btn1 : 'Reports',
		btn2 : 'Branch'
	},
	{
		btn1 : 'User',
		btn2 : 'Edit MRP'
	},
	{
		btn1 : 'Purchase',
		btn2 : 'Cancel'
	},
	{
		btn1 : 'Vendor',
		btn2 : 'Setting'
	}
];

const buttonsRight = [
	{
		btn1 : 'Leads',
		btn2 : 'Order'
	},
	{
		btn1 : 'Profile',
		btn2 : 'Inventory'
	},
	{
		btn1 : 'Reports',
		btn2 : 'Branch'
	}
];

const Users = () => {
	return (
		<div
			style={{ padding: '1rem', backgroundColor: '#fff' }}
			className="mt-5"
		>
			<h4
				style={{
					textAlign       : 'center',
					backgroundColor : '#999',
					color           : '#fff',
					height          : '2rem',
					margin          : '-1rem'
				}}
			>
				ADD USER
			</h4>
			<Row className="mt-5">
			<Col style={{marginLeft:30}}>
					<Form.Label style={{ marginLeft: 30,fontSize:13,color:'#999',fontWeight:'bold' }}>
						Name
					</Form.Label><br/>
			<input className="round-input" style={{outline:'none',boxShadow:'none'}} />
				</Col>
				<Col style={{marginLeft:30}}>
					<Form.Label style={{ marginLeft: 30,fontSize:13,color:'#999',fontWeight:'bold' }}>
						Mobile No.
						</Form.Label><br/>
			<input className="round-input" style={{outline:'none',boxShadow:'none'}} />
				</Col>
				<Col style={{marginLeft:30}}>
					<Form.Label style={{ marginLeft: 30,fontSize:13,color:'#999',fontWeight:'bold' }}>
						ID
						</Form.Label><br/>
			<input className="round-input" style={{outline:'none',boxShadow:'none'}} />
				</Col>
				<Col lg="2">
				<Button  style={{fontSize:20, boxShadow: 'none',borderRadius:'50%',fontWeight:'bolder' ,backgroundColor : '#00a5e3'}}>
+
						
					</Button>
				</Col>
			</Row>
			<Row className="mt-5" style={{ justifyContent: 'center' }}>
				<Col lg="4" style={{ marginBottom: '1rem' }}>
					<h5>SET ACCESS PERMISSION</h5>

					{buttonsLeft.map((i, k) => (
						<Row
							style={{ justifyContent: 'center', width: '17rem' }}
						>
							<Col style={{ padding: '0' }}>
							<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>

									{i.btn1}
								</Button>
							</Col>
							<Col style={{ padding: '0' }}>
							<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>

									{i.btn2}
								</Button>
							</Col>
						</Row>
					))}
				</Col>
				<Col lg="2" />
				<Col lg="4">
					<h5 style={{ textAlign: 'center' }}>USER</h5>
					<Table
						className="mt-5"
						responsive="md"
						style={{ margin: '0' }}
					>
						<thead className="thead-dark">
							<tr>
								<th
									scope="col"
									style={{
										fontSize        : 12,
										backgroundColor : '#333',
										color           : 'white',
										cursor          : 'pointer',
										borderRight     : '0.5px solid #999'
									}}
								>
									-
								</th>
								<th
									scope="col"
									style={{
										fontSize        : 12,
										backgroundColor : '#333',
										color           : 'white',
										cursor          : 'pointer',
										borderRight     : '0.5px solid #999'
									}}
								>
									User Name
								</th>
								<th
									scope="col"
									style={{
										fontSize        : 12,
										backgroundColor : '#333',
										color           : 'white',
										cursor          : 'pointer',
										borderRight     : '0.5px solid #999'
									}}
								>
									Mobile
								</th>
								<th
									scope="col"
									style={{
										fontSize        : 12,
										backgroundColor : '#333',
										color           : 'white',
										cursor          : 'pointer',
										borderRight     : '0.5px solid #999'
									}}
								>
									Email
								</th>
							</tr>
						</thead>
						<p
							style={{
								backgroundColor : '5px solid #fff',
								margin          : '0',
								height          : 5
							}}
						/>
						<tbody style={{ borderTop: '10px solid #eee' }}>
							<tr
								style={{
									backgroundColor : '#fff',
									marginTop       : '0.5rem',
									borderTop       : '5px solid #eee'
								}}
							>
								<td />
								<td>Vivek</td>
								<td>1234567890</td>
								<td />
							</tr>
						</tbody>
					</Table>
					<Table responsive="md" style={{ backgroundColor: '#eee',height:'40vh' }}>
						{buttonsRight.map((i) => (
							<Row
								style={{
									width  : '17rem',
									margin : 'auto'
								}}
							>
								<Col style={{ padding: '0' }}>
								<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>

										{i.btn1}
									</Button>
								</Col>
								<Col style={{ padding: '0' }}>
								<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>

										{i.btn2}
									</Button>
								</Col>
							</Row>
						))}
					</Table>
				</Col>
			</Row>
		</div>
	);
};

export default Users;
