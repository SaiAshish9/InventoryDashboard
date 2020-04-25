import React,{useState} from 'react'

import {Container,Table} from 'react-bootstrap'

import {Link} from 'react-router-dom'

const Missed = () => {

const [current,setCurrent]=useState(0)

const headers=[
    'S.No',
    'Product',
    'Vendor',
    'Patient',
    'Quantity',
    'Price',
    'Ordered Date'
]



    return (
        <Container style={{height:'75vh',width:'100%'}}>

<Container  style={{display:'flex',marginLeft:'3%',marginTop:'5vh'}}>
<div style={{marginRight:85}}>

<p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
    Search
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

          

</Container>



<Container  style={{marginLeft:'3%',marginTop:'5vh'}}>

<Table>

<thead>
    <tr>
        {
            headers.map((i,k)=>(
            <th key={k} style={{fontSize:12,color:'#333',backgroundColor:'#eee',cursor:'pointer',borderRight:'0.5px solid #999'}}>
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
      [...Array(7).keys()].map((i,k)=>(
        <td key={k} style={{fontSize:12,backgroundColor:'white',color:'black',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
       thor
        </td>
      ))
  }
       
  
    </tr>
    ))
}    
</tbody>

</Table>

{
    [...Array(5).keys()].map((i,k)=>(
        <Link
        // to={current===0?"/order/missed":`/order/missed/${current}}`}
        onClick={()=>setCurrent(parseInt(i)%5)}
         style={{
            background:`${i==current?'#333':'white'}`,
            color:`${i!==current?'#333':'white'}`,
            border:`${i!==current?'0.2px solid #999':'#333'}`,
            margin:3,
            padding:5,
            fontSize:12,
            textDecoration:'none'
            }}>
{i+1}
        </Link>
    ))
}


</Container>





        </Container>
    )
}

export default Missed
