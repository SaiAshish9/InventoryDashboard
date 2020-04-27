import React from 'react';
import BranchTable from './components/BranchTable/BranchTable';
import { Form, Col, Button, Row } from 'react-bootstrap';

const Branch = () => {
	return (
		<div className="mt-5">
			<Row style={{ margin: '0' }}>
			<Col style={{textAlign: 'center'}} >
					<Form.Label style={{ marginLeft: -60,fontSize:13,color:'#999',fontWeight:'bold' }}>
						Branch Name
					</Form.Label><br/>
					<input className="round-input" style={{outline:'none',boxShadow:'none'}} />
					</Col>
					<Col style={{textAlign: 'center'}} >
					<Form.Label style={{ marginLeft: -100,fontSize:13,color:'#999',fontWeight:'bold' }}>
						Mobile
					</Form.Label><br/>
					<input className="round-input" style={{outline:'none',boxShadow:'none'}} />
					</Col>
			</Row>
			<div style={{ textAlign: 'center' }}>
			<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					Search
				</Button>
			</div>
			<BranchTable />
		</div>
	);
};

export default Branch;
