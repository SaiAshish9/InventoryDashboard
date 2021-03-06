    import React from 'react'

    import {Link,withRouter} from 'react-router-dom'
    
    
    const Nav = ({history}) => {
    
        const links=[
            {
                name:'My drive',
                path:'/reports'
            },
            {
                name:'Recent',
                path:'/reports/recent'
            },
            {
                name:'Bin',
                path:'/reports/bin'   
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
    