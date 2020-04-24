import React from 'react'

import {withRouter,Link} from 'react-router-dom'

import {Navbar, Nav} from 'react-bootstrap'


const Navbar1 = ({history}) => {

    const links=[
        {
          name:'Sale',
          path:'/sell/1'
        },
        {
          name:'History',
          path:''
        },
        {
          name:'Return List',
          path:'/sell/2'
        },
        {
          name:'Cancellation',
          path:'/sell/3'
        },
        {
          name:'Settings',
          path:''
        },{
          name:'Print Template',
          path:''
        },{
          name:'Order List',
          path:'/sell/4'
        }
      ]

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="mt-5">
        <Nav className="fill">


          {
            links.map((i,k)=>(
<Link to={i.path} key={k}
style={{color:`${history.location.pathname===i.path?'white':'#999'}`,margin:5}} 
>
{i.name}
</Link>
            ))
          }

          
          

        </Nav>
      </Navbar>
    )
}

export default withRouter(Navbar1)
