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
					<Col key={k}>
					<Form.Label style={{ marginLeft: 30,fontSize:13,color:'#999',fontWeight:'bold' }}>
						{i}
					</Form.Label>
					<input className="round-input" style={{outline:'none',boxShadow:'none'}} />
					</Col>
				))}
			</Row>
			<Row style={{ justifyContent: 'center', margin: '0' }}>
			<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
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
