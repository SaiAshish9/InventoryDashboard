import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Card.css';
const Card = () => {
	return (
		<div className="mt-5">
			<Container className="card-container">
				<Form.Group>
					<h4>ADD EXPENSES</h4>
					<Form.Control className="round-input" type="date" />
					<Form.Label>Description</Form.Label>
					<Form.Control
						className="round-input"
						as="textarea"
						rows="3"
					/>
					<Form.Label>Amount</Form.Label>
					<Form.Control className="round-input" type="number" />
					<Button size="lg" className="round">
						ADD
					</Button>
				</Form.Group>
			</Container>
		</div>
	);
};

export default Card;
