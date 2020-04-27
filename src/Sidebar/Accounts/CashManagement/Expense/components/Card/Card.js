import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Card.css';
const Card = () => {
	return (
		<div className="mt-5" style={{position:'relative',bottom:'14vh'}}>
			<Container className="card-container">
				<Form.Group>
					<h4>ADD EXPENSES</h4>
					<Form.Control 
					style={{boxShadow: 'none'}}
					className="round-input" type="date" />
					<Form.Label>Description</Form.Label>
					<Form.Control
						className="round-input"
						as="textarea"
						rows="3"
						style={{boxShadow: 'none'}}
					/>
					<Form.Label
					>Amount</Form.Label>
					<Form.Control
					style={{boxShadow: 'none'}}
	
					className="round-input" type="number" />
					<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					ADD
				</Button>
				</Form.Group>
			</Container>
		</div>
	);
};

export default Card;
