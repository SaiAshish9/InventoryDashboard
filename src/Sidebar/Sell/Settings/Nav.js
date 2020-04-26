import React from 'react'
import {Link,withRouter} from 'react-router-dom'

import {Container} from 'react-bootstrap'


const links=[
    {
        name:'Print',
        path:"/sell/settings"
    },  {
        name:'Discount',
        path:"/sell/settings/discount"
    },  {
        name:'Sales',
        path:"/sell/settings/sales"
    },
    {
        name:'Bill Series',
        path:"/sell/settings/bill"
    },{
        name:'SMS',
        path:"/sell/settings/sms"
    },{
        name:'Customer Type',
        path:"/sell/settings/customer"
    },{
        name:'Batch Popup',
        path:"/sell/settings/batch"
    },

]




const Nav = ({history}) => {
    return (
        <Container  style={{width:'100%',display:'flex',justifyContent:'space-between',marginTop:'5vh',height:'30vh'}}>
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
                    background:`${history.location.pathname===i.path?'#00a5e3':'white'}`,
                    fontWeight:'bold',
                    textAlign:'center',
                    paddingTop:8,
                    border:`${history.location.pathname!==i.path?'2px solid #00a5e3':'none'}`,
                    marginRight:15
        
                    }}
                >
                    {i.name}
                </Link>
            ))
        }
        </Container>
    )
}

export default withRouter(Nav)
