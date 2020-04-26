import React from 'react'

import {Container} from 'react-bootstrap'


const buttons=[
    'Overall Discount',
    'Amount Based Discount',
    'Customerwise Discount',
    'Productwise Discount',
    "Product/Customer Wise Discount",
    'slab' 
]

const Discount = () => {
    return (
        <Container style={{width: '100%'}}>
            

<div style={{padding:15, borderBottom:'1px solid #999',background:'white',width: '100%',height:'20vh',position:'relative',bottom:'10vh'}}>

<h6 style={{fontWeight:'bold',color:'#999'}}>
    Maximum Discount
</h6>

<div style={{display:'flex'}}>


<input id="enable" type="radio"  name="option" value="enable" style={{marginTop:10}}/>
<label htmlFor="enable">
<p style={{fontSize:12,fontWeight:'bold',margin:7}}>
        Enable
    </p>
</label> 

    <input id="disable" type="radio"  name="option" value="disable" style={{marginTop:10}}/>
    <label htmlFor="disable">
    <p style={{fontSize:12,fontWeight:'bold',margin:7}}>
        Disable
    </p>
    </label>
<button className='btn btn-dark' 
style={{boxShadow:'none',fontSize:12,fontWeight:'bold',position:'relative',bottom:30}} >
SAVE
</button>

</div>

<input
type="text"
style={{
    position:'relative',
    bottom:10, 
    borderRadius:10,
    width:'4rem',
    textAlign:'center',
    fontSize: 12,
    display:'bold',
    padding:3, 
    outline:'none',
    border:'1px solid #999' 
    }}
/>


</div>
<div style={{background:'white',width: '100%',height:'20vh',position:'relative',bottom:'10vh'}}>

<div style={{display:'flex',justifyContent:'space-around'}}>

{
    buttons.map((i,k)=>(
        <div key={k}>
    <input id={k} type="radio"  name="discount" value={i} style={{marginTop:10}}/>
    <label  htmlFor={k}>
    <p style={{fontSize:12,fontWeight:'bold',margin:7}}>

{i}
</p>
    </label>
        </div>
    ))
}

</div>

<p style={{fontSize:12,fontWeight:'bold',margin:10,marginLeft:15}}>

Discount %
</p>

<input
placeholder="10.0"
type="text"
style={{
    position:'relative',
    bottom:0, 
    left:15,
    width:'7rem',
    textAlign:'center',
    fontSize: 12,
    display:'bold',
    padding:3, 
    outline:'none',
    border:'1px solid #999' 
    }}
/>

</div>

        </Container>
    )
}

export default Discount
