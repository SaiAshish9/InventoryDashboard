import React from 'react';
import ProductTable from '../Inventory/components/ProductTable/ProductTable';
import SearchArea from './components/SearchArea/SearchArea';
import AtoZ from '../Inventory/components/AtoZ/AtoZ';

const Master = () => {
	return (
		<div>
			<SearchArea />
			<br />
			<AtoZ />
			<br />
			<ProductTable />
		</div>
	);
};

export default Master;
