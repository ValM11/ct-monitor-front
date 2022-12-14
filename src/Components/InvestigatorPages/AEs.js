import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  fetchPatientVisit,
  fetchAddPatientInfo,
} from "../../Services/inv.services.js";

export default function AEs(props) {
  let [AEInfo, setAEInfo] = useState({});

  useEffect(
    () =>
      fetchPatientVisit(
        "aes",
        props.currentPatient,
        props.currentVisit,
        setAEInfo
      ),
    [props.currentPatient, props.currentVisit]
  );

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          var el = event.target.elements;
          fetchAddPatientInfo("aes", {
            patient_id: Number(props.currentPatient),
            visit: props.currentVisit,
            ae_desc: el.ae_desc.value,
            ae_start_date: el.ae_start_date.value,
            ae_end_date: el.ae_end_date.value,
          });
        }}
      >
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>AE description</Form.Label>
              <Form.Control type="textarea" name="ae_desc" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Start date</Form.Label>
              <Form.Control type="date" name="ae_start_date" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>End date</Form.Label>
              <Form.Control type="date" name="ae_end_date" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
