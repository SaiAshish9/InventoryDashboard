import React from 'react';
import { Table, Row, Col, Form, Button } from 'react-bootstrap';

import Nav from '../Nav/Nav';

const Sell4 = () => {
	return (
		<div className="mt-5">
			<Nav />
			<Row className="mt-5">
				<Col>
					<Form.Control type="text" />
				</Col>
				<Col>
					<Button style={{ margin: '0' }} className="round-button">
						Search
					</Button>
				</Col>
			</Row>

			<Table responsive="md" className="mt-5">
				<thead className="thead-light">
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Invoice No</th>
						<th scope="col">Cancel No</th>
						<th scope="col">Cancelled Date</th>
						<th scope="col">Mobile</th>
						<th scope="col">Email</th>
						<th scope="col">Cancelled By</th>
					</tr>
				</thead>
			</Table>
		</div>
	);
};
export default Sell4;
