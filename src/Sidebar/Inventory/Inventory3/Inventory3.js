import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Inventory3.css';
import Nav from '../Nav/Nav';

const Inventory3 = () => {
	return (
		<div className=" mt-5">
			<Nav />
			<Form className="mt-5">
				<Form.Group>
					<h4>No of days of stock holding</h4>
					<div>
						<div className="rounded" />
						<Form.Control type="text" />
						<div className="rounded" />
					</div>
				</Form.Group>
				<Button className="round-button">Save</Button>
			</Form>
		</div>
	);
};

export default Inventory3;
