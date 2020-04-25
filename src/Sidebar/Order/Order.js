import React from 'react'

import Nav from './Nav'

import Order1 from './Order/Order'
import OrderList from './OrderList/OrderList'
import Missed from './Missed/Missed'
import Settings from './Settings/Settings'

import {Switch,Route} from 'react-router-dom'


const Order = () => {
    return (
        <React.Fragment>
            <Nav/>
        <Switch>
            <Route exact path="/order" component={Order1}/>
            <Route path="/order/reorder" component={Order1}/>
            <Route path="/order/byTransactions" component={Order1}/>
            <Route path="/order/orderList" component={OrderList}/>
            <Route path="/order/missed" component={Missed}/>
            <Route path="/order/settings" component={Settings}/>
        </Switch>
        
        
        </React.Fragment>
    )
}

export default Order
