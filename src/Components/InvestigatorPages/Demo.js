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

export default function Demo(props) {
  let [DemoInfo, setDemoInfo] = useState({});
  let patientInfo = {};

  useEffect(() =>
    fetchPatientVisit(
      "demographics",
      props.currentPatient,
      props.currentVisit,
      setDemoInfo
    )
  );

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          fetchAddPatientInfo("demographics", patientInfo);
        }}
      >
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Sex</Form.Label>
              <Form.Select name="sex">
                <option>{DemoInfo.sex ? "Please select" : DemoInfo.sex}</option>
                <option value="F">Female</option>
                <option value="M">Male</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                placeholder={DemoInfo.age}
                type="number"
                name="age"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Weight (kg)</Form.Label>
              <Form.Control placeholder="62" type="number" name="weight" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control placeholder="178" type="number" name="height" />
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
