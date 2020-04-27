import React from 'react';
import { Form, Container, Table, Col, Row,Button } from 'react-bootstrap';

const TillChart = () => {
	return (
		<div className="mt-5" style={{margginLeft:1}}>
			<Container className="till-card-container card-container" 
			
			style={{marginLeft:10}}>
							
							<h5 style={{margin:20}}>Till Chart</h5>
				<Form>
					<Table>
						<Row>
							<Col>
								<Form.Label>Opening Balance</Form.Label>
							</Col>
							<Col>
							<Form.Control
									className="round-input"
									type="number"
									style={{boxShadow: 'none',width:'10rem'}}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Label>Floating Amount</Form.Label>
							</Col>
							<Col>
							<Form.Control
									className="round-input"
									type="number"
									style={{boxShadow: 'none',width:'10rem'}}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Label>Vendor Payment</Form.Label>
							</Col>
							<Col>
							<Form.Control
									className="round-input"
									type="number"
									style={{boxShadow: 'none',width:'10rem'}}
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Label>Expenses</Form.Label>
							</Col>
							<Col>
							<Form.Control
									className="round-input"
									type="number"
									style={{boxShadow: 'none',width:'10rem'}}
								/>
							</Col>
						</Row>
					</Table>
				</Form>

				<Row style={{ justifyContent: 'center' }}>
			<Button  style={{ boxShadow: 'none',borderRadius:20,width:'7rem',fontSize: 15,fontWeight:'bold' ,backgroundColor : '#00a5e3'}}>
					ADD
				</Button>
			</Row>

			</Container>
		</div>
	);
};

export default TillChart;
