import React from 'react';

import Navbar1 from './Nav/Nav';

import History from './History/History';
import ReturnList from './ReturnList/ReturnList';
import Purchase from './Purchase/Purchase';
import CancelList from './CancelList/CancelList';

import { Switch, Route } from 'react-router-dom';

const Order = () => {
	return (
		<React.Fragment>
			<Navbar1 />
			<Switch>
				<Route exact path="/purchase" component={Purchase} />
				<Route path="/purchase/history" component={History} />
				<Route path="/purchase/return" component={ReturnList} />
				<Route path="/purchase/cancel" component={CancelList} />
			</Switch>
		</React.Fragment>
	);
};

export default Order;
