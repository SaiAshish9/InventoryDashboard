import React from 'react';
import { Navbar, Nav, Row, Col, Table, Form, Button } from 'react-bootstrap';

const Order2 = () => {
	return (
		<div>
			<Navbar bg="dark" expand="lg" variant="dark" className="mt-5">
				<Nav className="fill">
					<Nav.Link href="#">Order</Nav.Link>
					<Nav.Link href="#" active>
						List
					</Nav.Link>
					<Nav.Link href="#">Missed Sales Order</Nav.Link>
					<Nav.Link href="#">Settings</Nav.Link>
				</Nav>
			</Navbar>

			<br />

			<Row>
				<Col>
					<Form.Label>Vendor Name</Form.Label>
					<Form.Control type="text" />
				</Col>
				<Col>
					<Form.Label>Mobile No</Form.Label>
					<Form.Control type="text" />
				</Col>
				<Col>
					<Form.Label>Email ID</Form.Label>
					<Form.Control type="email" />
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Label>FROM</Form.Label>
					<Form.Control type="DATE" />
				</Col>
				<Col>
					<Form.Label>TO</Form.Label>
					<Form.Control type="date" />
				</Col>
				<Col>
					<Form.Label>Order No</Form.Label>
					<Form.Control type="number" />
				</Col>
			</Row>

			<Row style={{ justifyContent: 'center' }}>
				<Button size="lg" type="submit" className="round-button">
					Search
				</Button>
			</Row>

			<Row className="mt-5">
				<Table borderless>
					<thead className="thead-light">
						<tr>
							<th scope="col">Order No</th>
							<th scope="col">Order Date</th>
							<th scope="col">Vendor Name</th>
							<th scope="col">Mobile</th>
							<th scope="col">Email</th>
							<th scope="col" />
							<th scope="col" />
						</tr>
					</thead>
					<tbody />
				</Table>
			</Row>
		</div>
	);
};

export default Order2;
