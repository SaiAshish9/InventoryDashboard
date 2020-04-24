import React from "react";
import { Table, Col } from "react-bootstrap";

const BarcodeTable = () => {
  return (
    <div>
      <Table borderless className="mt-5">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Code</th>
            <th scope="col">Product</th>
            <th scope="col">Batch</th>
            <th scope="col">Expiry</th>
            <th scope="col">Date</th>
            <th scope="col">MRP</th>
            <th scope="col">Stock</th>
            <th scope="col">Barcode</th>
            <th scope="col">No. of Rows</th>
          </tr>
        </thead>
        <tbody />
      </Table>
    </div>
  );
};

export default BarcodeTable;
