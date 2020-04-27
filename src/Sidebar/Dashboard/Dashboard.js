import React,{useEffect,useState} from 'react'

import {Container,Row,Col,ProgressBar,Table} from 'react-bootstrap'

import {AiOutlineUsergroupDelete} from 'react-icons/ai'

import md5 from 'md5'

import shuffle from 'shuffle-array'

import Payment from '../../Assets/images/payment.jpg'
import Payment1 from '../../Assets/images/payment1.jpg'
import Payment2 from '../../Assets/images/payment2.jpg'


const flagUrl='https://restcountries.eu/rest/v2/all'


const Dashboard = () => {

const images=shuffle([Payment,Payment1,Payment2])

const [flag,setFlagUrl]=useState(null)

const [avatar,setAvatar]=useState(null)


useEffect(()=>(

fetch(flagUrl)
.then(res=>res.json())
.then(arr=>{
    setFlagUrl(arr[parseInt(Math.random()*arr.length)]['flag'])
    setAvatar(`http://gravatar.com/avatar/${md5(Math.random())}?d=identicon`)
})

),[])



    const headers=[
        'Time',
        'Sales',
        'Return',
        'Net'
    ]
    

    const headers1=[
        <AiOutlineUsergroupDelete style={{color:'#999',fontSize:'1.3rem',fontWeight:'bold'}}/>,
        'User',
        'Country',
        'Usage',
        'Payment Method',
        'Activity'
    ]
    

    return (
        <Container style={{marginTop:'10vh',height:'70vh',width:'100%'}}>
            

<Row>

    <Col>

<p style={{
    textAlign:'start',
    fontWeight:'bold',
    color:'#999'
}} >
    Medicine Ratio
</p>



{
    [...Array(6).keys()].map((i,k)=>(
<div key={k}style={{display:'flex'}}>

<p style={{color:'#999'}}>
Med {k+1}
</p>

<div style={{display:'flex',flexDirection:'column',width:'60%'}}> 
<div style={{width:'100%',marginLeft:20,marginTop:9}}>
<ProgressBar variant="primary" animated 
now={Math.floor(Math.random()*100)}
style={{height:3}} />
</div>

<div style={{width:'100%',marginLeft:20,marginTop:2}}>
<ProgressBar animated variant="danger"
now={Math.floor(Math.random()*100)}
style={{height:3}} />
</div>

</div>
</div>

    ))
}


    </Col>

<Col>

<p style={{ paddingLeft:30,color:'#fff',background:'black',padding:10,width:'100%'}}>
Total Sales
</p>


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
        [...Array(headers.length).keys()].map((i,k)=>(
            <td key={k} style={{fontSize:12,backgroundColor:'#fff',color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
            </td>
        ))
    }

     
    </tr>
    ))
}    
</tbody>

</Table>


</Col>

</Row>



<Table style={{marginTop:'5vh'}}>

<thead>
    <tr>
        {
            headers1.map((i,k)=>(
            <th key={k} style={{fontWeight:'bold',fontSize:12,backgroundColor:'#eee',color:'#999',cursor:'pointer'}}>
                {i}
            </th>   
            ))
        }
    </tr>
</thead>

<tbody>


{
    [...Array(3).keys()].map((i,k)=>(
<tr key={k}>

<td key={k} style={{fontSize:12,backgroundColor:'#fff',color:'#999',
            fontWeight:'bold'}}>
<img
 src={avatar}
 style={{
     height:30,
     width:30,
     borderRadius:'50%'
 }}
 />
</td>

            <td key={k} style={{fontSize:12,backgroundColor:'#fff',color:'#999',
            fontWeight:'bold'}}>
  Tony
  
            </td>


            <td key={k} style={{fontSize:12,backgroundColor:'#fff',color:'#999',
            fontWeight:'bold',textAlign:'center'}}>
<img
 src={flag}
 style={{
     height:20,
     width:30, 
     marginTop:5, 
     textAlign:'center'
     }}
 />  
            </td>



            <td key={k} style={{fontSize:12,backgroundColor:'#fff',color:'#999',
            fontWeight:'bold'}}>

<div style={{width:'50%',marginLeft:20,marginTop:12}}>
<ProgressBar animated
 variant={['warning','success','danger','primary','secondary','dark'][parseInt(Math.random()*6)]}
now={Math.floor(Math.random()*100)}
label={`${Math.floor(Math.random()*100)}%`}   
style={{height:11,textAlign:'center',fontSize:10}}
 />
</div>

            </td>


            
            <td key={k} style={{fontSize:12,backgroundColor:'#fff',color:'#999',
            fontWeight:'bold'}}>
  
  <img
 src={images[k]}
 style={{
     height:20,
     width:30, 
     marginTop:5,
     textAlign:'center'
     }}
 />  

            </td>


            
            <td key={k} style={{fontSize:12,backgroundColor:'#fff',color:'#999'}}>
 <p style={{fontWeight:'bold'}}>
     Last Login<br/>
<span style={{fontSize:10,backgroundColor:'#fff'}}>
    {Math.floor(Math.random()*58)+1} seconds ago
    </span>  
    </p>

            </td>

     
    </tr>
    ))
}    
</tbody>

</Table>

        </Container>
    )
}

export default Dashboard
