import React from 'react';
import { Form, Container, Table, Row, Col } from 'react-bootstrap';

const DenominationChart = () => {
	return (
		<div className="mt-5">
			<h5>Denomination Chart</h5>
			<Container className="till-card-container card-container">
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
								/>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Label>Coins</Form.Label>
							</Col>
							<Col>
								<Form.Control type="number" />
							</Col>
						</Row>
					</Table>
				</Form>
			</Container>
		</div>
	);
};

export default DenominationChart;
