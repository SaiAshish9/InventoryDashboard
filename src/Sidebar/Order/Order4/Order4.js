import React from 'react';
import { Navbar, Nav, Row, Col, Form, Button } from 'react-bootstrap';

const Order4 = () => {
	return (
		<div className="mt-5">
			<Navbar bg="dark" expand="lg" variant="dark" className="mt-5">
				<Nav className="fill">
					<Nav.Link href="#">Order</Nav.Link>
					<Nav.Link href="#">List</Nav.Link>
					<Nav.Link href="#" active>
						Missed Sales Order
					</Nav.Link>
					<Nav.Link href="#">Settings</Nav.Link>
				</Nav>
			</Navbar>
			<Row className="mt-5">
				<Col lg="5">
					<Form.Label>Custom Days</Form.Label>
					<Form.Control type="text" />
				</Col>
				<Col>
					<Button className="round-button">Save</Button>
				</Col>
			</Row>
		</div>
	);
};

export default Order4;
