import React from 'react';
import { Table, Col, Row, Form, Button } from 'react-bootstrap';

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

const Self = () => {
	return (
		<div>
			<Row style={{ margin: '0', padding: '1rem' }}>
				<Table className="mt-5">
					<thead className="thead-light">
						{headers.map((i, k) => (
							<th
								key={k}
								style={{
									fontSize    : 12,
									cursor      : 'pointer',
									borderRight : '0.5px solid #999'
								}}
							>
								{i}
							</th>
						))}
					</thead>
					<tbody>
						<tr>
							{headers.map((i, k) => (
								<td
									style={{
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.1px solid #999'
									}}
								>
									{/* <Col> */}
									<Form.Control type="text" />
									{/* </Col> */}
								</td>
							))}
						</tr>
					</tbody>
				</Table>
			</Row>
			<Row style={{ margin: '0', padding: '1rem' }}>
				<Button size="lg" className="round">
					+
				</Button>
			</Row>
		</div>
	);
};

export default Self;
