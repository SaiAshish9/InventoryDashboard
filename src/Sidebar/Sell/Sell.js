import React from 'react'
import Nav from './Nav'
import {Switch,Route} from 'react-router-dom'

import Sale from './Sale/Sale'
import History from './History/History'
import ReturnList from './ReturnList/ReturnList'
import Cancellation from './Cancellation/Cancellation'
import Settings from './Settings/Settings'
import Print from './Print/Print'
import OrderList from './OrderList/OrderList'

const Sell = () => {
    return (
            <React.Fragment>
         <Nav/>


<Switch>

<Route exact path='/sell' component={Sale}/>
<Route path='/sell/history' component={History}/>
<Route path='/sell/returnList' component={ReturnList}/>
<Route path='/sell/cancellation' component={Cancellation}/>
<Route path='/sell/settings' component={Settings}/>
<Route path='/sell/print' component={Print}/>
<Route path='/sell/orderList' component={OrderList}/>

</Switch>


       </React.Fragment>
    )
}

export default Sell
