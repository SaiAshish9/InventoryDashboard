import React from 'react'

import {Link} from 'react-router-dom'

import {Container} from 'react-bootstrap'

const data=[
    {
        name:'DOCTOR NAME',
        options:['Local','Global']
    },
    {
        name:'CUSTOMER & DOCTOR NAME',
        options:['Schedule H1,X','All Sales']
    },
    {
        name:'CUSTOMER TYPE MANDATORY',
        options:['Enable','Disable']
    },
    {
        name:'BATCH POPUP',
        options:['Enable','Disable']
    },
    {
        name:'ADDING DEPARTMENT',
        options:['Enable','Disable']
    },
    {
        name:'ENABLE ROUNDOFF',
        options:['Enable','Disable']
    },
]


const Sales = () => {
    return (
        <Container style={{position: 'relative',bottom:'20vh',flexWrap:'wrap', width:'100%',display:'flex',flexDirection:'column',justifyContent:'space-around',height:'60vh'}}>
            
{
    data.map((i,k)=>(


<div key={k} style={{margin:50}}>

<p style={{fontWeight:'bold',fontSize:13,color:'#999'}}>
    {i.name}
</p>

<input
type='radio'
id={i.options[0]}
/>
<label htmlFor={i.options[0]}>
   <p style={{fontSize:12,fontWeight:'bold',margin:'0 10px',position:'relative',bottom:3}}>
   {i.options[0]}
       </p> 
</label>

<input
type='radio'
id={i.options[1]}
/>
<label htmlFor={i.options[1]}>
<p style={{fontSize:12,fontWeight:'bold',margin:'0 10px',position:'relative',bottom:3}}>
{i.options[1]}
       </p> </label>

<br/>

<Link
    style={{
        color:'white',
        background:'#00a5e3',
        textDecoration: 'none',
        width:'8rem',
        height:'1.5rem',
        borderRadius:20,
        fontSize:12,
        fontWeight:'bold',
        textAlign:'center',
        padding:'6px 20px',
        marginRight:15,
        marginTop:30
        }}
    >
Save
    </Link>

</div>

    ))
}




        </Container>
    )
}

export default Sales
