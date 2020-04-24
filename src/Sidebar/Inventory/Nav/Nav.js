import React from 'react'

import {withRouter,Link} from 'react-router-dom'

import {Navbar, Nav} from 'react-bootstrap'


const Navbar1 = ({history}) => {

    const links=[
        {
          name:'Inventory',
          path:'/inventory'
        },
        {
          name:'Update Inventory',
          path:'/inventory2'
        },
        {
          name:'Inventory Settings',
          path:'/inventory3'
        },
        {
          name:'Product Master',
          path:'/inventory4'
        },
        {
          name:'Self Consumption',
          path:'/inventory5'
        },{
          name:'Barcode',
          path:'/inventory6'
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
