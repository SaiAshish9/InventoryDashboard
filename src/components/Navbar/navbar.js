import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './navbar.css';
import {
	FaBars,
	FaAddressCard,
	FaMoon,
	FaBell,
	FaEllipsisV
} from 'react-icons/fa';

const Cnavbar = () => {
	return (
		<Navbar collapseOnSelect className="navbar" expand="lg">
			<div className="container-fluid">
				<Button
					type="button"
					id="sidebarCollapse"
					className="btn d-inline-block d-lg-none"
					variant="light"
				>
					<FaBars />
				</Button>

				<Navbar.Toggle aria-controls="navbarSupportedContent" />
				<Navbar.Collapse id="navbarSupportedContent">
					<ul className="nav navbar-nav ml-auto">
						<li className="nav-item">
							<Nav.Link href="#">
								<FaAddressCard />
							</Nav.Link>
						</li>
						<li className="nav-item">
							<Nav.Link href="#">
								<FaMoon />
							</Nav.Link>
						</li>
						<li className="nav-item">
							<Nav.Link href="#">
								<FaBell />
							</Nav.Link>
						</li>
						<li className="nav-item">
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
