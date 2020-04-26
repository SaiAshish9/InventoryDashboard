import React,{useState} from 'react'

import {Container} from 'react-bootstrap'

import { DatePicker,Calendar } from "@y0c/react-datepicker";

import "../../Order/Order/calendar.scss";


import {FaRegCalendarAlt} from 'react-icons/fa'

const Sale = () => {

  const [show,setShow]=useState(false)
  const [value,setValue]=useState({})

  const handleInput =e=>(

    setValue({...value,[e.target.name]:e.target.value})

)
const toggleShow=()=>   setShow(!show)

  const inputs=[
    'Customer Name',
    'Phone Number', 
    'ID',
    'Doctor Name',
    'Doctor Mobile'
]

const inputs1=[
  'Product',
  'Quantity',
  'Batch',
  'Discount',
  'Price'
]

const data=[
  {
  inputs:inputs,
  btn:'Add New'
},
{
  inputs:inputs1,
  btn:'Add '
},
]


const collection=[
  'Total',
  'GST Total',
  'Discount',
  'Discount Value',
  'Roundoff Value'
]

const collection1=[
  'Amount Received',
  'To be Returned'
]

const checkboxes=[
  'Credit','Multiple'
]

const data1=[
  {
    name:'Payment Type',
    checkboxes:checkboxes
  },
  {
    name:'Return Type',
    checkboxes:['Counter','Home Delivery']
  }
]


    return (

<div>

{data.map((a,b)=>(
  <Container key={b} style={{marginTop:'5vh'}}>
     
  <div style={{display:'flex',justifyContent:'space-around'}}>

   {
       a.inputs.map((i,k)=>(
   <div key={k} style={{marginLeft:10}}>
   <p style={{fontSize:13,color:'#999',fontWeight:'bold'}}>
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
       marginTop:-4,
       paddingRight:29,
               }}
   />
   </div>
       ))
   }
   
 
   </div>
<div style={{display:'flex',justifyContent:'center'}}>
<button className='btn btn-primary'
     style={{fontSize:12,
     fontWeight:'bold',
     borderRadius:20,
     boxShadow:'none',
     color:'#f4f4f4',
     height:'2.5rem',
     width:'7rem',
     textAlign:'center'
     }}>
                     {a.btn}
                 </button>  
</div>


   </Container>
))}



<Container style={{marginTop:'2vh',display:'flex',justifyContent:'center'}}>








<Container style={{ marginBottom:'5vh',background:'white',paddingTop:30,width:'30%', display:'flex',flexDirection:'column',justifyContent:'center'}}>





<div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginBottom:30}}>
        <p style={{fontSize:13,color:'#999',fontWeight:'bold'}}>
        Bill Date
        </p>
        <input
        type="text"
        name='calendar'
        onChange={handleInput}
        value={value['calendar']}
        style={{
            height:'5vh',
            border:'2px solid #eee',
            boxShadow:'0.5px 0.5px 0.5px 1px #eee',
            color:'#999',
            outline:'none',
            borderRadius:20,
            paddingLeft:12,
            paddingRight:29,
            marginTop:-4                    }}
        
        />

<FaRegCalendarAlt
                onClick={()=>{
                    setShow(!show)      
                }}
                style={{
                  color:'#999',
                  fontWeight:'bold',
                  position:'relative',
                  bottom:27,
                  left:'5.2rem',
                  cursor:'pointer'}}/>


</div>




    <div 
    style={{position:'absolute',
    left:'39%',
    top:'85vh'}}>
                  <Calendar
                  show={show}
                  onChange={
                     (e)=> {
                         console.log(e)
                         const date=`${e['$y']}-${e['$M']}-${e['$D']}`
                         setValue({...value,['calendar']:date})
                        toggleShow()
                        }
                  } 
                  />
                  </div>







{
  collection.map((i,k)=>(
    <Container key={k} style={{paddingTop:10, background:'#fff', display:'flex',justifyContent:'space-between'}}>

<p style={{fontSize:12,color:'#999',fontWeight:'bold'}}>
  {i}
</p>

<p style={{fontSize:12,color:'#999',fontWeight:'bold'}}>
  0.0
</p>
    </Container>
  ))
}

<Container style={{height:'4vh',background:'#00a5e3', display:'flex',justifyContent:'space-between',alignItems:'center'}}>

<p style={{ marginTop:15,fontSize:15,color:'#fff',fontWeight:'bold'}}>
  NET VALUE
</p>

<p style={{marginTop:15,fontSize:15,color:'#fff',fontWeight:'bold'}}>
  0.0
</p>
    </Container>



    {
  collection1.map((i,k)=>(
    <Container key={k} style={{paddingTop:10, background:'#fff', display:'flex',justifyContent:'space-between'}}>

<p style={{fontSize:12,color:'#999',fontWeight:'bold'}}>
  {i}
</p>

<input
   type="text"
   style={{
       height:'3vh',
       border:'2px solid #eee',
       boxShadow:'0.5px 0.5px 0.5px 1px #eee',
       color:'#999',
       outline:'none',
       borderRadius:20,
       paddingLeft:15,
       width:'6rem'
               }}
   />
    </Container>
  ))
}


{
  data1.map((x,y)=>(
<div  key={y} style={{ background:'#fff',borderLeft:'2px solid white',borderRight:'2px solid white'}}>
  <p style={{color:'#999',fontWeight:'bold',background:'#fff',padding:3}}>
    {x.name}
  </p>

<div style={{ position:'relative',bottom:5, background:'#fff',display:'flex',justifyContent:'space-between',alignItems:'center'}}>

{
  x.checkboxes.map((a,b)=>(

<div key={b} style={{padding:'0 10px',cursor:'pointer'}}>
<input
type="radio"
name={x.name}
id={a}
value={a}
/>
<label htmlFor={a} style={{position:'relative',left:5,bottom:1}}>
  {a}
</label>
</div>

  ))
}


</div>

</div>    
  ))
}




</Container>




</Container>



</div>

      
    )
}

export default Sale
