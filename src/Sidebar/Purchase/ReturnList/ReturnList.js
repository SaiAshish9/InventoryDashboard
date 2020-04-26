import React from 'react';

import { Row, Col, Form, Button, Table } from 'react-bootstrap';

const SearchArea = [
	'Vendor Name',
	'Invoice No',
	'Product',
	'Batch',
	'From'
];

const headers = [
	'Return Date',
	'Invoice/GR',
	'Invoice Date',
	'Vendor',
	'Mobile',
	'Reason',
	'Payment Status',
	'Payment Remarks'
];

const tableData = [
	{
		date           : '25/12/24',
		invoice        : 1234565,
		invoiceDate    : '12/12/24',
		vendor         : 'xyz',
		mobile         : 9876512340,
		reason         : ' ',
		paymentStatus  : 'Pending',
		paymentRemarks : '-'
	},
	{
		date           : '25/12/24',
		invoice        : 1234565,
		invoiceDate    : '12/12/24',
		vendor         : 'xyz',
		mobile         : 9876512340,
		reason         : ' ',
		paymentStatus  : 'Pending',
		paymentRemarks : '-'
	},
	{
		date           : '25/12/24',
		invoice        : 1234565,
		invoiceDate    : '12/12/24',
		vendor         : 'xyz',
		mobile         : 9876512340,
		reason         : ' ',
		paymentStatus  : 'Pending',
		paymentRemarks : '-'
	}
];

const ReturnList = () => {
	return (
		<div className="mt-5" style={{ padding: '1rem' }}>
			<Row style={{ margin: '0' }}>
				{SearchArea.map((i, k) => (
					<Col>
						<Form.Label
							style={{
								textAlign  : 'left',
								width      : '100%',
								marginLeft : 20
							}}
						>
							{i}
						</Form.Label>
						<Form.Control type="text" className="round-input" />
					</Col>
				))}
			</Row>
			<Row style={{ justifyContent: 'center', margin: '0' }}>
				<Button
					className="round"
					style={{ fontSize: 20, fontWeight: 'bold' }}
				>
					Search
				</Button>
			</Row>
			<Row style={{ margin: '0' }}>
				<Table className="mt-5" style={{ padding: '1rem' }}>
					<thead className="thead-light">
						<tr>
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
						</tr>
					</thead>
					<tbody>
						{tableData.map((i, k) => (
							<tr>
								<td
									style={{
										fontSize        : 12,
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.1px solid #999',
										fontWeight      : 'bold'
									}}
								>
									{i.date}
								</td>
								<td
									style={{
										fontSize        : 12,
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.5px solid #999',
										fontWeight      : 'bold'
									}}
								>
									{i.invoice}
								</td>
								<td
									style={{
										fontSize        : 12,
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.5px solid #999',
										fontWeight      : 'bold'
									}}
								>
									{i.invoiceDate}
								</td>
								<td
									style={{
										fontSize        : 12,
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.5px solid #999',
										fontWeight      : 'bold'
									}}
								>
									{i.vendor}
								</td>
								<td
									style={{
										fontSize        : 12,
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.5px solid #999',
										fontWeight      : 'bold'
									}}
								>
									{i.mobile}
								</td>
								<td
									style={{
										fontSize        : 12,
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.5px solid #999',
										fontWeight      : 'bold'
									}}
								>
									{i.reason}
								</td>
								<td
									style={{
										fontSize        : 12,
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.5px solid #999',
										fontWeight      : 'bold'
									}}
								>
									{i.paymentStatus}
								</td>
								<td
									style={{
										fontSize        : 12,
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.5px solid #999',
										fontWeight      : 'bold'
									}}
								>
									{i.paymentRemarks}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Row>
		</div>
	);
};

export default ReturnList;
