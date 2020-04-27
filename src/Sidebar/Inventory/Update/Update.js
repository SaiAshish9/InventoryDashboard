import React from 'react';
import {} from 'react-icons';
import './Update.css';
import NewProductTable from './Components/NewProductTable/NewProductTable';
import PriceTable from './Components/PriceTable/PriceTable';

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

const Update = () => {
	return (
		<div>
			<div className="mt-5 fill legend-container">
				{legends.map((i, k) => (
					<div>
						<p
							className="legend"
							style={{ backgroundColor: `${i.color}`,cursor:'pointer' }}
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

export default Update;
