import React from 'react'

import {Container,Table} from 'react-bootstrap'

const Order = () => {


const headers=[
    'Customer Name',
    'Product',
    'Qty',
    'Batch',
    'Dis %',
    'Expiry',
    'MRP'
]



    return (
        <Container style={{position:'relative',bottom:'20vh',height:'75vh',width:'100%'}}>



<button className='btn btn-primary'

style={{fontSize:12,
fontWeight:'bold',
borderRadius:20,
marginLeft:'45%',
boxShadow:'none',
marginTop:40,
color:'#f4f4f4',
padding:'10px 20px'

}}>
                ADD NEW
            </button> 

<Container  style={{marginLeft:'-5%',marginTop:'5vh'}}>

<Table>

<thead>
    <tr>
        {
            headers.map((i,k)=>(
            <th key={k} style={{fontSize:12,backgroundColor:'#fff',color:'#333',cursor:'pointer',borderRight:'0.5px solid #999'}}>
                {i}
            </th>   
            ))
        }
    </tr>
</thead>

<tbody>


{
    [...Array(1).keys()].map((i,k)=>(
<tr key={k}>
      
      {
          [...Array(headers.length).keys()].map((i,k)=>(
  <td style={{ fontSize:12,width:'1rem',backgroundColor: 'white',borderRight     : '0.5px solid #999'}}>

<input
type="text"
style={{
    outline:'none',
    border:'2px solid #eee', 
    padding:2, 
    borderRadius:7
}}

/>
</td>       


          ))
      }
      

      
    </tr>
    ))
}    
</tbody>

</Table>


</Container>


        </Container>
    )
}

export default Order
