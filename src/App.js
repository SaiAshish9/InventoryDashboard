import React from 'react';
import { Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar/sidebar';
import Cnavbar from './components/Navbar/navbar';
import Sell1 from './Sidebar/Sell/Sell1/Sell1';
import Sell2 from './Sidebar/Sell/Sell2/Sell2';
import Sell3 from './Sidebar/Sell/Sell3/Sell3';
import Sell4 from './Sidebar/Sell/Sell4/Sell4';
import Sell5 from './Sidebar/Sell/Sell7/Sell71';
import {Route,Switch} from 'react-router-dom'
import ByTransaction from './Sidebar/Order/Order1/ByTransaction/ByTransaction'
import Order2 from './Sidebar/Order/Order2/Order2';
import Order3 from './Sidebar/Order/Order3/Order3';
import Order4 from './Sidebar/Order/Order4/Order4';
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
			<div className="main">

				{/* <Container> */}
				
                    
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/sell" component={Sell1}/>
    <Route path="/sell/1" component={Sell2}/>
    <Route path="/sell/2" component={Sell3}/>
    <Route path="/sell/3" component={Sell4}/>
    <Route path="/sell/4" component={Sell5}/>
    <Route path="/order" component={ByTransaction}/>
    <Route path="/order/ByVendor" component={ByTransaction}/>
    <Route path="/order/Reorder" component={ByTransaction}/>
    <Route path="/order2" component={Order2}/>
    <Route path="/order3" component={Order3}/>
    <Route path="/order4" component={Order4}/>
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
   
      </Switch>                
				{/* </Container> */}
			</div>
		</div>
    </React.Fragment>

  );
}



export default App
