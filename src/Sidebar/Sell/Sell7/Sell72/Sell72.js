import React from 'react';
import { Navbar, Nav, Row, Col, Table, Form, Button } from 'react-bootstrap';

const Sell71 = () => {
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
				<Nav>
					<Nav.Link
						className="cm-link"
						style={{ marginRight: '1rem' }}
					>
						Sell
					</Nav.Link>
					<Nav.Link className="cm-link" active>
						Estimate
					</Nav.Link>
				</Nav>
			</Navbar>
			<Table className="mt-5" responsive="md" borderless>
				<thead>
					<tr>
						<th>Customer Name</th>
						<th>Product</th>
						<th>Quantity</th>
						<th>Batch</th>
						<th>Discount %</th>
						<th>Expiry</th>
						<th>MRP</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Form.Control type="text" />
						</td>
						<td>
							<Form.Control type="text" />
						</td>
						<td>
							<Form.Control type="number" />
						</td>
						<td>
							<Form.Control type="text" />
						</td>
						<td>
							<Form.Control type="number" />
						</td>
						<td>
							<Form.Control type="text" />
						</td>
						<td>
							<Form.Control type="number" />
						</td>
					</tr>
				</tbody>
			</Table>
			<Row style={{ justifyContent: 'center' }}>
				<Button size="lg" type="submit" className="round-button">
					ADD
				</Button>
			</Row>
		</div>
	);
};

export default Sell71;
