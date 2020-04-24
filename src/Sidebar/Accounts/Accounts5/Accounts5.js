import React from 'react';
import { Navbar, Nav, Table, Col, Row, Form, Button } from 'react-bootstrap';
import Nav1 from '../Nav/Nav';

const Accounts5 = () => {
	return (
		<div className="mt-5">
			<Nav1 />

			<Table className="mt-5">
				<Row>
					<Col>
						<Form.Label>Customer Name</Form.Label>
						<Form.Control type="text" />
					</Col>
					<Col>
						<Form.Label>Mobile No.</Form.Label>
						<Form.Control type="number" />
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center' }}>
					<Button size="lg" type="submit" className="round-button">
						Search
					</Button>
				</Row>
				<Row>
					<Table striped className="mt-5">
						<thead className="thead-light">
							<tr>
								<th scope="col">Invoice No</th>
								<th scope="col">GR No</th>
								<th scope="col">Invoice Date</th>
								<th scope="col">Invoice Amount</th>
								<th scope="col">Balance Amount</th>
							</tr>
						</thead>
					</Table>
				</Row>
			</Table>
		</div>
	);
};

export default Accounts5;