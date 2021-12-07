import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import GenericModal from "../../UI/GenericModal";

const FormUser = (props) => {
  /* */
  const [userName, onSetUserName] = useState("");
  const [userAge, onSetUserAge] = useState("");

  /* Controladores de Modal */
  const [modalShow, setShow] = useState(false);
  const [modalData, setModalData] = useState("");
  const handleModalClose = () => setShow(false);
  const handleModalShow = () => setShow(true);

  const onChangeUserNameHandler = (event) => {
    onSetUserName(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    onSetUserAge(event.target.value);
  };

  const FormUserHandler = (event) => {
    event.preventDefault();

    if (userName.length <= 0 || userAge.length <= 0) {
      setModalData({
        header: "Ooooops!",
        body: "Ingresa un username y edad validos.",
        footer: "",
      });
      handleModalShow();
      return;
    }

    if (userAge < 0) {
      setModalData({
        header: "Ooooops!",
        body: "La edad no puede ser negativa.",
        footer: "",
      });
      handleModalShow();
      return;
    }
    props.onAddNewUser({
      userName: userName,
      userAge: userAge,
    });
    onSetUserName("");
    onSetUserAge("");
  };

  return (
    <div>
      <Form onSubmit={FormUserHandler}>
        <Form.Group className="mb-3" controlId="f_Username">
          <Form.Label className="fw-bold">Username</Form.Label>
          <Form.Control
            type="text"
            size="sm"
            placeholder="New Username"
            value={userName}
            onChange={onChangeUserNameHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="f_UserAge">
          <Form.Label className="fw-bold">Age (Years)</Form.Label>
          <Form.Control
            type="number"
            size="sm"
            step="1"
            pattern="[0-9]"
            value={userAge}
            onChange={onChangeAgeHandler}
          />
        </Form.Group>
        <Button variant="primary" size="sm" type="submit">
          Add User
        </Button>
      </Form>
      <GenericModal
        handleClose={handleModalClose}
        handleShow={handleModalShow}
        show={modalShow}
        data={modalData}
      />
    </div>
  );
};

export default FormUser;
