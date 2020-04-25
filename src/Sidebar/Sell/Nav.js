import React from 'react'

import {Link,withRouter} from 'react-router-dom'


const Nav = ({history}) => {

    const links=[
        {
            name:'Sale',
            path:'/sell'
        },
        {
            name:'History',
            path:'/sell/history'
        },
        {
            name:'Return List',
            path:'/sell/returnList'
        },{
            name:'Cancellation',
            path:'/sell/cancellation'
        }, 
        {
            name:'Settings',
            path:'/sell/settings'
        },
         {
            name:'Print Template',
            path:'/sell/print'
        },
           {
            name:'Order List',
            path:'/sell/list'
        },
    ]

    return (
        <div style={{paddingLeft:'10%',display:'flex',alignItems:'center', height:'7vh',width:'100%',background:'black',marginTop:'3.8vh'}} >


        {links.map((i,k)=>(
        <Link
        key={k} 
        to={i.path}
        style={{
            margin:10,
            height:'7vh',
            padding:12,
            color:'white',
            textDecoration:'none',
            background:`${history.location.pathname===i.path?'#333':''}`
            }}
        >
        {i.name}
        </Link>
        ))}
        
        
        </div>
    )
}

export default withRouter(Nav)
