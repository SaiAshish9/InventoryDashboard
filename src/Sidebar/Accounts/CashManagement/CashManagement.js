import React from 'react'
import {Link,Switch,Route,withRouter} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Expense from './Expense/Expense'
import Till from'./Till/Till'


const CashManagement = ({history}) => {



    const links=[
        {
            name:'Expense',
            path:'/account'
        },
        {
            name:'Till',
            path:'/account/till'
        }
    ]
    return (
        <div style={{ width:'100%'}}>
 
 <Container  style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'5vh'}}>
{
    links.map((i,k)=>(
        <Link
        key={k} 
        to={i.path} 
        style={{
            color:`${history.location.pathname!==i.path?'#00a5e3':'white'}`,
            textDecoration: 'none',
            width:'12rem',
            height:'2.7rem',
            borderRadius:20,
            background:`${history.location.pathname===i.path?'#00a5e3':'#fff'}`,
            fontWeight:'bold',
            textAlign:'center',
            paddingTop:8,
            border:`${history.location.pathname!==i.path?'2px solid #00a5e3':'none'}`,

            }}
        >
            {i.name}
        </Link>
    ))
}
</Container>

<Switch>
<Route exact path="/account" component={Expense}/>
<Route  path="/account/till" component={Till}/>
</Switch>





        </div>
    )
}

export default withRouter(CashManagement)
