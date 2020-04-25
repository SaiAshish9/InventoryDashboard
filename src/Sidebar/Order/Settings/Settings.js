import React from 'react'

const Settings = () => {
    return (
        <div style={{display: 'flex',margin:150}}>
               <div >
        <p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
        Custom Days
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

        <button className='btn btn-primary'
        style={{fontSize:15,
        fontWeight:'bold',
        borderRadius:20,
        boxShadow:'none',
        color:'#f4f4f4',
        height:'2.5rem',
        width:'7rem',
        textAlign:'center',
        marginLeft:20
        }}>
Save
                    </button> 

        </div>
    )
}

export default Settings
