import React from 'react'
import Nav from './Nav'

import BatchPopup from './BatchPopup/BatchPopup'
import BillSeries from './BillSeries/BillSeries'
import Customer from './CustomerType/CustomerType'
import Discount from './Discount/Discount'
import Print from './Print/Print'
import Sales from './Sales/Sales'
import Sms from './Sms/Sms'

import {Switch,Route} from 'react-router-dom'

const Settings = () => {
    return (
        <div style={{height:'75vh',width:'100%'}}>
        <Nav/>

        <Switch>
<Route exact path="/sell/settings" component={Print}/>
<Route  path="/sell/settings/batch" component={BatchPopup}/>
<Route  path="/sell/settings/bill" component={BillSeries}/>
<Route  path="/sell/settings/customer" component={Customer}/>
<Route  path="/sell/settings/discount" component={Discount}/>
<Route  path="/sell/settings/print" component={Print}/>
<Route  path="/sell/settings/sales" component={Sales}/>
<Route  path="/sell/settings/sms" component={Sms}/>

</Switch>

        </div>
    )
}

export default Settings
