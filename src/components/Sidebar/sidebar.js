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
				<img src={Logo} alt="" />
				<h3 style={{ color: '#ea0f58', display: 'inline' }}>Care</h3>
				<h3 style={{ color: '#8C727B', display: 'inline' }}>Medicos</h3>
			</div>

			<Nav className="">
				<Navbar>
					<ul>
{
	links.map((i,k)=>(
                        <li className='li-item'>
							<Link to={i.path} >
								{i.icon}
								{i.name}
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
