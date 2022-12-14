import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchNewStudy } from "../../Services/ctm.services.js";

export default function CreateStudy(props) {
  let [newStudy, setNewStudy] = useState({});

  useEffect(() => fetchNewStudy(newStudy), [newStudy]);

  return (
    <Container>
      <h2>Create new study</h2>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          var el = event.target.elements;
          console.log(el);
          setNewStudy({
            ...{
              study_id: el.study.value,
              product_id: el.product.value,
            },
            ...(!el.title.value ? {} : { title: el.title.value }),
            ...(!el.start_date.value
              ? {}
              : { start_date: el.start_date.value }),
          });
        }}
      >
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Study code</Form.Label>
              <Form.Control type="text" name="study" required={true} />
              <Form.Text className="text-danger">Required field</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Associated product code</Form.Label>
              <Form.Control type="text" name="product" required={true} />
              <Form.Text className="text-danger">Required field</Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Study title</Form.Label>
          <Form.Control type="textarea" name="title" />
        </Form.Group>
        <Row>
          <Col xs={6} sm={6}>
            <Form.Group className="mb-3">
              <Form.Label>Start date</Form.Label>
              <Form.Control type="date" name="start_date" />
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
