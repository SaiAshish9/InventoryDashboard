import React from 'react';

import { withRouter, Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

const Navbar1 = ({ history }) => {
	const links = [
		{
			name  : 'Cash Management',
			path  : '/account',
			path1 : '/account/till'
		},
		{
			name : 'Customer Receipt',
			path : '/account/receipt'
		},
		{
			name : 'Cheque',
			path : ''
		},
		{
			name : 'Vendor Payment',
			path : '/account/payment'
		},
		{
			name : 'Vendor Payment History',
			path : '/account/history'
		},
		{
			name : 'Financial Year Settings',
			path : '/account/year'
		}
	];

	return (
		<div
			style={{
				paddingLeft : '10%',
				display     : 'flex',
				alignItems  : 'center',
				height      : '7vh',
				width       : '100%',
				background  : 'black',
				marginTop   : '3.8vh'
			}}
		>
			{links.map((i, k) => (
				<Link
					key={k}
					to={i.path}
					style={{
						margin         : 10,
						height         : '7vh',
						padding        : 12,
						color          : 'white',
						textDecoration : 'none',
						background     : `${[
							i.path,
							i.path1,
							i.path2
						].includes(history.location.pathname)
							? '#333'
							: ''}`
					}}
				>
					{i.name}
				</Link>
			))}
		</div>
	);
};

export default withRouter(Navbar1);
