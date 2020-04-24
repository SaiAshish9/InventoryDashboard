import React from 'react';
import { Navbar, Nav, Row, Col, Table, Form, Button } from 'react-bootstrap';

const Order3 = () => {
	return (
		<div>
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

			<br />
			<Row>
				<Col lg="5">
					<Form.Label>Search</Form.Label>
					<Form.Control type="text" />
				</Col>
				<Col>
					<Button size="lg" type="submit" className="round-button">
						Search
					</Button>
				</Col>
			</Row>
			<Row className="mt-5">
				<Table responsive="md">
					<thead className="thead-light">
						<tr>
							<th scope="col">S.No</th>
							<th scope="col">Product</th>
							<th scope="col">Vendor</th>
							<th scope="col">S.No</th>
							<th scope="col">Quantity</th>
							<th scope="col">Price</th>
							<th scope="col">Ordered Date</th>
							<th scope="col" />
						</tr>
					</thead>
				</Table>
			</Row>
		</div>
	);
};

export default Order3;
