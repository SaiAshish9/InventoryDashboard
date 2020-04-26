import React from 'react'
import Nav from './Nav'
import {Switch,Route} from 'react-router-dom'

import Order from './Order'
import Estimate from './Estimate'

const OrderList = () => {
    return (
        <div>
         <Nav/>

         <Switch>
<Route exact path="/sell/orderList" component={Order}/>
<Route  path="/sell/orderList/estimate" component={Estimate}/>

</Switch>

        </div>
    )
}

export default OrderList
