import React from 'react';
import './Inventory1.css';
import { Navbar, Nav, Row, Col, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons';
// import ProductTable from "./components/ProductTable/ProductTable";
import AtoZ from './components/AtoZ/AtoZ';
import Nav1 from '../Nav/Nav';

const Inventory1 = () => {
	return (
		<div>
			<Nav1 />
			<Form>
				<Row>
					<Col lg="5">
						<Form.Group>
							<Form.Label>Product Name</Form.Label>
							<Form.Control type="text" className="round" />
						</Form.Group>
					</Col>
					<Col lg="5">
						<Form.Group>
							<Form.Label>Enter Product</Form.Label>
							<Form.Control type="text" className="round" />
						</Form.Group>
					</Col>
					<Col lg="1">
						<Button
							type="submit"
							variant="dark"
							className="round-button"
						>
							Q
						</Button>
					</Col>
				</Row>
			</Form>
			<AtoZ />

			<Navbar className="mt-5">
				<Nav className="fill bordered-links">
					<Nav.Link className="round">All</Nav.Link>
					<Nav.Link className="round">Available</Nav.Link>
					<Nav.Link className="round">Expiry</Nav.Link>
					<Nav.Link className="round">Zero Stock</Nav.Link>
					<Nav.Link className="round">Inactive Stock</Nav.Link>
				</Nav>
			</Navbar>
			{/* <ProductTable /> */}
		</div>
	);
};

export default Inventory1;
