import React from 'react'
import Nav from './Nav'
import {Switch,Route} from 'react-router-dom'
import Upload from './Upload'

const Reports = () => {
    return (
        <React.Fragment>
          <Nav/>       

          <Switch>

    <Route path='/reports' component={Upload}/>

</Switch>

        </React.Fragment>
    )
}

export default Reports
