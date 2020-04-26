import React from 'react'

import {Link} from 'react-router-dom'

import {Container} from 'react-bootstrap'

const options=[
    'Numeric Series',
    'Custom Series',
    'Manual Series'
]

const BillSeries = () => {
    return (

<Container>


<div className='container' style={{display: 'flex', alignItems:'center',justifyContent:'space-around'}}>


{
    options.map((i,k)=>(
<div key={k} style={{position:'relative',bottom:'8vh'}}>
 
 <input style={{background:'white',cursor:'pointer',color:'white'}} id={i} type='checkbox' name='series' value={i}/>

 <label htmlFor={i}>
     <h6 style={{marginLeft:12,fontSize:18,color:'#333'}}>
     {i}
     </h6>
 </label>

</div>
    ))
}




<Link
    style={{
        color:'white',
        background:'#00a5e3',
        textDecoration: 'none',
        width:'8rem',
        height:'2.7rem',
        borderRadius:20,
        fontWeight:'bold',
        textAlign:'center',
        padding:'10px 20px',
        marginRight:15,
        marginTop:'-20vh'

        }}
    >
Save
    </Link>


</div>

</Container>

       
    )
}

export default BillSeries
