import React from 'react';
import { Table, Col, Form, Button } from 'react-bootstrap';
import Nav from '../Nav/Nav';

const headers = [
	'Product Name',
	'Batch',
	'Quantity',
	'Expiry',
	'GST %',
	'Units/Strip',
	'Price/Strip',
	'MRP/Strip',
	'Consumption'
];

const Inventory5 = () => {
	return (
		<div>
			<Nav />
			<Table className="mt-5">
				<thead className="thead-light">
					{headers.map((i) => <th>{i}</th>)}
				</thead>
				<tbody>
					<tr>
						{headers.map(() => (
							<td>
								<Col>
									<Form.Control type="text" />
								</Col>
							</td>
						))}
					</tr>
				</tbody>
			</Table>
			<Button size="lg" className="round">
				+
			</Button>
		</div>
	);
};

export default Inventory5;
