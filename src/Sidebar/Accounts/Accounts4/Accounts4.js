import React from 'react';
import { Navbar, Nav, Table, Col, Row, Form, Button } from 'react-bootstrap';
import Nav1 from '../Nav/Nav';

const headers = [
	'Invoice No',
	'GR No',
	'Invoice Data',
	'Credit Data',
	'Payment Mode',
	'Invoice Amount',
	'Total Amount Paid + Return',
	'Balance Due',
	'Payment',
	'Hold'
];

const Accounts4 = () => {
	return (
		<div className="mt-5">
			<Nav1 />

			<Table className="mt-5">
				<Row>
					<Col>
						<Form.Label>Customer Name</Form.Label>
						<Form.Control className="round-input" type="text" />
					</Col>
					<Col>
						<Form.Label>Mobile No.</Form.Label>
						<Form.Control className="round-input" type="number" />
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center' }}>
					<Button size="lg" type="submit" className="round">
						Search
					</Button>
				</Row>
				<Row>
					<Table striped className="mt-5">
						<thead className="thead-light">
							<tr>
								{headers.map((i, k) => (
									<th scope="col">{i}</th>
								))}
							</tr>
						</thead>
					</Table>
				</Row>
			</Table>
		</div>
	);
};

export default Accounts4;
