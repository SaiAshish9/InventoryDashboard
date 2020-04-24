import React from 'react';
import { Table, Col, Form, Button } from 'react-bootstrap';
import Nav from '../Nav/Nav';

const Inventory5 = () => {
	return (
		<div>
			<Nav />
			<Table>
				<thead>
					<tr>
						<th scope="col">Product Name</th>
						<th scope="col">Batch</th>
						<th scope="col">Quantity</th>
						<th scope="col">Expiry</th>
						<th scope="col">GST%</th>
						<th scope="col">Units/Strip</th>
						<th scope="col">Price/Strip</th>
						<th scope="col">MRP/Strip</th>
						<th scope="col">Consumption</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Col>
								<Form.Control type="text" />
							</Col>
						</td>
						<td>
							<Col>
								<Form.Control type="text" />
							</Col>
						</td>
						<td>
							<Col>
								<Form.Control type="text" />
							</Col>
						</td>
						<td>
							<Col>
								<Form.Control type="text" />
							</Col>
						</td>
						<td>
							<Col>
								<Form.Control type="text" />
							</Col>
						</td>
						<td>
							<Col>
								<Form.Control type="text" />
							</Col>
						</td>
						<td>
							<Col>
								<Form.Control type="text" />
							</Col>
						</td>
						<td>
							<Col>
								<Form.Control type="text" />
							</Col>
						</td>
						<td>
							<Col>
								<Form.Control type="text" />
							</Col>
						</td>
					</tr>
				</tbody>
			</Table>
			<Button size="lg" className="round-button">
				+
			</Button>
		</div>
	);
};

export default Inventory5;
