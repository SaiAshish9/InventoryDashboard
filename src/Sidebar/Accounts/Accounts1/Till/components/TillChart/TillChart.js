import React from "react";
import { Form, Container, Table, Col, Row } from "react-bootstrap";

const TillChart = () => {
  return (
    <div className="mt-5">
      <h5>Till Chart</h5>
      <Container className="card-container till-card-container">
        <Form>
          <Table>
            <Row>
              <Col>
                <Form.Label>Opening Balance</Form.Label>
              </Col>
              <Col>
                <Form.Control type="number" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Floating Amount</Form.Label>
              </Col>
              <Col>
                <Form.Control type="number" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Vendor Payment</Form.Label>
              </Col>
              <Col>
                <Form.Control type="number" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Expenses</Form.Label>
              </Col>
              <Col>
                <Form.Control type="number" />
              </Col>
            </Row>
          </Table>
        </Form>
      </Container>
    </div>
  );
};

export default TillChart;
