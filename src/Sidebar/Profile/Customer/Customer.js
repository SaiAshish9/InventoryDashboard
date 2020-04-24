import React from 'react'

import {Container,Table} from 'react-bootstrap'

const Customer = () => {


const headers=[
    'Customer Name',
    'Short Number',
    'Mobile',
    'Email',
    'Gender',
    'DOB',
    'Payment Type',
    'GSTIN No.',
    'Status'
]

const buttons=[
    'Customer Name',
    'Mobile',
    'Email Id'
]

    return (
        <Container style={{height:'75vh',width:'100%'}}>

<Container  style={{marginLeft:'3%',marginTop:'10vh',display:'flex'}}>
{
    buttons.map((i,k)=>(
<div key={k} style={{marginLeft:10}}>

<p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
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
    borderRadius:20,
    paddingLeft:12,
    marginTop:-4
            }}
/>
</div>
    ))
}



<button className='btn btn-primary'

style={{fontSize:12,
fontWeight:'bold',
borderRadius:20,
marginLeft:15,
boxShadow:'none',
color:'#f4f4f4',
height:'2.5rem',
width:'7rem'
}}>
                ADD NEW
            </button> 
</Container>


<Container  style={{marginLeft:'3%',marginTop:'5vh'}}>

<Table>

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
    [...Array(7).keys()].map((i,k)=>(
<tr key={k}>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
            ARC
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
            xyz@gmail.com
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:`${i%2==0?'white':'#eee'}`,color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        Active
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

export default Customer
