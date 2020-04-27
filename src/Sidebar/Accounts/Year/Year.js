import React from 'react';
import { Navbar, Nav, Table, Col, Row, Form, Button } from 'react-bootstrap';

const Year = () => {
	return (
		<div className="mt-5">
			<Table className="mt-5">
				<Row style={{ margin: '0' }}>
					<Col>
					<Form.Label style={{ marginLeft: 20,fontSize:13,color:'#999',fontWeight:'bold' }}>
							From</Form.Label>
						<Form.Control style={{boxShadow: 'none'}} className="round-input" type="date" />
					</Col>
					<Col>
					<Form.Label style={{ marginLeft: 20,fontSize:13,color:'#999',fontWeight:'bold' }}>
							To</Form.Label>
							<Form.Control style={{boxShadow: 'none'}} className="round-input" type="date" />
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', margin: '0' }}>
				<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					Save
				</Button>
				</Row>
			</Table>
		</div>
	);
};

export default Year;
