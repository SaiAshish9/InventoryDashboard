import React from 'react';
import './Till.css';
import DenominationChart from './components/DenominationChart/DenominationChart';
import TillChart from './components/TillChart/TillChart';
import { Navbar, Nav, Row, Col, Button } from 'react-bootstrap';
import Nav1 from '../../Nav/Nav';

const Till = () => {
	return (
		<div className="mt-5">
			{/* <Nav1 /> */}
			<br />
			{/* <Navbar>
				<Nav className="fill">
					<Nav.Link className="cm-link">Expense</Nav.Link>
					<Nav.Link className="cm-link active">Till</Nav.Link>
				</Nav>
			</Navbar> */}
			<Row>
				<Col>
					<DenominationChart />
				</Col>
				<Col>
					<TillChart />
				</Col>
			</Row>
			<Row style={{ justifyContent: 'center' }}>
				<Button size="lg" className="round">
					ADD
				</Button>
			</Row>
		</div>
	);
};

export default Till;
