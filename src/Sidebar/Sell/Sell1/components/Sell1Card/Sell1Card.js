import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./Sell1Card.css";

const Sell1Card = () => {
  return (
    <div className="mt-5 card-container .sell-card">
      <Row>
        <Form.Label>Bill Date</Form.Label>
        <Form.Control type="date" />
      </Row>
      <Row>
        <Col>Total</Col>
        <Col>0.0</Col>
      </Row>
      <Row>
        <Col>GST Total</Col>
        <Col>0.0</Col>
      </Row>
      <Row>
        <Col>Discount</Col>
        <Col>0.0</Col>
      </Row>
      <Row>
        <Col>Discount Value</Col>
        <Col>0.0</Col>
      </Row>
      <Row>
        <Col>Roundoff Value</Col>
        <Col>0.0</Col>
      </Row>
      <Row className="net-value">
        <Col>NET VALUE</Col>
        <Col>0.0</Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form.Label>Amount Received</Form.Label>
        </Col>
        <Col>
          <Form.Control type="number" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>To be Returned</Form.Label>
        </Col>
        <Col>
          <Form.Control type="number" />
        </Col>
      </Row>
      <Row className="mt-5">
        <h6>Payment Type</h6>
        <Col>
          <Form.Check />
          <Form.Label>Credit</Form.Label>
        </Col>
        <Col>
          <Form.Check />
          <Form.Label>Multiple</Form.Label>
        </Col>
      </Row>
      <Row>
        <h6>Sale Type</h6>
        <Col>
          <Form.Check />
          <Form.Label>Counter</Form.Label>
        </Col>
        <Col>
          <Form.Check />
          <Form.Label>Home Delivery</Form.Label>
        </Col>
      </Row>
    </div>
  );
};

export default Sell1Card;
