import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { fetchCheckUser } from "../Services/global.services.js";

export default function Homepage(props) {
  var [showSignIn, setShow] = useState(false);

  //   return (
  //     <div>
  //       <div className="text-center">
  //         <h1>
  //           Welcome<br></br>
  //           to
  //         </h1>
  //         <h1>
  //           <em>CTMonitor</em>
  //         </h1>
  //       </div>
  //       <div className="text-center">
  //         <Button variant="primary" onClick={() => setShow(true)}>
  //           Sign in
  //         </Button>

  //         <Modal centered show={showSignIn} onHide={() => setShow(false)}>
  //           <Modal.Header closeButton>
  //             <Modal.Title>Sign in</Modal.Title>
  //           </Modal.Header>
  //           <Modal.Body>
  //             <Form
  //               onSubmit={(event) => {
  //                 event.preventDefault();
  //                 var el = event.target.elements;
  //                 fetchCheckUser(
  //                   { email: el.email.value, passhash: el.password.value },
  //                   props.setPage
  //                 );
  //                 setShow(false);
  //               }}
  //             >
  //               <Form.Group className="mb-3">
  //                 <Form.Label>Email address</Form.Label>
  //                 <Form.Control
  //                   type="email"
  //                   name="email"
  //                   placeholder="name@example.com"
  //                   autoFocus
  //                 />
  //               </Form.Group>
  //               <Form.Group className="mb-3">
  //                 <Form.Label>Password</Form.Label>
  //                 <Form.Control type="password" name="password" />
  //               </Form.Group>
  //               <Button variant="outline-success" type="submit">
  //                 Sign in
  //               </Button>
  //             </Form>
  //           </Modal.Body>
  //           {/* <Modal.Footer>
  //             <Button variant="secondary" onClick={() => setShow(false)}>
  //               Close
  //             </Button>
  //             <Button variant="primary" type="submit">
  //               Sign In
  //             </Button>
  //           </Modal.Footer> */}
  //         </Modal>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <Card>
      <Card.Img src="doctor.jpeg" className="homeImage" />
      <Card.ImgOverlay className="welcomeTitle">
        <Card.Title className="fontTitle">Welcome to CTMonitor</Card.Title>
        <Button variant="success" onClick={() => setShow(true)}>
          Sign in
        </Button>

        <Modal centered show={showSignIn} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                var el = event.target.elements;
                fetchCheckUser(
                  { email: el.email.value, passhash: el.password.value },
                  props.setPage
                );
                setShow(false);
              }}
            >
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
          </Modal.Body>
        </Modal>
      </Card.ImgOverlay>
    </Card>
  );
}
