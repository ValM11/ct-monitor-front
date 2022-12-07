import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { fetchUpdateStudy } from "../Services/ctm.services.js";

export default function UpdateStudyForm(props) {
  let [updatedStudy, setUpdatedStudy] = useState({});

  useEffect(() => fetchUpdateStudy(props.study, updatedStudy), [updatedStudy]);

  if (
    typeof props.study[0] !== "undefined" &&
    Object.keys(props.study[0]).length !== 0
  )
    return (
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          var el = event.target.elements;
          setUpdatedStudy({
            title: el.title.value,
            start_date: el.start_date.value,
            end_date: el.end_date.value,
          });
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Study code</Form.Label>
          <Form.Control placeholder={props.study[0].study_id} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Associated product code</Form.Label>
          <Form.Control placeholder={props.study[0].product_id} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Study title</Form.Label>
          <Form.Control
            placeholder={props.study[0].title}
            type="textarea"
            name="title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Start date</Form.Label>
          <Form.Control
            placeholder={props.study[0].start_date}
            type="date"
            name="start_date"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>End date</Form.Label>
          <Form.Control type="date" name="end_date" />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    );
}
