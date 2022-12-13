import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Visit from "./Visit.js";

const CRFschema = [
  { V1: ["Demo", "VS"] },
  { V2: ["Demo", "VS"] },
  { V99: ["AEs"] },
];

export default function Patient(props) {
  if (props.patient !== "")
    return (
      <Accordion>
        {CRFschema.map((visit) => (
          <Accordion.Item eventKey={Object.keys(visit)[0]}>
            <Accordion.Header>{Object.keys(visit)[0]}</Accordion.Header>
            <Accordion.Body>
              <Visit
                pages={Object.values(visit)[0]}
                currentVisit={Object.keys(visit)[0]}
                currentPatient={props.patient}
              ></Visit>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
}
