import React,{useState} from 'react';
import { Row, Col } from 'react-bootstrap';

const AtoZ = () => {

const [selected,setSelectedKey]=useState('A')

var arr=[...Array(26).keys()]
arr=arr.map(x=>String.fromCharCode(65+Number(x)))
	return (
		<Row style={{ margin: '0' }}>
		{
			arr.map((i,k)=>(
				<Col className="alphabet"
				key={k}
				style={{
					background:`${selected===i?'#333':'#fff'}`,
					color:`${selected===i?'#fff':'#333'}`, 
					margin:'0 2px',
					cursor:'pointer'
				}}
				onClick={
					()=>setSelectedKey(i)
				}
				>
					{i}
				</Col>
			))
		}
		</Row>
	); };

export default AtoZ;
