import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const RowUser = (props) => {
  return (
    <Row>
      <Col className="fw-bold border border-dark p-2">
        {props.user.userName} ({props.user.userAge} years old)
      </Col>
    </Row>
  );
};

export default RowUser;
