import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import AlertMessage from "./AlertMessage.js";
import { fetchCheckUser } from "../../Services/global.services.js";

export default function Homepage(props) {
  var [showSignIn, setShow] = useState(false);
  var [alertMessage, setAlert] = useState("");

  function onLoginSubmit(event) {
    event.preventDefault();
    var el = event.target.elements;
    fetchCheckUser(
      { email: el.email.value, passhash: el.password.value },
      props.setPage
    )
      .then((data) => {
        localStorage.setItem("tokenRole", JSON.stringify(data));
        props.setPage(data.user_role);
        setShow(false);
      })
      .catch((err) => {
        setAlert(err.message);
      });
  }

  return (
    <Card>
      <Card.Img src="doctor.jpeg" className="homeImage" />
      <Card.ImgOverlay className="welcomeTitle">
        <Card.Title className="fontTitle">Welcome to CTMonitor</Card.Title>
        <Button variant="success" onClick={() => setShow(true)}>
          Sign in
        </Button>

        <Modal
          centered
          show={showSignIn}
          onHide={() => {
            setShow(false);
            setAlert("");
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onLoginSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" />
              </Form.Group>
              <Button variant="outline-success" type="submit">
                Sign in
              </Button>
            </Form>
            <br></br>
            <AlertMessage
              messageVariant="danger"
              message={alertMessage}
            ></AlertMessage>
          </Modal.Body>
        </Modal>
      </Card.ImgOverlay>
    </Card>
  );
}
