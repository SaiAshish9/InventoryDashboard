import React,{useState} from 'react';
import './Inventory.css';
import {Container, Row, Col, Form, Button } from 'react-bootstrap';

import {Link} from 'react-router-dom'

import ProductTable from './components/ProductTable/ProductTable';
import AtoZ from './components/AtoZ/AtoZ';

const links = [
	'All',
	'Available',
	'Expiry',
	'Zero Stock',
	'Inactive Stock'
];

const Inventory = () => {

	const [selected,setSelectedKey]=useState('All')


	return (
		<div>
			<Row className="mt-5" style={{ margin: '0' }}>
				<div >
					<Form>
						<Row style={{ margin: '0' }}>
							<div lg="5">
								<Form.Group>
								<p style={{fontSize:13,color:'#999',fontWeight:'bold'}}>
    Product Name
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
	paddingLeft:12,
	marginLeft:45,
	padding:20,
	marginRight:10
            }}
/>



								</Form.Group>
							</div>
							<div>
							<p style={{fontSize:13,color:'#999',fontWeight:'bold'}}>
 Enter   Product 
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
							<Col lg="1">
								<Button  variant="dark" 
								style={{boxShadow: 'none', 
								position:'relative',
								bottom:3
								}}>
									Q
								</Button>
							</Col>
						</Row>
					</Form>
					<AtoZ />
			

<Container syle={{width:'100%',display:'flex',justifyContent:'space-between'}}>

{links.map((i, k) => (
<Link
key={k}
style={{
position: 'relative',
top:40,
height:'1.5rem',
margin:'40px 30px',
background:`${selected===i?'#333':'#fff'}`,
color:`${selected===i?'#fff':'#333'}`, 
border:`${selected===i?'1px solid #333':'1.5px solid #999'}`, 
borderRadius:20, 
padding:2,
width:70,
textDecoration: 'none',
padding:'12px 20px',
fontWeight:'bold',
fontSize:12
}}
onClick={
	()=>setSelectedKey(i)
}
>
	 {i}
</Link>
							))}
</Container>


				</div>
			</Row>
<Container
style={{
	marginTop:'10vh'
}}
>
<ProductTable />	
</Container>
		</div>
	);
};

export default Inventory;
