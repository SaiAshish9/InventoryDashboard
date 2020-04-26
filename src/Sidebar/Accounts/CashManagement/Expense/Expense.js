import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Expense.css';
import Card from './components/Card/Card';

import Nav1 from '../../Nav/Nav';

import { withRouter, Link } from 'react-router-dom';

const Expense = ({ history }) => {
	return (
		<div className="mt-5">
			{/* <Nav1 /> */}
			<br />
			{/* <Navbar>
				<Nav className="fill">
					<Link
						to="/account"
						style={{
							color      : `${history.location.pathname ===
							'/account'
								? 'white'
								: 'blue'}`,
							background : `${history.location.pathname ===
							'/account'
								? 'blue'
								: 'white'}`,
							border     : `${history.location.pathname ===
							'/account'
								? 'none'
								: '2px solid blue'}`,
							padding    : 7
						}}
						className="cm-link active"
					>
						Expense
					</Link>

					<Link
						to="/account/till"
						style={{
							color      : `${history.location.pathname ===
							'/account/till'
								? 'white'
								: 'blue'}`,
							background : `${history.location.pathname ===
							'/account/till'
								? 'blue'
								: 'white'}`,
							border     : `${history.location.pathname ===
							'/account/till'
								? 'none'
								: '2px solid blue'}`,
							padding    : 7
						}}
						className="cm-link"
					>
						Till
					</Link>
				</Nav>
			</Navbar> */}
			<Card />
		</div>
	);
};

export default withRouter(Expense);
