import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchInvestigator } from "../../Services/ctm.services.js";

export default function AddInvestigatorForm(props) {
  let [newInvestigator, setInvestigator] = useState({});

  useEffect(
    () => fetchInvestigator(props.study, newInvestigator),
    [newInvestigator]
  );

  if (typeof props.study !== "undefined" && props.study.length !== 0)
    return (
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          var el = event.target.elements;
          setInvestigator({
            inv_name: el.inv_name.value,
            email: el.email.value,
            site_id: Number(el.site_id.value),
            country_id: Number(el.country_id.value),
            study_id: props.study,
          });
        }}
      >
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Investigator name</Form.Label>
              <Form.Control type="text" name="inv_name" required={true} />
              <Form.Text className="text-danger">Required field</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Investigator email</Form.Label>
              <Form.Control type="email" name="email" required={true} />
              <Form.Text className="text-danger">Required field</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Associated site number</Form.Label>
              <Form.Control type="number" name="site_id" required={true} />
              <Form.Text className="text-danger">
                Required field - 3 digits
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Associated country number</Form.Label>
              <Form.Control type="number" name="country_id" required={true} />
              <Form.Text className="text-danger">
                Required field - 3 digits
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    );
}
