import React from 'react';
import './Inventory.css';
import { Navbar, Nav, Row, Col, Form, Button } from 'react-bootstrap';

import ProductTable from './components/ProductTable/ProductTable';
import AtoZ from './components/AtoZ/AtoZ';

const links = [
	'All',
	'Available',
	'Expiry',
	'Zero Stock',
	'Inactive Stock'
];

const Inventory = () => {
	return (
		<div>
			<Row className="mt-5" style={{ margin: '0' }}>
				<Col lg="7">
					<Form>
						<Row style={{ margin: '0' }}>
							<Col lg="5">
								<Form.Group>
									<Form.Label
										style={{
											textAlign  : 'left',
											width      : '100%',
											marginLeft : 10
										}}
									>
										Product Name
									</Form.Label>
									<Form.Control
										type="text"
										className="round-input"
									/>
								</Form.Group>
							</Col>
							<Col lg="5">
								<Form.Group>
									<Form.Label
										style={{
											textAlign  : 'left',
											width      : '100%',
											marginLeft : 10
										}}
									>
										Enter Product
									</Form.Label>
									<Form.Control
										type="text"
										className="round-input"
									/>
								</Form.Group>
							</Col>
							<Col lg="1">
								<Button type="submit" variant="dark">
									Q
								</Button>
							</Col>
						</Row>
					</Form>
					<AtoZ />
					<Navbar className="mt-5">
						<Nav className="fill bordered-links">
							{links.map((i, k) => (
								<Nav.Link className="round">{i}</Nav.Link>
							))}
						</Nav>
					</Navbar>
				</Col>
			</Row>

			<ProductTable />
		</div>
	);
};

export default Inventory;
