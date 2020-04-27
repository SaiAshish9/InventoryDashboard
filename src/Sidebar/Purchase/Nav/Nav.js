import React from 'react'

import {Link,withRouter} from 'react-router-dom'


const Nav = ({history}) => {

	const links = [
		{
			name : 'Purchase',
			path : '/purchase'
		},
		{
			name : 'History',
			path : '/purchase/history'
		},
		{
			name : 'Return List',
			path : '/purchase/return'
		},
		{
			name : 'Cancel List',
			path : '/purchase/cancel'
		}
	];
	
	

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
