import React from 'react';
import { Table, Row, Col, Form, Button } from 'react-bootstrap';
import Nav from '../Nav/Nav';

const Sell3 = () => {
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
						<th scope="col">Return No</th>
						<th scope="col">Return Charges</th>
						<th scope="col">Price</th>
						<th scope="col">Returned By</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
			</Table>
		</div>
	);
};
export default Sell3;
