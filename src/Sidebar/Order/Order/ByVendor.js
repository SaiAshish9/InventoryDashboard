import React from 'react'
import {Container} from 'react-bootstrap'


const buttons=[
    'Vendor',
    'Product',
    'GST %'
]

const ByVendor = () => {
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
                        ADD
                    </button>  
        </div>
           

    </React.Fragment>
    )
}

export default ByVendor
