import React from 'react';
import { Navbar, Nav, Table, Col, Row, Form, Button } from 'react-bootstrap';

const Year = () => {
	return (
		<div className="mt-5">
			<Table className="mt-5">
				<Row style={{ margin: '0' }}>
					<Col>
						<Form.Label>From</Form.Label>
						<Form.Control className="round-input" type="date" />
					</Col>
					<Col>
						<Form.Label>To</Form.Label>
						<Form.Control className="round-input" type="date" />
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', margin: '0' }}>
					<Button size="lg" type="submit" className="round">
						Save
					</Button>
				</Row>
			</Table>
		</div>
	);
};

export default Year;
