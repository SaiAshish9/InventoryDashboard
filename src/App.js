import React from 'react';
import Sidebar from './components/Sidebar/sidebar';
import Cnavbar from './components/Navbar/navbar';

import {Route,Switch} from 'react-router-dom'
import Branch from './Sidebar/Branch/Branch';
import Inventory from './Sidebar/Inventory/Inventory1/Inventory1';
import Inventory2 from './Sidebar/Inventory/Inventory2/Inventory2';
import Inventory3 from './Sidebar/Inventory/Inventory3/Inventory3';
import Inventory4 from './Sidebar/Inventory/Inventory4/Inventory4';
import Inventory5 from './Sidebar/Inventory/Inventory5/Inventory5';
import Inventory6 from './Sidebar/Inventory/Inventory6/Inventory6';
import Expense from './Sidebar/Accounts/Accounts1/Expense/Expense';
import Till from './Sidebar/Accounts/Accounts1/Till/Till';
import Accounts2 from './Sidebar/Accounts/Accounts2/Accounts2';
import Accounts4 from './Sidebar/Accounts/Accounts4/Accounts4';
import Accounts5 from './Sidebar/Accounts/Accounts5/Accounts5';
import Accounts6 from './Sidebar/Accounts/Accounts6/Accounts6';
import Profile from './Sidebar/Profile/Profile';
import Order from './Sidebar/Order/Order'
import Sell from './Sidebar/Sell/Sell'

const Home=()=>(
  <div style={{height:'100vh', width:'60vw',textAlign:'center',marginTop:'30vh'}}>
    home
  </div>
)

function App() {
  return (
    <React.Fragment>
<Sidebar />
		<div className="content">
			<Cnavbar />
			<div className="main" style={{backgroundColor:'#f4f4f4',minHeight:'100vh'}}>

				
                    
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/sell" component={Sell}/>
    <Route path="/inventory" component={Inventory}/>
    <Route path="/inventory2" component={Inventory2}/>
    <Route path="/inventory3" component={Inventory3}/>
    <Route path="/inventory4" component={Inventory4}/>
    <Route path="/inventory5" component={Inventory5}/>
    <Route path="/inventory6" component={Inventory6}/>
    <Route path="/branch" component={Branch}/>
    <Route path="/account" component={Expense}/>
    <Route path="/account/till" component={Till}/>
    <Route path="/account2" component={Accounts2}/>
    <Route path="/account4" component={Accounts4}/>
    <Route path="/account5" component={Accounts5}/>
    <Route path="/account6" component={Accounts6}/>
    <Route path="/profile" component={Profile}/>
    <Route path='/order' component={Order}/>
     
      </Switch>                
			</div>
		</div>
    </React.Fragment>

  );
}



export default App
