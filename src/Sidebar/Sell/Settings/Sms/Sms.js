import React from 'react'

import {Link} from 'react-router-dom'

import {Container} from 'react-bootstrap'

const Sms = () => {
    return (
        <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent:'center',position:'relative',bottom:'10vh'}}>


<p style={{fontSize:13,color:'#999',fontWeight:'bold'}}>
    SMS Options
</p>

<div>

<input id="yes" type="radio" name="choice" value="yes"/>
<label htmlFor="yes">
   <h6 style={{color:'#999',margin:'0 10px'}}>
   yes
   </h6>
    
</label>

<input id="no" type="radio" name="choice" value="no"/>
<label htmlFor="no">
<h6 style={{color:'#999',margin:'0 10px'}}>
   no
   </h6>
    </label>

</div>


<p style={{fontSize:13,color:'#999',fontWeight:'bold',margin:'20px 0'}}>
    CONTENT
</p>

<textarea
rows={7}
cols={30}
style={{
    outline:'none',
    background:'white',
    margin:'0px 10px'
}}
/>


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
        marginTop:20
            }}
    >
Save
    </Link>

        </div>
    )
}

export default Sms
