import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  fetchAddPatientInfo,
  fetchInvestigatorInfo,
} from "../../Services/inv.services.js";

export default function AddPatient(props) {
  let invEmail = localStorage.getItem("userEmail");

  let [invInfos, setInvInfos] = useState([]);

  useEffect(() => fetchInvestigatorInfo(invEmail, setInvInfos), [invEmail]);

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          var el = event.target.elements;
          fetchAddPatientInfo("link_patient_study", {
            patient_id: Number(el.patient_id.value),
            site_id: invInfos[0].site_id,
            study_id: props.study,
          });
        }}
      >
        <Row>
          <Col xs={6} sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Study code</Form.Label>
              <Form.Control
                type="text"
                name="study_id"
                placeholder={props.study}
                disabled
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Patient number</Form.Label>
              <Form.Control type="text" name="patient_id" />
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
