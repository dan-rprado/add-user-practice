import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GenericContainer from "./UI/GenericContainer";
import FormUser from "./Components/User/FormUser";
import ContainerUsers from "./Components/User/ContainerUsers";
import { Container } from "react-bootstrap";

function App() {
  const [userData, setUserData] = useState([]);

  const onAddNewUserHandler = (newUserData) => {
    setUserData((prevUserData) => {
      return [newUserData, ...prevUserData];
    });
  };

  return (
    <Container className="d-grid gap-5 p-4">
      <GenericContainer>
        <FormUser onAddNewUser={onAddNewUserHandler} />
      </GenericContainer>

      {userData.length > 0 && (
        <GenericContainer>
          <ContainerUsers users={userData} />
        </GenericContainer>
      )}
    </Container>
  );
}

export default App;
