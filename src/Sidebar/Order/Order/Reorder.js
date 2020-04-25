import React from 'react'

import {Container,Table} from 'react-bootstrap'

const Reorder = () => {


    const headers=[
        'S.No',
        'Vendor Name',
        'Product Name',
        'Min Reorder',
        'Stock',
        'Max Reorder',
        'Suggested Qty',
        'Units/strip',
        'Free Qty',
        'No Of Strips',
        'Purchase Price/Strip',
        'MRP/Strip',
        'Amount',
        'GST %'
    ]

    return (
        <div style={{height:'75vh',width:'100%'}}>
       
       <div style={{position:'relative',bottom:'18vh',left:'9vw'}} >
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
            paddingLeft:12,
            marginTop:-4
                    }}
        />
        </div>


        <Container  style={{marginLeft:'3%',marginTop:'-12vh'}}>

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
    [...Array(5).keys()].map((i,k)=>(
<tr key={k}>
       
       
        {
            [...Array(14)].map((i,k)=>(
                <td key={k} style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
                hulk
                </td>
            ))
        }
    </tr>
    ))
}    
</tbody>

</Table>


</Container>

        </div>
    )
}

export default Reorder
