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

  useEffect(
    () =>
      fetchPatientVisit(
        "demographics",
        props.currentPatient,
        props.currentVisit,
        setDemoInfo
      ),
    [props.currentPatient, props.currentVisit]
  );

  return (
    <Container>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          var el = event.target.elements;
          fetchAddPatientInfo("demographics", {
            patient_id: Number(props.currentPatient),
            visit: props.currentVisit,
            sex: el.sex.value,
            age: Number(el.age.value),
            weight: Number(el.weight.value),
            height: Number(el.height.value),
          });
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
              <Form.Control
                placeholder={DemoInfo.weight}
                type="number"
                name="weight"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Height (cm)</Form.Label>
              <Form.Control
                placeholder={DemoInfo.height}
                type="number"
                name="height"
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
