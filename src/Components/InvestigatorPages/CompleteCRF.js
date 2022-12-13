import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Patient from "./Patient.js";
import { fetchStudyPatients } from "../../Services/inv.services.js";

export default function CompleteCRF(props) {
  let [patientsList, setPatientsList] = useState([]);
  let [selectedPatient, setSelectedPatient] = useState("");

  useEffect(
    () => fetchStudyPatients(props.study, props.connectedInv, setPatientsList),
    [props.study, props.connectedInv]
  );
  console.log(selectedPatient);
  return (
    <Container>
      <DropdownButton
        variant="outline-primary"
        title={selectedPatient === "" ? "Select patient" : selectedPatient}
      >
        {patientsList.map((patient) => (
          <Dropdown.Item
            eventKey={patient.patient_id}
            onClick={(event) => {
              event.preventDefault();
              console.log(event);
              setSelectedPatient(event.target.text);
            }}
          >
            {patient.patient_id}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <br></br>
      <Patient patient={selectedPatient} />
    </Container>
  );
}
