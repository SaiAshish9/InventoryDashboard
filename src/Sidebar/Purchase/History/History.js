import React from 'react';
import { Row, Col, Button, Form, Table } from 'react-bootstrap';

const headers = [
	'Invoice No',
	'Vendor',
	'Inv. Date',
	'Mobile',
	'Dist %',
	'Type',
	'Total'
];

const tableData = [
	{
		invoiceNo   : 123,
		vendor      : 'ADBJBUGVVGXFD',
		invoiceDate : '20/12/2025',
		mobile      : 9876123450,
		dist        : 190,
		type        : 'A',
		total       : '100'
	},
	{
		invoiceNo   : 123,
		vendor      : 'ADBJBUGVVGXFD',
		invoiceDate : '20/12/2025',
		mobile      : 9876123450,
		dist        : 190,
		type        : 'A',
		total       : '100'
	},
	{
		invoiceNo   : 123,
		vendor      : 'ADBJBUGVVGXFD',
		invoiceDate : '20/12/2025',
		mobile      : 9876123450,
		dist        : 190,
		type        : 'A',
		total       : '100'
	}
];

const History = () => {
	return (
		<div
			style={{
				padding : '1rem'
			}}
		>
			<Row
				style={{
					margin         : 'auto',
					width          : '30%',
					justifyContent : 'center'
				}}
			>
				<Col>
					<Form.Label style={{ marginLeft: 30 }}>
						Select Anyone
					</Form.Label>
					<Form.Control className="round-input" />
				</Col>
				<Button className="round" style={{ fontSize: 20 }}>
					Search
				</Button>
			</Row>
			<Row>
				<Table className="mt-5" style={{ margin: '1rem' }}>
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
									{i.invoiceNo}
								</td>
								<td
									style={{
										fontSize        : 12,
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.1px solid #999',
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
										borderRight     : '0.1px solid #999',
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
										borderRight     : '0.1px solid #999',
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
										borderRight     : '0.1px solid #999',
										fontWeight      : 'bold'
									}}
								>
									{i.dist}
								</td>
								<td
									style={{
										fontSize        : 12,
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.1px solid #999',
										fontWeight      : 'bold'
									}}
								>
									{i.type}
								</td>
								<td
									style={{
										fontSize        : 12,
										backgroundColor : '#fff',
										color           : '#999',
										borderRight     : '0.1px solid #999',
										fontWeight      : 'bold'
									}}
								>
									{i.total}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Row>
		</div>
	);
};

export default History;
