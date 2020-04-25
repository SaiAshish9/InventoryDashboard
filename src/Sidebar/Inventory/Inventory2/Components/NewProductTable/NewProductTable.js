import React from 'react';
import { Table, Form, Col } from 'react-bootstrap';

const headers = [
	'Product Name',
	'Batch',
	'Expiry',
	'HSN Code',
	'GST Total',
	'IGST %',
	'SGST %',
	'CGST %',
	'Units/Strip'
];

const NewProductTable = () => {
	return (
		<Table className="mt-5">
			<thead className="thead-light">
				<tr>{headers.map((i, k) => <th scope="col">{i}</th>)}</tr>
			</thead>
			<tbody>
				<tr>
					{headers.map(() => (
						<td>
							<Form.Control type="text" />
						</td>
					))}
				</tr>
			</tbody>
		</Table>
	);
};

export default NewProductTable;
