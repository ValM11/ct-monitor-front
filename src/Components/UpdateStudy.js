import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { fetchStudyInfo, fetchUpdateStudy } from "../Services/ctm.services.js";
import SelectStudy from "./SelectStudy.js";

export default function UpdateStudy(props) {
  let [selectedStudy, setSelectedStudy] = useState({});
  let [updatedStudy, setUpdatedStudy] = useState({});

  useEffect(() => fetchStudyInfo(selectedStudy), [selectedStudy]);
  useEffect(() => fetchUpdateStudy(updatedStudy), [updatedStudy]);

  return (
    <Container>
      <SelectStudy setStudy={setSelectedStudy} />
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setUpdatedStudy(event.target.end_date.value);
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Enter study end date</Form.Label>
          <Form.Control type="text" name="end_date" />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
