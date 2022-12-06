import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreateStudy(props) {
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        var el = event.target.elements;
        console.log(el.study.name);
        console.log(el.study.value);
        //   setNewSite({
        //     sitename: sitename.value,
        //     sitestreet: sitestreet.value,
        //     sitecity: sitecity.value,
        //   });
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Study code</Form.Label>
        <Form.Control type="text" key="study" name="study" required={true} />
        <Form.Text className="text-danger">Required field</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Associated product code</Form.Label>
        <Form.Control type="text" name="product" required={true} />
        <Form.Text className="text-danger">Required field</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Study title</Form.Label>
        <Form.Control type="textarea" name="title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Start date</Form.Label>
        <Form.Control type="date" name="start-date" />
      </Form.Group>
      <Button variant="outline-success" type="submit">
        Submit
      </Button>
    </Form>
  );
}
