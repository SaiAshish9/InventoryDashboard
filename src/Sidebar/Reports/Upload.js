import React from 'react'
import {Row,Col,Button,Container} from 'react-bootstrap'


const Upload = () => {
    return (
        <Container style={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>

<Row style={{width:'100%'}} >

 {
     [...Array(6).values()].map((i,k)=>(
<Col lg={4} key={k}>

<Container >
<div 
style={{
    height:'24vh',
    width:'100%', 
    border:'5px solid #eee', 
    margin:15, 
    background:'#fff'
}}
 >

</div>

</Container>
</Col>


     ))
 }   

</Row>

<Button  style={{ 
    boxShadow: 'none',
    borderRadius:20,
    width:'7rem',
    fontSize: 15,
    fontWeight:'bold' ,
    backgroundColor : '#00a5e3'
        }}>

Upload Files
				</Button>

        </Container>
    )
}

export default Upload
