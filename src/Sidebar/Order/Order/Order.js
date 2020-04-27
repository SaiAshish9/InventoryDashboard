import React from 'react'
import {Link,Switch,Route,withRouter} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import ByVendor from './ByVendor'
import ByTransactions from'./ByTransactions'
import Reorder from './Reorder'


const Order = ({history}) => {



    const links=[
        {
            name:'By Vendor',
            path:'/order'
        },
        {
            name:'Reorder',
            path:'/order/reorder'
        },
        {
            path:'/order/byTransactions',
            name:'By Transactions'
        }
    ]
    return (
        <div style={{height:'75vh',width:'100%'}}>
 
 <Container  style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'5vh',height:'30vh'}}>
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
<Route exact path="/order" component={ByVendor}/>
<Route  path="/order/reorder" component={Reorder}/>
<Route  path="/order/byTransactions" component={ByTransactions}/>
</Switch>





        </div>
    )
}

export default withRouter(Order)
