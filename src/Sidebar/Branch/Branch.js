import React from 'react';
import BranchTable from './components/BranchTable/BranchTable';
import { Form, Col, Button } from 'react-bootstrap';

const Branch = () => {
	return (
		<div className="mt-5">
			<Form.Row>
				<Col>
					<Form.Label>Branch Name</Form.Label>
					<Form.Control type="text" />
				</Col>
				<Col>
					<Form.Label>Mobile</Form.Label>
					<Form.Control type="text" />
				</Col>
			</Form.Row>
			<div style={{ textAlign: 'center' }}>
				<Button size="lg" className="round-button">
					Search
				</Button>
			</div>
			<BranchTable />
		</div>
	);
};

export default Branch;
