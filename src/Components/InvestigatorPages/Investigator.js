import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import NavBarWelcome from "../GlobalPages/NavBarWelcome.js";
import NavBarMenu from "../GlobalPages/NavBarMenu.js";
import SelectInvStudies from "./SelectInvStudies.js";
import AddPatient from "./AddPatient.js";
import CompleteCRF from "./CompleteCRF.js";

export default function Invetigator(props) {
  var [invPage, setInvPage] = useState("Inv Menu");
  var [selectedStudy, setSelectedStudy] = useState("");

  var inv = localStorage.getItem("userEmail");

  if (invPage === "Inv Menu") {
    return (
      <Container>
        <NavBarWelcome setPage={props.setPage} />
        <h2>Welcome to investigator portal</h2>
        <SelectInvStudies setStudy={setSelectedStudy} inv={inv} />
        <Row>
          <Col className="text-center">
            <Button variant="outline-primary" onClick={() => setInvPage("Add")}>
              Add new patient
            </Button>
          </Col>
          <Col className="text-center">
            <Button variant="outline-primary" onClick={() => setInvPage("CRF")}>
              Complete patients CRF
            </Button>
          </Col>
        </Row>
      </Container>
    );
  } else if (invPage === "Add") {
    return (
      <Container>
        <NavBarMenu
          setPageMenu={setInvPage}
          setPageHome={props.setPage}
          page="Inv Menu"
        />
        <AddPatient study={selectedStudy} />
      </Container>
    );
  } else if (invPage === "CRF") {
    return (
      <Container>
        <NavBarMenu
          setPageMenu={setInvPage}
          setPageHome={props.setPage}
          page="Inv Menu"
        />
        <CompleteCRF study={selectedStudy} connectedInv={inv} />
      </Container>
    );
  }
}
