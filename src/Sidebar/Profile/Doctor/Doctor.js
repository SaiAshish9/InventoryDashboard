import React from 'react'

import {Container,Table} from 'react-bootstrap'

const Doctor = () => {


const headers=[
    'S.No',
    'Doctor Name',
    'Short Name',
    'Mobile/Phone Number',
    'Doctor Commission %',
    'Address',
    'GSTIN No'
]



    return (
        <Container style={{height:'75vh',width:'100%'}}>

<Container  style={{display:'flex',marginLeft:'3%',marginTop:'10vh'}}>
<div style={{marginRight:85}}>

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
                SEARCH
            </button> 
</div>

<div style={{marginRight:55}}>
    
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
                SEARCH
            </button> 
</div>

<button className='btn btn-primary'

style={{fontSize:12,
fontWeight:'bold',
borderRadius:20,
marginLeft:15,
boxShadow:'none',
marginTop:30,
color:'#f4f4f4',
height:'5vh'

}}>
                SET
            </button> 

            <button className='btn btn-primary'

style={{fontSize:12,
fontWeight:'bold',
borderRadius:20,
marginLeft:15,
boxShadow:'none',
marginTop:30,
color:'#f4f4f4',
height:'5vh'


}}>
                RESET
            </button>           

</Container>


<button className='btn btn-primary'

style={{fontSize:12,
fontWeight:'bold',
borderRadius:20,
marginLeft:'45%',
boxShadow:'none',
marginTop:40,
color:'#f4f4f4'

}}>
                ADD NEW
            </button> 

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
    [...Array(5).keys()].map((i,k)=>(
<tr key={k}>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
            xyz
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
        </td>
        <td style={{fontSize:12,backgroundColor:'#eee',color:'#999',borderRight:'0.5px solid #999',fontWeight:'bold'}}>
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

export default Doctor
