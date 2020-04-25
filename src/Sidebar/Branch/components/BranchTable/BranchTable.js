import React from 'react';
import { Table, Col } from 'react-bootstrap';

const headers = [
	'Action',
	'Branch Code',
	'Branch Name',
	'Mobile',
	'Address',
	'GSTIN No',
	'Registered Date'
];

const BranchTable = () => {
	return (
		<div className="mt-5">
			<Table bordered>
				<thead className="thead-dark">
					<tr>{headers.map((i) => <th scope="col">{i}</th>)}</tr>
				</thead>
			</Table>
		</div>
	);
};

export default BranchTable;
