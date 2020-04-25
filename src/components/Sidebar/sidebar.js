import React from 'react';
import Logo from '../../Assets/logo.PNG';
import { Navbar, Nav } from 'react-bootstrap';
import './sidebar.css';


import links from './data.js'
import {Link} from 'react-router-dom'



const Sidebar = () => {
	return (
		<Navbar expand="md" className="sidebar" id="sidebar">
			<div className="sidebar-header">
				{/* <img src={Logo} alt="" /> */}
				<h5 style={{ marginLeft:12,color: 'white', display: 'inline' }}>
				 <i>
				CareMedicos
				</i>
				</h5>
				{/* <h5 style={{ color: 'white', display: 'inline' }}>Medicos</h5> */}
			</div>

			<Nav className="">
				<Navbar>
					<ul>
{
	links.map((i,k)=>(
                        <li className='li-item' style={{margin:3}}>
							<Link to={i.path} >
								{i.icon}
							<p style={{display:'inline',marginLeft:15,marginTop:-5}}>
							{i.name}
							</p>
								
								</Link>							
							
						</li>
	))
}					
									</ul>
				</Navbar>
			</Nav>
		</Navbar>
	);
};

export default Sidebar;
