import React from 'react';
import { Table, Form, Col } from 'react-bootstrap';

const headers = [
	'Price/Strip',
	'MRP/Strip',
	'Quantity in Units'
];

const PriceTable = () => {
	return (
		<Table className="mt-5">
			<thead className="thead-light">
				<tr>
					{headers.map((i, k) => (
						<th scope="col">
							<Col lg="6">{i}</Col>
						</th>
					))}
					<th scope="col">
						<Form.Group>
							<Form.Check
								type="checkbox"
								label="Disable Price/Strip"
							/>
						</Form.Group>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					{headers.map(() => (
						<td>
							<Col lg="10">
							<Form.Control type="text" style={{boxShadow:'none'}}/>
							</Col>
						</td>
					))}
				</tr>
			</tbody>
		</Table>
	);
};

export default PriceTable;
