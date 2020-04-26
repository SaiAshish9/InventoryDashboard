import React from 'react';
import { Table, Col } from 'react-bootstrap';

const headers = [
	'S.No',
	'Code',
	'Product',
	'Batch',
	'Expiry',
	'Date',
	'MRP',
	'Stock',
	'Barcode',
	'No. of Rows'
];

const tableData = [
	{
		sno     : '1',
		code    : '123',
		product : 'ABC',
		batch   : '2020',
		expiry  : '2024',
		date    : '29/1/2020',
		mrp     : '80',
		stock   : '1',
		barcode : '197504',
		rows    : '1'
	},
	{
		sno     : '1',
		code    : '123',
		product : 'ABC',
		batch   : '2020',
		expiry  : '2024',
		date    : '29/1/2020',
		mrp     : '80',
		stock   : '1',
		barcode : '197504',
		rows    : '1'
	},
	{
		sno     : '1',
		code    : '123',
		product : 'ABC',
		batch   : '2020',
		expiry  : '2024',
		date    : '29/1/2020',
		mrp     : '80',
		stock   : '1',
		barcode : '197504',
		rows    : '1'
	}
];

const BarcodeTable = () => {
	return (
		<div style={{ padding: '1rem' }}>
			<Table className="mt-5">
				<thead className="thead-dark">
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
								{i.sno}
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
								{i.code}
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
								{i.product}
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
								{i.batch}
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
								{i.expiry}
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
								{i.mrp}
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
								{i.stock}
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
								{i.barcode}
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
								{i.rows}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default BarcodeTable;
