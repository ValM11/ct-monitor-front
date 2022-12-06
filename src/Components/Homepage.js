import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function Homepage() {
  var [showSignIn, setShow] = useState(false);
  return (
    <div>
      <div className="text-center">
        <h1>
          Welcome<br></br>
          to
        </h1>
        <h1>
          <em>CTMonitor</em>
        </h1>
      </div>
      <div className="text-center">
        <Button variant="primary" onClick={() => setShow(true)}>
          Sign in
        </Button>

        <Modal centered show={showSignIn} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => setShow(false)}>
              Sign In
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
