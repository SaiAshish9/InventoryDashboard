import React from "react";
import { Table, Col } from "react-bootstrap";

const BranchTable = () => {
  return (
    <div className="mt-5">
      <Table bordered>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Action</th>
            <th scope="col">Branch Code</th>
            <th scope="col">Branch Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Address</th>
            <th scope="col">GSTIN No</th>
            <th scope="col">Registered Date</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default BranchTable;
