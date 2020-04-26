import React from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import BarcodeTable from './components/BarcodeTable/BarcodeTable';

const Barcode = () => {
	return (
		<div>
			<h4 style={{ textAlign: 'center' }} className="mt-3">
				Barcode Generation
			</h4>
			<Row style={{ margin: '0' }}>
				<Col>
					<Form.Control
						className="round-input"
						type="text"
						placeholder="Enter Product Name"
					/>
				</Col>
				<Col>
					<Form.Control className="round-input" as="select" />
				</Col>
			</Row>
			<div style={{ textAlign: 'center' }}>
				<Button size="lg" className="round">
					Load
				</Button>
			</div>
			<BarcodeTable />
		</div>
	);
};

export default Barcode;
