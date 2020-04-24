import React from 'react';
import { Navbar, Nav, Row, Col, Table, Form, Button } from 'react-bootstrap';

import { Link, withRouter } from 'react-router-dom';

const ByTransaction = ({ history }) => {
	return (
		<div>
			<Navbar
				bg="dark"
				expand="lg"
				variant="dark"
				className="mt-5"
				style={{ position: 'relative' }}
			>
				<Nav className="fill">
					<Nav.Link href="#" active>
						Order
					</Nav.Link>
					<Nav.Link href="#">List</Nav.Link>
					<Nav.Link href="#">Missed Sales Order</Nav.Link>
					<Nav.Link href="#">Settings</Nav.Link>
				</Nav>
			</Navbar>
			<br />
			<Navbar className="mt-5">
				<Nav className="fill">
					<Link
						to="/order/ByVendor"
						style={{
							color  : `${history.location.pathname ===
							'/order/ByVendor'
								? '#333'
								: '#999'}`,
							margin : 5
						}}
						className="cm-link"
					>
						By Vendor
					</Link>
					<Link
						to="/order/Reorder"
						style={{
							color  : `${history.location.pathname ===
							'/order/Reorder'
								? '#333'
								: '#999'}`,
							margin : 5
						}}
						className="cm-link"
					>
						Reorder
					</Link>
					<Link
						to="/order"
						style={{
							color  : `${history.location.pathname === '/order'
								? '#333'
								: '#999'}`,
							margin : 5
						}}
						className="cm-link"
					>
						By Transaction
					</Link>
				</Nav>
			</Navbar>
			<Row className="mt-5">
				<Col>
					<Form.Label>FROM</Form.Label>
					<Form.Control type="date" />
				</Col>
				<Col>
					<Form.Label>TO</Form.Label>
					<Form.Control type="date" />
				</Col>
				<Col>
					<Form.Label>Reorder Factor</Form.Label>
					<Form.Control type="date" />
				</Col>
			</Row>
			<Row style={{ justifyContent: 'center' }}>
				<Button size="lg" type="submit" className="round-button">
					Search
				</Button>
			</Row>
		</div>
	);
};

export default withRouter(ByTransaction);
