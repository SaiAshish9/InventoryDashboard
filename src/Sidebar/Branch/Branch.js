import React from 'react';
import BranchTable from './components/BranchTable/BranchTable';
import { Form, Col, Button, Row } from 'react-bootstrap';

const Branch = () => {
	return (
		<div className="mt-5">
			<Row style={{ margin: '0' }}>
				<Col>
					<Form.Label>Branch Name</Form.Label>
					<Form.Control className="round-input" type="text" />
				</Col>
				<Col>
					<Form.Label>Mobile</Form.Label>
					<Form.Control className="round-input" type="text" />
				</Col>
			</Row>
			<div style={{ textAlign: 'center' }}>
				<Button size="lg" className="round">
					Search
				</Button>
			</div>
			<BranchTable />
		</div>
	);
};

export default Branch;
