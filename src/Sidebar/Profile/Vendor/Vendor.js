import React from 'react'

import {Container} from 'react-bootstrap'

const Vendor = () => {

const list1=[
'Company Name',
'Landmark',
'Landline',
'Contact Person Name',
'Contact Person Mobile 2',
'Credit No. of Drugs',
'Address',
'Drug License No',
'Email Id',
'Designation',
'Tax',
'State'
]

const list2=[
    'Area Name',
    'Tin no.',
    'Discount %',
    'SMS',
    'Location Type',
    'Status Code',
    'City',
    'GSTIN No.',
    'Contact Person Mobile 1',
    'Payment Type',
    'Vendor Type'
]

    return (
<div style={{height:'85vh',width:'100%'}}>

   
        <div style={{display:'flex',height:'80vh',width:'100%',marginTop:15}}>

        
            

            <div style={{alignItems:'center',display:'flex', flexDirection:'column',flexWrap:'wrap',justifyContent:'space-between',height:'70vh',width:'50%'}}>

{
    list1.map((i,k)=>(
<div key={k} style={{margin:5}}>
<p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
    {i}
</p>
<input
type="text"
style={{
    height:'6vh',
    marginTop:-10,
    border:'2px solid #eee',
    boxShadow:'0.5px 0.5px 0.5px 1px #eee',
    color:'#999',
    outline:'none',
    borderRadius:20,
    paddingLeft:12
            }}
/>
</div>
    ))
}



            </div>

            <div style={{alignItems:'center',display:'flex', flexDirection:'column',flexWrap:'wrap',justifyContent:'space-between',height:'70vh',width:'50%'}}>
{
    list2.map((i,k)=>(
<div key={k} style={{margin:5}}>
<p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
    {i}
</p>
<input
type="text"
style={{
    height:'6vh',
    marginTop:-10,
    border:'2px solid #eee',
    boxShadow:'0.5px 0.5px 0.5px 1px #eee',
    color:'#999',
    outline:'none',
    borderRadius:20,
    paddingLeft:12
            }}
/>
</div>
    ))
}
</div>
</div>

<button className='btn btn-primary'

style={{fontSize:10,
fontWeight:'bold',
position:'relative',
bottom:70,
left:'47%',
borderRadius:20,
boxShadow:'none'

}}>
                ADD VENDOR
            </button> 

        </div>
    )
}

export default Vendor
