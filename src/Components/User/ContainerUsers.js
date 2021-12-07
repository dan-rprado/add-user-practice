import React from "react";
import { Container } from "react-bootstrap";
import RowUser from "./RowUser";

const ContainerUsers = (props) => {
  return (
    <Container className="d-grid gap-3">
      {props.users.map((user, i) => {
        return <RowUser key={i} user={user} />;
      })}
    </Container>
  );
};

export default ContainerUsers;
