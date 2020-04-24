import React from "react";
import { Form, Button } from "react-bootstrap";
import "./SearchArea.css";

const SearchArea = () => {
  return (
    <div className="mt-5">
      <div className="search-container">
        <Form.Control
          className="search-inline"
          type="text"
          placeholder="Search"
        />
        <Button type="submit">Search</Button>
        <Button>BulkUpdate</Button>
        <Button>Import/Export</Button>
      </div>
    </div>
  );
};

export default SearchArea;
