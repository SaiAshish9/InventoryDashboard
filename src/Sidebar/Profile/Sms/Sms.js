import React from 'react'

import {Container,Table} from 'react-bootstrap'

const Sms = () => {


const headers=[
    'Customer Name',
    'Mobile',
    'Email',
    'Gender',
    'DOB'
]


    return (
        <Container style={{height:'75vh',width:'100%'}}>

<Container  style={{marginLeft:'3%',marginTop:'10vh'}}>
<div  style={{marginLeft:10,display:'flex'}}>

<p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
Customer Name
</p>
<input
type="text"
style={{
    height:'5vh',
    border:'2px solid #eee',
    boxShadow:'0.5px 0.5px 0.5px 1px #eee',
    color:'#999',
    outline:'none',
    paddingLeft:12,
    marginTop:-7,
    marginLeft:15
                }}
/>
</div>

<div  style={{marginLeft:10,marginTop:20,display:'flex'}}>

<p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
Content*
</p>
<textarea
rows={3}
style={{
    width:'12rem',
    border:'2px solid #eee',
    boxShadow:'0.5px 0.5px 0.5px 1px #eee',
    color:'#999',
    outline:'none',
    paddingLeft:12,
    marginTop:-12,
    marginLeft:60
                }}
/>
</div>



<button className='btn btn-primary'

style={{fontSize:12,
fontWeight:'bold',
borderRadius:20,
marginLeft:'20%',
boxShadow:'none',
color:'#f4f4f4',
height:'2.5rem',
width:'7rem'
}}>
SEND SMS
            </button> 
</Container>


<Container  style={{marginLeft:'3%',marginTop:'5vh'}}>

<Table >

<thead>
    <tr>
        {
            headers.map((i,k)=>(
            <th key={k} style={{fontSize:12,backgroundColor:'#333',color:'white',cursor:'pointer',borderRight:'0.5px solid #999'}}>
                {i}
            </th>   
            ))
        }
    </tr>
</thead>

<tbody>


{
    [...Array(4).keys()].map((i,k)=>(
<tr key={k}>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
            ARC
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
Male
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        </td>
    
    </tr>
    ))
}    
</tbody>

</Table>


</Container>


        </Container>
    )
}

export default Sms
