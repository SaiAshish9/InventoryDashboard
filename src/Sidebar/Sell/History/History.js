import React from 'react'

import {Container,Table} from 'react-bootstrap'

const History = () => {


const headers=[
    'Bill No.',
    'Bill Date',
    'Customer',
    'Customer Mobile',
    'Doctor',
    'Delivery Status',
    'Disc.',
    'Price',
    '',
    '',
    ''
]

const buttons=[
    'Edit',
    'Return',
    'Cancel'
]



    return (
        <Container style={{height:'75vh',width:'100%'}}>

<Container  style={{marginLeft:'3%',marginTop:'10vh'}}>
<p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
Select Anyone
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
    paddingLeft:12
            }}
/>

<button className='btn btn-primary'

style={{fontSize:12,
fontWeight:'bold',
borderRadius:20,
marginLeft:15,
boxShadow:'none',
marginTop:-10,
color:'#f4f4f4'

}}>
                ADD VENDOR
            </button> 
</Container>


<Container  style={{marginLeft:'3%',marginTop:'5vh'}}>

<Table>

<thead>
    <tr>
        {
            headers.map((i,k)=>(
            <th key={k} style={{fontSize:12,backgroundColor:'#999',color:'white',cursor:'pointer',borderRight:'0.5px solid #fff'}}>
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

{
    [...Array(headers.length-3).keys()].map((a,b)=>(

        <td key={b} style={{fontSize:12,backgroundColor:'white',color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
            groot
        </td>
    ))
}




{
    buttons.map((a,b)=>(
        <td key={b} style={{fontSize:12,backgroundColor:'white',color:'#333',borderRight:'0.1px solid #999',fontWeight:'bold'}}>

<button className='btn btn-primary'

style={{fontSize:12,
fontWeight:'bold',
borderRadius:20,
marginLeft:15,
boxShadow:'none',
marginTop:-10,
color:'#f4f4f4'

}}>
                {a}
            </button> 
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

export default History
