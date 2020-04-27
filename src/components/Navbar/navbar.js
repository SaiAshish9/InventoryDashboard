import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './navbar.css';
import {
	FaBars,
	FaRegMoon,
	FaEllipsisV
} from 'react-icons/fa';

import md5 from 'md5'

import {RiMailOpenLine} from 'react-icons/ri'

import {IoIosNotificationsOutline} from 'react-icons/io'

import {AiOutlineAlignLeft} from 'react-icons/ai'

const Cnavbar = () => {
	return (
		<Navbar collapseOnSelect className="navbar" expand="lg" style={{borderBottom:'6px solid #eee',height:'9vh'}}>



			<div  style={{display:'flex',width:'100%',height:'5vh'}}>
			
	
			<div style={{display:'flex',alignItems:'center'}}>
<img
 src={`http://gravatar.com/avatar/${md5(Math.random())}?d=identicon`}
 style={{
     height:30,
     width:30,
     borderRadius:'50%'
 }}
 />

<p style={{margin:10,fontSize:12,color:'#999',fontWeight:'bold'}}>
	Stark
</p>

</div>
			
				<Button
					type="button"
					id="sidebarCollapse"
					className="btn d-inline-block d-lg-none"
					variant="light"
				>
					<FaBars 

					/>
				</Button>

				<Navbar.Toggle aria-controls="navbarSupportedContent" />
				<Navbar.Collapse id="navbarSupportedContent">
					<ul className="nav navbar-nav ml-auto">
				
					<li className="nav-item" style={{marginRight:10,marginTop:20}}>
							<Nav.Link href="#">
								<FaRegMoon />
							</Nav.Link>
						</li>
						<li className="nav-item" style={{marginRight:10,marginTop:20}}>
							<Nav.Link href="#">
								<IoIosNotificationsOutline style={{fontSize:'1.5rem'}} />
							<p style={{position:'relative',bottom:30,left:10,borderRadius:'50%',color:'white',background:'red',fontWeight:'bold',fontSize:10,textAlign:'center',height:15,width:15}}>
                            7
							</p>
							
							
							</Nav.Link>



						</li>
						<li className="nav-item" style={{marginRight:10,marginTop:20}}>
							<Nav.Link href="#">
								<AiOutlineAlignLeft style={{fontSize:'1.3rem'}} />
								<p style={{ position:'relative',bottom:27,left:15,borderRadius:'50%',color:'#333',background:'gold',fontWeight:'bold',fontSize:10,textAlign:'center',height:15,width:15}}>
                            15
							</p>
							</Nav.Link>
						</li>
						
						<li className="nav-item" style={{marginRight:10,marginTop:20}}>
							<Nav.Link href="#">
								<RiMailOpenLine  style={{fontSize:'1.3rem'}} />
							</Nav.Link>
							<p style={{position:'relative',bottom:37,left:20,borderRadius:'50%',color:'white',background:'#00a5e3',fontWeight:'bold',fontSize:10,textAlign:'center',height:15,width:15}}>
                            5
							</p>
						</li>
				
						<li className="nav-item" style={{marginRight:10,marginTop:20}}>
							<Nav.Link href="#">
								<FaEllipsisV />
							</Nav.Link>
						</li>
					</ul>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Cnavbar;
