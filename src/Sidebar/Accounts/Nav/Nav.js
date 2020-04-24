import React from 'react'

import {withRouter,Link} from 'react-router-dom'

import {Navbar, Nav} from 'react-bootstrap'


const Navbar1 = ({history}) => {

    const links=[
        {
          name:'Cash Management',
          path:'/account',
          path1:'/account/till'
        },
        {
          name:'Customer Receipt',
          path:'/account2'
        },
        {
          name:'Cheque',
          path:''
        },
        {
          name:'Vendor Payment',
          path:'/account4'
        },
        {
          name:'Vendor Payment History',
          path:'/account5'
        },{
          name:'Financial Year Settings',
          path:'/account6'
        }
      ]

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="mt-5">
        <Nav className="fill">


          {
            links.map((i,k)=>(
<Link to={i.path} key={k}
style={{color:`${history.location.pathname===i.path||history.location.pathname===i.path1?'white':'#999'}`,margin:5}} 
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
