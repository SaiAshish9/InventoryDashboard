import React from 'react';

import Navbar1 from './Nav/Nav';

import CashManagement from './CashManagement/CashManagement';
import CustomerReceipt from './CustomerReceipt/CustomerReceipt';
import VendorPayment from './VendorPayment/VendorPayment';
import History from './History/History';
import Year from './Year/Year';

import { Switch, Route } from 'react-router-dom';

const Order = () => {
	return (
		<React.Fragment>
			<Navbar1 />
			<Switch>
				<Route exact path="/account" component={CashManagement} />
				<Route exact path="/account/till" component={CashManagement} />
				<Route path="/account/receipt" component={CustomerReceipt} />
				<Route path="/account/payment" component={VendorPayment} />
				<Route path="/account/history" component={History} />
				<Route path="/account/year" component={Year} />
			</Switch>
		</React.Fragment>
	);
};

export default Order;
