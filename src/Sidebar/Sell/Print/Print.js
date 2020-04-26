import React from 'react'

import {Container} from 'react-bootstrap'

const Print = () => {


const buttons =[
  'Template Name', 'Paper Type'
]

const btns=[
  'Load' ,'Save'
]

    return (
        <div
        style={{
          borderTop:'0.07px solid #fff',
          height:'85vh',
          background:'#333', 
          display:'flex'
        }}
        >

      <div style={{
        height:'85vh',
        background:'white',
        width:'27%'
      }}>

<p style={{width:'100%',marginTop:'5vh',fontWeight:'bold',
fontSize:12,
color:'white', 
background:'#999', 
padding:3
}}>
Template Details
</p>


{
  buttons.map((i,k)=>(
<Container  key={k}style={{textAlign:'center',marginTop:'6vh'}}>
<p style={{textAlign:'center',fontSize:13,color:'#999',fontWeight:'bold'}}>
    {i}
</p>
<input
type="text"
style={{
    height:'6vh',
    border:'2px solid #eee',
    boxShadow:'0.5px 0.5px 0.5px 1px #eee',
    color:'#999',
    outline:'none',
    borderRadius:20
                }}
/>
</Container>
  ))
}

<Container style={{ marginTop:40,display:'flex',justifyContent:'space-around'}}>


 {
   btns.map((i,k)=>(

<button className='btn btn-primary'
key={k}
style={{fontSize:12,
fontWeight:'bold',
borderRadius:20,
marginLeft:15,
boxShadow:'none',
marginTop:-10,
color:'#f4f4f4'

}}>
{i}            </button>  
   ))
 }



</Container>



      </div>


      <div style={{
        height:'85vh',
        background:'white',
        width:'35%', 
        marginLeft:'20%'
      }}>

      </div>

        </div>
    )
}

export default Print
