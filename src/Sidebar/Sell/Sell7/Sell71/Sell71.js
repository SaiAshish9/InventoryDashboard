import React from "react";
import { Navbar, Nav, Row, Col, Table, Form, Button } from "react-bootstrap";

const Sell71 = () => {
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
        <Nav>
          <Nav.Link className="cm-link" active style={{ marginRight: "1rem" }}>
            Sell
          </Nav.Link>
          <Nav.Link className="cm-link">Estimate</Nav.Link>
        </Nav>
      </Navbar>
      <Table className="mt-5" responsive="md" borderless>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>GST %</th>
            <th>MRP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Form.Control type="text" />
            </td>
            <td>
              <Button variant="dark" style={{ margin: "0" }}>
                ADD
              </Button>
            </td>
            <td>
              <Button variant="dark" style={{ margin: "0" }}>
                RESET
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Row style={{ justifyContent: "center" }}>
        <Button size="lg" type="submit">
          ADD
        </Button>
      </Row>
    </div>
  );
};

export default Sell71;
