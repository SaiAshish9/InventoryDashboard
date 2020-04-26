import React from 'react'

import {Link,withRouter} from 'react-router-dom'

import {Container} from 'react-bootstrap'


const Nav = ({history}) => {

    const links=[
        {
            name:'Order',
            path:'/sell/orderList'
        },
        {
            name:'Estimate',
            path:'/sell/orderList/estimate'
        }
      
    ]

    return (
        <Container  style={{width:'100%',display:'flex',marginTop:'5vh',height:'30vh'}}>
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
