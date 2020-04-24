import React from "react";
import { Table, Form, Col } from "react-bootstrap";

const PriceTable = () => {
  return (
    <Table className="mt-5">
      <thead className="thead-light">
        <tr>
          <th scope="col">
            <Col lg="5">Price/Strip</Col>
          </th>
          <th scope="col">
            <Col lg="5">MRP/Strip</Col>
          </th>
          <th scope="col">
            <Col lg="5">Quantity in Units</Col>
          </th>
          <th scope="col">
            <Form.Group>
              <Form.Check type="checkbox" label="Disable Price/Strip" />
            </Form.Group>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Col lg="5">
              <Form.Control type="text" />
            </Col>
          </td>
          <td>
            <Col lg="5">
              <Form.Control type="text" />
            </Col>
          </td>
          <td>
            <Col lg="5">
              <Form.Control type="text" />
            </Col>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default PriceTable;
