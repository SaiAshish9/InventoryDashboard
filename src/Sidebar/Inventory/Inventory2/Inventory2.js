import React from "react";
import {  Table, Row, Col, Form } from "react-bootstrap";
import {} from "react-icons";
import "./Inventory2.css";
// import NewProductTable from "./Components/NewProductTable/NewProductTable";
// import PriceTable from "./Components/PriceTable/PriceTable";

import Nav from '../Nav/Nav'



const Inventory2 = () => {
  return (
    <div>
    <Nav/>
      <div className="mt-5 fill legend-container">
        <div>
          <p className="legend" style={{ backgroundColor: "black" }} />
          <p>Opening Stack</p>
        </div>
        <div>
          <p className="legend" style={{ backgroundColor: "white" }} />
          <p>Opening Stack History</p>
        </div>
        <div>
          <p className="legend" style={{ backgroundColor: "white" }} />
          <p>Inventory Update</p>
        </div>
      </div>
      {/* <NewProductTable /> */}
      {/* <PriceTable /> */}
    </div>
  );
};

export default Inventory2
