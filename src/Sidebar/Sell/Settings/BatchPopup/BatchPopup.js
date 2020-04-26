import React,{useState} from 'react'
import {Link} from 'react-router-dom'

import {Container} from 'react-bootstrap'

import {GrCheckbox} from 'react-icons/gr'

import {IoMdCheckbox} from 'react-icons/io'

const options=[
    'AVAIL QTY',
    'BATCH',
    'EXPIRY',
    'GST%',
    'EACH MRP', 
    'MRP', 
    'UNITS/STRIP',
    'PROFIT % ON MRP', 
    'RACK/BOX NO',
    'GENERIC'
]


const BatchPopup = () => {

    const [selectedKey,setSelectedKey]=useState([])

    return (
        <div>

<Container style={{textAlign:'center',paddingTop:10,width: '20%',height: '60vh',background:'white',position:'relative',bottom:'18vh'}}>

<p style={{fontWeight:'bold',fontSize:12,margin:10}}>
SELECT THE FIELD TO HIDE
</p>

{
    options.map((i,k)=>(
<p  key={k} style={{textAlign:'start',color:'#999',fontSize:10,fontWeight:'bold',marginTop:15}}>

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

{i}
</p>
    ))
}


</Container>
        </div>
    )
}

export default BatchPopup
 