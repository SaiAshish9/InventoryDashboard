import React from 'react';
import { Navbar, Nav, Table, Col, Row, Form, Button } from 'react-bootstrap';
import Nav1 from '../Nav/Nav';

const Accounts6 = () => {
	return (
		<div className="mt-5">
			<Nav1 />

			<Table className="mt-5">
				<Row>
					<Col>
						<Form.Label>From</Form.Label>
						<Form.Control className="round-input" type="date" />
					</Col>
					<Col>
						<Form.Label>To</Form.Label>
						<Form.Control className="round-input" type="date" />
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center' }}>
					<Button size="lg" type="submit" className="round">
						Save
					</Button>
				</Row>
			</Table>
		</div>
	);
};

export default Accounts6;
