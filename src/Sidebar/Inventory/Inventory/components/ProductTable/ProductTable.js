import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Table } from 'react-bootstrap';

const headers = [
	'Code',
	'Product',
	'MFR',
	'Vendor',
	'Batch',
	'Expiry',
	'QTY',
	'Cost Price',
	'Rack',
	'Row'
];

const tableData = [
	{
		code    : 123,
		product : 'ABC',
		mfr     : 'XYZ',
		vendor  : 'ADBJBUGVVGXFD',
		batch   : '34567890987654',
		expiry  : '20/12/2025',
		qty     : 5,
		cost    : 190
	},
	{
		code    : 123,
		product : 'ABC',
		mfr     : 'XYZ',
		vendor  : 'ADBJBUGVVGXFD',
		batch   : '34567890987654',
		expiry  : '20/12/2025',
		qty     : 5,
		cost    : 190
	},
	{
		code    : 123,
		product : 'ABC',
		mfr     : 'XYZ',
		vendor  : 'ADBJBUGVVGXFD',
		batch   : '34567890987654',
		expiry  : '20/12/2025',
		qty     : 5,
		cost    : 190
	},
	{
		code    : 123,
		product : 'ABC',
		mfr     : 'XYZ',
		vendor  : 'ADBJBUGVVGXFD',
		batch   : '34567890987654',
		expiry  : '20/12/2025',
		qty     : 5,
		cost    : 190
	}
];

const ProductTable = () => {
	const [
		current,
		setCurrent
	] = useState(0);
	return (
		<div style={{ padding: '1rem' }}>
			<Table>
				<thead className="thead-light mt-5">
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
								{i.mfr}
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
								{i.qty}
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
								{i.cost}
							</td>
							<td
								style={{
									fontSize        : 12,
									backgroundColor : '#fff',
									color           : '#999',
									borderRight     : '0.5px solid #999',
									fontWeight      : 'bold',
									width           : '10%'
								}}
							>
								<Form.Control type="number" disabled />
							</td>
							<td
								style={{
									fontSize        : 12,
									backgroundColor : '#fff',
									color           : '#999',
									borderRight     : '0.5px solid #999',
									fontWeight      : 'bold',
									width           : '10%'
								}}
							>
								<Form.Control type="number" disabled />
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			{[
				...Array(5).keys()
			].map((i, k) => (
				<Link
					// to={current===0?"/order/missed":`/order/missed/${current}}`}
					onClick={() => setCurrent(parseInt(i) % 5)}
					style={{
						background     : `${i == current ? '#333' : 'white'}`,
						color          : `${i !== current ? '#333' : 'white'}`,
						border         : `${i !== current
							? '0.2px solid #999'
							: '#333'}`,
						margin         : 3,
						padding        : 5,
						fontSize       : 12,
						textDecoration : 'none'
					}}
				>
					{i + 1}
				</Link>
			))}
		</div>
	);
};

export default ProductTable;
