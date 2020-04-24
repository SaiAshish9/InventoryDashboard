import React from 'react'

import {Container,Table} from 'react-bootstrap'

const VendorList = () => {


const headers=[
    'Vendor Name',
    'Mobile/Phone Number',
    'Email ID',
    'Drug License No',
    'Tin No',
    'GSTIN No',
    'Status'
]



    return (
        <Container style={{height:'75vh',width:'100%'}}>

<Container  style={{marginLeft:'3%',marginTop:'10vh'}}>
<p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
    Vendor Name
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
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
            ARC
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
            9443050047
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
            xyz@gmail.com
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
            ADBJBUGVVGXFD
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
            34567890987654
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
            67890987654
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
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

export default VendorList
