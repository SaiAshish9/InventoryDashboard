import React from 'react';
import { Row, Col, Table, Button, Form } from 'react-bootstrap';

const headers = [
	'Vendor',
	'Cancel Date',
	'Invoice No',
	'Invoice Date',
	'Mobile',
	'Total'
];

const tableData = [
	{
		vendor      : 'ABC',
		cancelDate  : '12/12/12',
		invoiceNo   : 7851,
		invoiceDate : '12/12/12',
		mobile      : 9876512340,
		total       : 100
	},
	{
		vendor      : 'ABC',
		cancelDate  : '12/12/12',
		invoiceNo   : 7851,
		invoiceDate : '12/12/12',
		mobile      : 9876512340,
		total       : 100
	},
	{
		vendor      : 'ABC',
		cancelDate  : '12/12/12',
		invoiceNo   : 7851,
		invoiceDate : '12/12/12',
		mobile      : 9876512340,
		total       : 100
	}
];

const CancelList = () => {
	return (
		<div className="mt-5" style={{ padding: '1rem' }}>
			<Row style={{ margin: '0' }}>
				<Col>
				<Form.Label style={{ marginLeft: 30,fontSize:13,color:'#999',fontWeight:'bold' }}>

						From
					</Form.Label>
					<Form.Control style={{boxShadow:'none'}} type="date" className="round-input" />
				</Col>
				<Col>
				<Form.Label style={{ marginLeft: 30,fontSize:13,color:'#999',fontWeight:'bold' }}>

						To
					</Form.Label>
			<input className="round-input" style={{outline:'none',boxShadow:'none'}} />
				</Col>
				<Col>
				<Form.Label style={{ marginLeft: 30,fontSize:13,color:'#999',fontWeight:'bold' }}>

						Select Anyone
					</Form.Label>
					<input className="round-input" style={{outline:'none',boxShadow:'none'}} />
				</Col>
				<Col>
				<Form.Label style={{ marginLeft: 30,fontSize:13,color:'#999',fontWeight:'bold' }}>

						Enter Values
					</Form.Label>
					<input className="round-input" style={{outline:'none',boxShadow:'none'}} />
				</Col>
				<Col>
				<Row style={{ justifyContent: 'center', margin: '0' }}>
				<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					Search
				</Button>
			</Row>
				</Col>
			</Row>
			<Row style={{ margin: '0' }}>
				<Table style={{ padding: '1rem' }} className="mt-5">
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
									{i.cancelDate}
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

export default CancelList;
