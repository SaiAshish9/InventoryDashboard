import React from 'react';
import { Table, Row, Col, Form } from 'react-bootstrap';
import {} from 'react-icons';
import './Inventory2.css';
import NewProductTable from './Components/NewProductTable/NewProductTable';
import PriceTable from './Components/PriceTable/PriceTable';

import Nav from '../Nav/Nav';

const legends = [
	{
		name  : 'Opening Stack',
		color : 'black'
	},
	{
		name  : 'Opening Stack History',
		color : 'White'
	},
	{
		name  : 'Inventory Update',
		color : 'white'
	}
];

const Inventory2 = () => {
	return (
		<div>
			<Nav />
			<div className="mt-5 fill legend-container">
				{legends.map((i, k) => (
					<div>
						<p
							className="legend"
							style={{ backgroundColor: `${i.color}` }}
						/>
						<p>{i.name}</p>
					</div>
				))}
			</div>
			<NewProductTable />
			<PriceTable />
		</div>
	);
};

export default Inventory2;
