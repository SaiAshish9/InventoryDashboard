import React from "react";
//import Logo from '../../Assets/logo.PNG';
import { Navbar, Nav } from "react-bootstrap";
import "./sidebar.css";
import {
  FaShoppingCart,
  FaChartLine,
  FaWallet,
  FaShoppingBasket,
  FaIdCard,
  FaTruckPickup,
  FaFileAlt,
  FaCodeBranch,
  FaLock,
  FaUser
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <Navbar expand="md" className="sidebar" id="sidebar">
      <div className="sidebar-header">
        {/* <img src={Logo} alt="" /> */}
        <h3 style={{ color: "#ea0f58", display: "inline" }}>Care</h3>
        <h3 style={{ color: "#8C727B", display: "inline" }}>Medicos</h3>
      </div>

      <Nav className="">
        <Navbar>
          <ul>
            <li>
              <Nav.Link href="#" className="li-item">
                <FaChartLine />
                Dashboard
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#" className="li-item">
                <FaShoppingCart />
                Sell
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#" className="li-item">
                <FaWallet />
                Purchase
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#" className="li-item">
                <FaShoppingBasket />
                Order
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#" className="li-item">
                <FaIdCard />
                Profile
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#" className="li-item">
                <FaTruckPickup />
                Inventory
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#" className="li-item">
                <FaFileAlt />
                Reports
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#" className="li-item">
                <FaCodeBranch />
                Branch
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#" className="li-item">
                <FaLock />
                Account
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="#" className="li-item">
                <FaUser />
                User
              </Nav.Link>
            </li>
          </ul>
        </Navbar>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
