import React from 'react';

import { withRouter, Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

const Navbar1 = ({ history }) => {
	const links = [
		{
			name : 'Inventory',
			path : '/inventory'
		},
		{
			name : 'Update Inventory',
			path : '/inventory/update'
		},
		{
			name : 'Inventory Settings',
			path : '/inventory/settings'
		},
		{
			name : 'Product Master',
			path : '/inventory/master'
		},
		{
			name : 'Self Consumption',
			path : '/inventory/self'
		},
		{
			name : 'Barcode',
			path : '/inventory/barcode'
		}
	];

	return (
		<Navbar
			expand="lg"
			variant="dark"
			className="mt-5"
			style={{ backgroundColor: '#000', padding: '0', margin: '0' }}
		>
			<Nav
				className="fill"
				style={{ height: '100%', padding: '0', margin: '0' }}
			>
				{links.map((i, k) => (
					<Link
						to={i.path}
						key={k}
						style={{
							color           : `${history.location.pathname ===
							i.path
								? 'white'
								: '#999'}`,
							backgroundColor : `${history.location.pathname ===
								i.path || history.location.pathname === i.path1
								? 'rgba(196,196,196,0.4)'
								: ''}`,
							padding         : '1rem 0.5rem 1rem 0.5rem',
							textAlign       : 'center'
						}}
					>
						{i.name}
					</Link>
				))}
			</Nav>
		</Navbar>
	);
};

export default withRouter(Navbar1);
