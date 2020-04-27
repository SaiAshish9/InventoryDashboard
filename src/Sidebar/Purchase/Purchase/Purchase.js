import React,{useState} from 'react'

import {Container,Table} from 'react-bootstrap'

import {Row, Col, Form, Button ,FaRegCalendarAlt} from 'react-icons/fa'
import { Calendar } from "@y0c/react-datepicker";

import "../../Order/Order/calendar.scss";



const row1 = [
	'GR Number',
	'Invoice Value',
	'Vendor Name',
	'Invoice Number'
];

const row3 = [
	'GST Total',
	'Price/Strip',
	'MRP/Strip',
	'Discount %',
	'Scheme Disc %'
];

const headers1 = [
	'S.no',
	'Product',
	'Batch',
	'Expiry	GST %',
	'IGST %',
	'SGST / UTGST %',
	'CGST %',
	'Units/Strip',
	'Total Units',
	'Price/Strip',
	'MRP/Strip',
	'Discount',
	'Scheme Disc',
	'In Tax',
	'Total Price'
];

const headers2 = [
	'S.no',
	'Product',
	'Batch',
	'Expiry	GST %',
	'IGST %',
	'SGST / UTGST %',
	'CGST %',
	'Units/Strip',
	'Total Units',
	'Price/Strip',
	'MRP/Strip',
	'Discount',
	'In Tax',
	'Total Price'
];

const Purchase = () => {


const headers=[
    'S.no',
    'Product',
    'Batch',
    'Expiry',
    'UPC Code',
    'GST %',
	'Cost %',
	'Units/Strip',
	'Total Units',
	'Price/Strip',
	'MRP/Strip',
	'Discount',
	'Scheme Disc',
	'In Tax (Rs.)',
	'Total Price'

]

const inputs=[
    'GR Number',
    'Invoice Value',
    'Vendor Name'
]


const inputs1=[
	'Product',
	'Batch',
	'Expiry',
	'Units',
	'No. of Strips',
	'Free Strips',
	'GST Total',
	'Price/Shop',
	'MRP/Strip',
	'Discount %',
	'Scheme Disc%',
	'HSN Code',
	'Rack No',
	'Box No',
	'UPC/BAN Code'
]


const [show,setShow]=useState(false)
const [show1,setShow1]=useState(false)
const [value,setValue]=useState({})


const toggleShow=()=>   setShow(!show)

const handleInput =e=>(

    setValue({...value,[e.target.name]:e.target.value})

)

const buttons=[
    'Invoice Number',
	'Invoice Data'
]

    return (




        
        <Container style={{height:'75vh',width:'100%'}}>

<Container  style={{marginTop:'10vh',display:'flex',justifyContent:'space-around'}}>
{
    inputs.map((i,k)=>(
<div key={k} style={{marginLeft:10}}>
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
    marginTop:-4,
    paddingRight:29,
            }}
/>
</div>
    ))
}

</Container>




