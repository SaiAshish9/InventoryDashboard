import React from 'react';
import {Button, Form, Container, Table, Row, Col } from 'react-bootstrap';

const DenominationChart = () => {
	return (
		<div className="mt-5" style={{margginLeft:1}}>
			<Container className="till-card-container card-container" 
			
			style={{marginLeft:10}}>
							
							<h5 style={{margin:20}}>Denomination Chart</h5>

				<Form>
					<Table>
						<Row>
							<Col>
								<Form.Label>2000x</Form.Label>
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
								<Form.Label>500x</Form.Label>
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
								<Form.Label>100x</Form.Label>
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
								<Form.Label>50x</Form.Label>
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
								<Form.Label>20x</Form.Label>
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
								<Form.Label>10x</Form.Label>
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
								<Form.Label>Coins</Form.Label>
							</Col>
							<Col>
							<Form.Control
									className="round-input"
									type="number"
									style={{boxShadow: 'none',width:'10rem'}}
								/>							</Col>
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

export default DenominationChart;
