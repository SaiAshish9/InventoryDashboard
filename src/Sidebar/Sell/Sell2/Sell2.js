import React from 'react';
import { Table, Row, Col, Form, Button } from 'react-bootstrap';

import Nav from '../Nav/Nav';

const Sell2 = () => {
	const options = [
		'Bill No',
		'Bill Date',
		'Customer',
		'Customer Mobile',
		'Doctor',
		'Delivery Status',
		'Discount',
		'Price',
		'',
		''
	];

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
						{options.map((i, k) => (
							<th scope="col" key={k}>
								{i}
							</th>
						))}
					</tr>
				</thead>
			</Table>
		</div>
	);
};
export default Sell2;
