import React from "react";
import { Navbar, Nav, Row, Col, Table, Form, Button } from "react-bootstrap";

const Reorder = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="mt-5">
        <Nav className="fill">
          <Nav.Link href="#" active>
            Order
          </Nav.Link>
          <Nav.Link href="#">List</Nav.Link>
          <Nav.Link href="#">Missed Sales Order</Nav.Link>
          <Nav.Link href="#">Settings</Nav.Link>
        </Nav>
      </Navbar>
      <br />
      <Navbar className="mt-5">
        <Nav className="fill">
          <Nav.Link className="cm-link">By Vendor</Nav.Link>
          <Nav.Link className="cm-link" active>
            Reorder
          </Nav.Link>
          <Nav.Link className="cm-link">By Transaction</Nav.Link>
        </Nav>
      </Navbar>
      <Row className="mt-5">
        <Col lg="4">
          <Form.Label>Vendor Name</Form.Label>
          <Form.Control type="text" />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Table className="mt-5">
          <thead className="thead-light">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Vendor Name</th>
              <th scope="col">Product Name</th>
              <th scope="col">Min Reorder</th>
              <th scope="col">S.No</th>
              <th scope="col">Max Reorder</th>
              <th scope="col">Suggested Qty</th>
              <th scope="col">Units/Strip</th>
              <th scope="col">Free Qty</th>
              <th scope="col">No of strips</th>
              <th scope="col">Purchase Price/Strip</th>
              <th scope="col">MRP/Strip</th>
              <th scope="col">Amount</th>
              <th scope="col">GST %</th>
            </tr>
          </thead>
        </Table>
      </Row>
    </div>
  );
};

export default Reorder;
