import React from 'react'
import Nav from './Nav'
import Vendor from './Vendor/Vendor'
import VendorList from './VendorList/VendorList'
import Customer from './Customer/Customer'
import Sms from './Sms/Sms'
import Doctor from './Doctor/Doctor'
import {Switch,Route} from 'react-router-dom'

const Profile = () => {


    return (
       <React.Fragment>
         <Nav/>
<Switch>

    <Route exact path='/profile' component={Vendor}/>
    <Route path='/profile/vendorList' component={VendorList}/>
    <Route path='/profile/customer' component={Customer}/>
    <Route path='/profile/sms' component={Sms}/>
    <Route path='/profile/doctor' component={Doctor}/>

</Switch>
       </React.Fragment>

    )
}

export default Profile
