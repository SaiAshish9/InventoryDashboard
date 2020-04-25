import React from 'react'

import {Link,withRouter} from 'react-router-dom'


const Nav = ({history}) => {

    const links=[
        {
            name:'Order',
            path:'/order',
            path1:'/order/reorder',
            path2:'/order/byTransactions'
        },
        {
            name:'List',
            path:'/order/orderList'
        },
        {
            name:'Missed Sales Order',
            path:'/order/missed'
        },{
            name:'Settings',
            path:'/order/settings'
        }
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
            background:`${[i.path,i.path1,i.path2].includes(history.location.pathname)?'#333':''}`
            }}
        >
        {i.name}
        </Link>
        ))}
        
        
        </div>
    )
}

export default withRouter(Nav)
