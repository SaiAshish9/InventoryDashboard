import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import {Container} from 'react-bootstrap'

import {GrCheckbox} from 'react-icons/gr'

import {IoMdCheckbox} from 'react-icons/io'

const Print = () => {

const [selectedKey,setSelectedKey]=useState([])



    return (
        <Container  style={{width: '100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

<Container style={{width: '40%',height: '60vh',background:'white',position:'relative',bottom:'22vh',borderTop:'5px solid #333'}}>

<p style={{fontWeight:'bold',fontSize:12,margin:10}}>
Select a type of printer and format for printing point of bill
</p>

{
    [...Array(10).keys()].map((i,k)=>(
<p  key={k} style={{color:'#999',fontSize:10,fontWeight:'bold',marginLeft:10,marginTop:15}}>

{
    selectedKey.includes(k)?(
<Link 
 onClick={()=>{
    setSelectedKey(selectedKey.filter(x=>x!==k))
    }}
>
<IoMdCheckbox
style={{cursor:'pointer',color:'#333',margin:7,marginTop:4}}/>
</Link>

    ):(
        <GrCheckbox 
        onClick={()=>{
            setSelectedKey([...selectedKey,k])
            }}
             style={{cursor:'pointer',color:'#999',margin:7,marginTop:4}}/>
    )
}    

    Dot Matrix - 4 inch paper roll
</p>
    ))
}


</Container>


<Link
                style={{
                    color:'white',
                    background:'#00a5e3',
                    textDecoration: 'none',
                    width:'8rem',
                    height:'2.7rem',
                    borderRadius:20,
                    fontWeight:'bold',
                    textAlign:'center',
                    padding:'10px 10px',
                    marginRight:15,
                    marginTop:'-20vh'
        
                    }}
                >
Apply
                </Link>
        </Container>
    )
}

export default Print
