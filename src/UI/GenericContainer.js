import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const GenericContainer = (props) => {
  return (
    <Container className="bg-warning rounded-3 p-3">
      <Row>
        <Col></Col>
        <Col xs={8}>{props.children}</Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default GenericContainer;
