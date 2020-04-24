import React from "react";
import { Table, Form } from "react-bootstrap";

const NewProductTable = () => {
  return (
    <Table className="mt-5">
      <thead className="thead-light">
        <tr>
          <th scope="col">Product Name</th>
          <th scope="col">Batch</th>
          <th scope="col">Expiry</th>
          <th scope="col">HSN Code</th>
          <th scope="col">GST Total %</th>
          <th scope="col">IGST %</th>
          <th scope="col">SGST %</th>
          <th scope="col">CGST %</th>
          <th scope="col">Units/Strip</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Form.Control type="text" placeholder="Product" />
          </td>
          <td>
            <Form.Control type="text" placeholder="" />
          </td>
          <td>
            <Form.Control type="text" placeholder="" />
          </td>
          <td>
            <Form.Control type="text" placeholder="" />
          </td>
          <td>
            <Form.Control type="text" placeholder="" />
          </td>
          <td>
            <Form.Control type="text" placeholder="" />
          </td>
          <td>
            <Form.Control type="text" placeholder="" />
          </td>
          <td>
            <Form.Control type="text" placeholder="" />
          </td>
          <td>
            <Form.Control type="text" placeholder="" />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default NewProductTable;
