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
						style={{boxShadow:'none'}}
					/>
				</Col>
				<Col>
					<Form.Control style={{boxShadow: 'none'}} className="round-input" as="select" />
				</Col>
			</Row>
			<div style={{ textAlign: 'center' }}>
			<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					Load
				</Button>
			</div>
			<BarcodeTable />
		</div>
	);
};

export default Barcode;
