import React from "react";
import Accordion from "react-bootstrap/Accordion";
import CreateComponent from "./CreateComponent.js";

export default function Visit(props) {
  return (
    <Accordion>
      {props.pages.map((page) => (
        <Accordion.Item key={page} eventKey={page}>
          <Accordion.Header>{page}</Accordion.Header>
          <Accordion.Body>
            <CreateComponent
              item={page}
              patient={props.currentPatient}
              visit={props.currentVisit}
            />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
