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

const BarcodeTable = () => {
	return (
		<div>
			<Table borderless className="mt-5">
				<thead className="thead-dark">
					<tr>{headers.map((i) => <th scope="col">{i}</th>)}</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>123</td>
						<td>ABC</td>
						<td>2020</td>
						<td>2024</td>
						<td>29/1/2020</td>
						<td>80</td>
						<td>1</td>
						<td>197504</td>
						<td>1</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default BarcodeTable;
