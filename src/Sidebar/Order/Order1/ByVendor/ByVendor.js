import React from 'react';
import { Navbar, Nav, Row, Col, Table, Form, Button } from 'react-bootstrap';

const ByVendor = () => {
	return (
		<div>
			<Navbar bg="dark" expand="lg" variant="dark" className="mt-5">
				<Nav className="fill">
					<Nav.Link href="#" active>
						Order
					</Nav.Link>
					<Nav.Link href="#">List</Nav.Link>
					<Nav.Link href="#">Missed Sales Order</Nav.Link>
					<Nav.Link href="#">Settings</Nav.Link>
				</Nav>
			</Navbar>
			<br />
			<Navbar className="mt-5">
				<Nav className="fill">
					<Nav.Link className="cm-link" active>
						By Vendor
					</Nav.Link>
					<Nav.Link className="cm-link">Reorder</Nav.Link>
					<Nav.Link className="cm-link">By Transaction</Nav.Link>
				</Nav>
			</Navbar>
			<Row className="mt-5">
				<Col>
					<Form.Label>Vendor</Form.Label>
					<Form.Control type="text" />
				</Col>
				<Col>
					<Form.Label>Product</Form.Label>
					<Form.Control type="text" />
				</Col>
				<Col>
					<Form.Label>GST%</Form.Label>
					<Form.Control type="text" />
				</Col>
			</Row>
			<Row style={{ justifyContent: 'center' }}>
				<Button size="lg" type="submit" className="round-button">
					ADD
				</Button>
			</Row>
		</div>
	);
};

export default ByVendor;
