import React from 'react';
import Sidebar from './components/Sidebar/sidebar';
import Cnavbar from './components/Navbar/navbar';

import { Route, Switch } from 'react-router-dom';

import Branch from './Sidebar/Branch/Branch';
import Inventory from './Sidebar/Inventory/Inventory';
import Profile from './Sidebar/Profile/Profile';
import Order from './Sidebar/Order/Order';
import Sell from './Sidebar/Sell/Sell';
import Users from './Sidebar/Users/Users';
import Purchase from './Sidebar/Purchase/Purchase';
import Account from './Sidebar/Accounts/Accounts';
import Reports from './Sidebar/Reports/Reports';
import Dashboard from './Sidebar/Dashboard/Dashboard'


function App() {
  return (


						<div style={{backgroundColor:'#f4f4f4'}}>

			<Sidebar />
			<div className="content">
				<Cnavbar />
				<div
					className="main"
					style={{ backgroundColor: '#f4f4f4', minHeight:'100vh',maxHeight: '300vh' }}
				>
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route path="/sell" component={Sell} />
						<Route path="/inventory" component={Inventory} />
						<Route path="/branch" component={Branch} />
						<Route path="/profile" component={Profile} />
						<Route path="/order" component={Order} />
						<Route path="/user" component={Users} />
						<Route path="/purchase" component={Purchase} />
						<Route path="/account" component={Account} />
						<Route path="/reports" component={Reports} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default App;
