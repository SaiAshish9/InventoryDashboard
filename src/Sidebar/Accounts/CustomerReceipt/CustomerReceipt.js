import React from 'react';
import { Navbar, Nav, Table, Col, Row, Form, Button } from 'react-bootstrap';

const headers = [
	'Customer Name',
	'Mobile No',
	'Due',
	'Balance',
	'Details'
];

const CustomerReceipt = () => {
	return (
		<div className="mt-5" style={{ overflow: 'hidden' }}>
			<Table className="mt-5" responsive="md">
				<Row style={{ margin: '0' }}>
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
				<Row style={{ margin: '0' }}>
					<Table className="mt-5">
						<thead className="thead-light">
							<tr>
								{headers.map((i, k) => (
									<th key={k} scope="col">
										{i}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{[
								...Array(7).keys()
							].map((i, k) => (
								<tr key={k}>
									<td
										style={{
											fontSize    : 12,
											color       : '#999',
											borderRight : '0.1px solid #999',
											fontWeight  : 'bold'
										}}
									>
										ARC
									</td>
									<td
										style={{
											fontSize    : 12,
											color       : '#999',
											borderRight : '0.5px solid #999',
											fontWeight  : 'bold'
										}}
									>
										9443050047
									</td>
									<td
										style={{
											fontSize    : 12,
											color       : '#999',
											borderRight : '0.5px solid #999',
											fontWeight  : 'bold'
										}}
									>
										150
									</td>
									<td
										style={{
											fontSize    : 12,
											color       : '#999',
											borderRight : '0.5px solid #999',
											fontWeight  : 'bold'
										}}
									>
										500
									</td>
									<td
										style={{
											fontSize    : 12,
											color       : '#999',
											borderRight : '0.5px solid #999',
											fontWeight  : 'bold'
										}}
									>
										-
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Row>
			</Table>
		</div>
	);
};

export default CustomerReceipt;
