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
            path:'/sell/settings',
            path1:'/sell/settings/discount',
            path2:'/sell/settings/sales',
            path3:'/sell/settings/bill',
            path4:'/sell/settings/sms',
            path5:'/sell/settings/customer',
            path6:'/sell/settings/batch',

        },
         {
            name:'Print Template',
            path:'/sell/print'
        },
           {
            name:'Order List',
            path:'/sell/orderList',
            path1:'/sell/orderList/estimate',

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
            background:`${[i.path,i.path1,i.path2,i.path3,i.path4,i.path5,i.path6].includes(history.location.pathname) ?'#333':''}`
            }}
        >
        {i.name}
        </Link>
        ))}
        
        
        </div>
    )
}

export default withRouter(Nav)
