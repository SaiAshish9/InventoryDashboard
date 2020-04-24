import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import BarcodeTable from './components/BarcodeTable/BarcodeTable';
import Nav from '../Nav/Nav';

const Inventory6 = () => {
	return (
		<div>
			<Nav />
			<h4 style={{ textAlign: 'center' }} className="mt-3">
				Barcode Generation
			</h4>
			<Form.Row>
				<Col>
					<Form.Control
						type="text"
						placeholder="Enter Product Name"
					/>
				</Col>
				<Col>
					<Form.Control as="select" />
				</Col>
			</Form.Row>
			<div style={{ textAlign: 'center' }}>
				<Button size="lg" className="round-button">
					Load
				</Button>
			</div>
			<BarcodeTable />
		</div>
	);
};

export default Inventory6;
