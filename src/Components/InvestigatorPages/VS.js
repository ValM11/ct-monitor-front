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

export default function VS(props) {
  let [VSInfo, setVSInfo] = useState([]);

  useEffect(
    () =>
      fetchPatientVisit(
        "vital_signs",
        props.currentPatient,
        props.currentVisit,
        setVSInfo
      ),
    [props.currentPatient, props.currentVisit]
  );

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          var el = event.target.elements;
          fetchAddPatientInfo("vital_signs", {
            patient_id: Number(props.currentPatient),
            visit: props.currentVisit,
            sbp: Number(el.sbp.value),
            dbp: Number(el.dbp.value),
            hr: Number(el.hr.value),
          });
        }}
      >
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Systolic Blood Pressure (mmHg)</Form.Label>
              <Form.Control
                placeholder={VSInfo[0] ? VSInfo[0].sbp : null}
                type="number"
                name="sbp"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Diastolic Blood Pressure (mmHg)</Form.Label>
              <Form.Control
                placeholder={VSInfo[0] ? VSInfo[0].dbp : null}
                type="number"
                name="dbp"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Heart Rate (bpm)</Form.Label>
              <Form.Control
                placeholder={VSInfo[0] ? VSInfo[0].hr : null}
                type="number"
                name="hr"
              />
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
