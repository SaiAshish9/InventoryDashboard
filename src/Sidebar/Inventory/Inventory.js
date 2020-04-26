import React from 'react';

import Navbar1 from './Nav/Nav';

import Inventory from './Inventory/Inventory';
import Update from './Update/Update';
import Settings from './Settings/Settings';
import Master from './Master/Master';
import Self from './Self/Self';
import Barcode from './Barcode/Barcode';

import { Switch, Route } from 'react-router-dom';

const Order = () => {
	return (
		<React.Fragment>
			<Navbar1 />
			<Switch>
				<Route exact path="/inventory" component={Inventory} />
				<Route path="/inventory/update" component={Update} />
				<Route path="/inventory/settings" component={Settings} />
				<Route path="/inventory/master" component={Master} />
				<Route path="/inventory/self" component={Self} />
				<Route path="/inventory/barcode" component={Barcode} />
			</Switch>
		</React.Fragment>
	);
};

export default Order;