<Container  style={{width: '100%',display:'flex',justifyContent:'space-around',marginTop:15,marginLeft:8}}>
        {
            buttons.map((i,k)=>(
        <div key={k}>
        <p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
        {i}
        </p>
        <input
        type={k===0?'text':'date'}
        name='invoice'
        // onChange={handleInput}
        value={value['invoice']}
        style={{
            height:'6vh',
            border:'2px solid #eee',
            boxShadow:'0.5px 0.5px 0.5px 1px #eee',
            color:'#999',
            outline:'none',
            borderRadius:20,
            paddingLeft:12,
            paddingRight:29,
            marginTop:-4                    }}
        
        />
        {
            k>0&&(<FaRegCalendarAlt
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
        width:'10rem',
        textAlign:'center'
        }}>
                        ADD NEW PRODUCT
                    </button>  
                  
                  <div style={{position:'absolute',left:110,top:'52vh'}}>
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
                  

                  <div style={{position:'absolute',left:'48.2vw',top:'52vh'}}>
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




		<Container  style={{ flexWrap:'wrap',marginTop:'10vh',display:'flex',justifyContent:'space-around'}}>
{
    inputs1.map((i,k)=>(
<div key={k} style={{marginLeft:10,margin:20}}>
<p style={{marginLeft:12,fontSize:13,color:'#999',fontWeight:'bold'}}>
{i}
</p>
<input
        type={k!==2?'text':'date'}
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

{
            k===2&&(<FaRegCalendarAlt
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

<br/>


                  


</Container>


<Container style={{width: '100%',display:'flex',justifyContent:'center'}}>
<button className='btn btn-primary'
        style={{fontSize:12,
        fontWeight:'bold',
        borderRadius:20,
        boxShadow:'none',
        color:'#f4f4f4',
        height:'2.5rem',
        width:'10rem',
        textAlign:'center'
        }}>
                        ADD 
                    </button>  
</Container>







{
	[...Array(2).values()].map((i,k)=>(
<Container key={k}  style={{marginLeft:'3%',marginTop:'5vh'}}>

<Table>

<thead>
    <tr>
        {
            headers.map((i,k)=>(
            <th key={k} style={{fontSize:12,backgroundColor:'#eee',color:'#333',cursor:'pointer',borderRight:'0.5px solid #999'}}>
                {i}
            </th>   
            ))
        }
    </tr>
</thead>

<tbody>


{
    [...Array(1).keys()].map((i,k)=>(
<tr key={k}>

{
    [...Array(headers.length).keys()].map((i,k)=>(
        <td style={{fontSize:12,backgroundColor:'white',color:'#999',borderRight:'0.1px solid #999',fontWeight:'bold'}}>
        abc
    </td>     
        
        )  )  }
    
  
    </tr>
    ))
}    
</tbody>

</Table>


</Container>

))
}
        </Container>
    )
}

export default Purchase
=======
	return (
		<div style={{ padding: '1rem' }}>
			<Row style={{ margin: '0' }}>
				{row1.map((i, k) => (
					<Col>
						<Form.Label style={{ marginLeft: 10 }}>{i}</Form.Label>
						<Form.Control className="round-input" />
					</Col>
				))}
				<Col>
					<Form.Label style={{ marginLeft: 10 }}>
						Invoice Date
					</Form.Label>
					<Form.Control className="round-input" type="date" />
				</Col>
			</Row>
			<Row style={{ margin: '0', justifyContent: 'center' }}>
				<Button
					className="round"
					style={{
						fontSize   : 12,
						fontWeight : 'bold',
						boxShadow  : 'none',
						color      : '#f4f4f4',
						height     : '2.5rem'
					}}
				>
					ADD NEW PRODUCT
				</Button>
			</Row>
			<Row style={{ margin: '0' }} className="mt-5">
				<Col lg="7">
					<Row>
						<Col>
							<Form.Label style={{ marginLeft: 10 }}>
								Product
							</Form.Label>
							<Form.Control className="round-input" />
						</Col>
						<Col>
							<Form.Label style={{ marginLeft: 10 }}>
								Batch
							</Form.Label>
							<Form.Control className="round-input" />
						</Col>
						<Col>
							<Form.Label style={{ marginLeft: 10 }}>
								Expiry
							</Form.Label>
							<Form.Control className="round-input" type="date" />
						</Col>
					</Row>
				</Col>
				<Col lg="5">
					<Row>
						<Col>
							<Form.Label style={{ marginLeft: 10 }}>
								Units
							</Form.Label>
							<Form.Control className="round-input" />
						</Col>
						<Col>
							<Form.Label style={{ marginLeft: 10 }}>
								No of Strips
							</Form.Label>
							<Form.Control className="round-input" />
						</Col>
						<Col>
							<Form.Label style={{ marginLeft: 10 }}>
								Free Strips
							</Form.Label>
							<Form.Control className="round-input" />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row style={{ margin: '0' }} className="mt-3">
				<Col lg="8">
					<Row>
						{row3.map((i, k) => (
							<Col>
								<Form.Label style={{ marginLeft: 10 }}>
									{i}
								</Form.Label>
								<Form.Control className="round-input" />
							</Col>
						))}
					</Row>
				</Col>
				<Col lg="3">
					<Form.Label style={{ marginLeft: 10 }}>HSN Code</Form.Label>
					<Form.Control className="round-input" />
				</Col>
				<Col>
					<Form.Label style={{ marginLeft: 10 }}>Rack No</Form.Label>
					<Form.Control className="round-input" />
				</Col>
			</Row>
			<Row style={{ margin: '0' }} className="mt-3">
				<Col lg="2">
					<Form.Label style={{ marginLeft: 10 }}>Box No</Form.Label>
					<Form.Control className="round-input" />
				</Col>
				<Col lg="2">
					<Form.Label style={{ marginLeft: 10 }}>
						UPC/EAN Code
					</Form.Label>
					<Form.Control className="round-input" />
				</Col>
			</Row>
			<Row style={{ margin: '0' }} className="mt-3">
				<Table>
					<thead>
						<tr>
							{headers1.map((i, k) => (
								<th
									key={k}
									style={{
										fontSize    : 12,
										cursor      : 'pointer',
										borderRight : '0.5px solid #999'
									}}
								>
									{i}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{headers1.map(() => (
							<td
								style={{
									fontSize        : 12,
									backgroundColor : '#fff',
									color           : '#999',
									borderRight     : '0.1px solid #999',
									fontWeight      : 'bold'
								}}
							>
								-
							</td>
						))}
					</tbody>
				</Table>
			</Row>
			<Row style={{ margin: '0' }} className="mt-3">
				<Table>
					<thead>
						<tr>
							{headers2.map((i, k) => (
								<th
									key={k}
									style={{
										fontSize    : 12,
										cursor      : 'pointer',
										borderRight : '0.5px solid #999'
									}}
								>
									{i}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{headers2.map(() => (
							<td
								style={{
									fontSize        : 12,
									backgroundColor : '#fff',
									color           : '#999',
									borderRight     : '0.1px solid #999',
									fontWeight      : 'bold'
								}}
							>
								-
							</td>
						))}
					</tbody>
				</Table>
			</Row>
		</div>
	);
};

export default Purchase;
