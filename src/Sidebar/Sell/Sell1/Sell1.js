import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import Sell1Card from './components/Sell1Card/Sell1Card';

import Nav from '../Nav/Nav';

const Sell1 = () => {
	const labels = [
		'Customer Name',
		'Phone No',
		'ID',
		'Doctor Name',
		'Doctor Phone'
	];

	const labels1 = [
		'Product',
		'Quantity',
		'Batch',
		'Discount',
		'Price'
	];

	return (
		<div className="mt-5">
			<Nav />

			<Row className="mt-5">
				{labels.map((i, k) => (
					<Col key={k}>
						<Form.Label>{i}</Form.Label>
						<Form.Control type="text" />
					</Col>
				))}
			</Row>
			<Row style={{ justifyContent: 'center' }}>
				<Button size="lg" type="submit" className="round-button">
					Save
				</Button>
			</Row>
			<Row>
				{labels1.map((i, k) => (
					<Col key={k}>
						<Form.Label>{i}</Form.Label>
						<Form.Control type="text" />
					</Col>
				))}
			</Row>
			<Row style={{ justifyContent: 'center' }}>
				<Button size="lg" type="submit" className="round-button">
					Save
				</Button>
			</Row>
			<Row>
				<Sell1Card />
			</Row>
		</div>
	);
};

export default Sell1;
