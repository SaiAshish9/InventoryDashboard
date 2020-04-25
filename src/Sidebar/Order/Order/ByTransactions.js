import React,{useState} from 'react'
import {Container} from 'react-bootstrap'

import {FaRegCalendarAlt} from 'react-icons/fa'
import { DatePicker,Calendar } from "@y0c/react-datepicker";
// import '@y0c/react-datepicker/assets/styles/calendar.scss';

import "./calendar.scss";

const buttons=[
    'FROM',
    'TO',
    'REORDER FACTOR'
]

const ByTransactions = () => {

const [show,setShow]=useState(false)
const [show1,setShow1]=useState(false)
const [value,setValue]=useState({})


const toggleShow=()=>   setShow(!show)

const handleInput =e=>(

    setValue({...value,[e.target.name]:e.target.value})

)

    return (

        <React.Fragment>
        <Container  style={{width: '100%',display:'flex',justifyContent:'space-around',marginTop:-120}}>
        {
            buttons.map((i,k)=>(
        <div key={k}>
        <p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
        {i}
        </p>
        <input
        type="text"
        name={i}
        onChange={handleInput}
        value={value[i]}
        style={{
            height:'6vh',
            border:'2px solid #eee',
            boxShadow:'0.5px 0.5px 0.5px 1px #eee',
            color:'#999',
            outline:'none',
            borderRadius:20,
            paddingLeft:12,
            paddingRight:29,
            marginTop:-4
                    }}
        
        />
        {
            k<2&&(<FaRegCalendarAlt
                onClick={()=>{
                    if(k==0)
                    setShow(!show)
                    else
                    setShow1(!show1)
                }}
                style={{color:'#999',fontWeight:'bold',position:'relative',right:30,cursor:'pointer'}}/>)
        }

        </div>
            ))
        }
      
        </Container>
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
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
                        SEARCH
                    </button>  
                  
                  <div style={{position:'absolute',left:100,top:'48vh'}}>
                  <Calendar
                  show={show}
                  onChange={
                     (e)=> {
                         console.log(e)
                         const date=`${e['$y']}-${e['$M']}-${e['$D']}`
                         setValue({...value,['FROM']:date})
                        toggleShow()
                        }
                  } 
                  />
                  </div>
                  

                  <div style={{position:'absolute',left:'31.5vw',top:'48vh'}}>
                  <Calendar
                  show={show1}
                  onChange={
                     (e)=> {
                         console.log(e)
                         const date=`${e['$y']}-${e['$M']}-${e['$D']}`
                         setValue({...value,['TO']:date})
                        setShow1(!show1)
                        }
                  } 
                  />
                  </div>



        </div>
           



    </React.Fragment>
    )
}

export default ByTransactions
