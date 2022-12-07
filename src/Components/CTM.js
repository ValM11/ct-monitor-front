import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CreateStudy from "./CreateStudy.js";
import UpdateStudy from "./UpdateStudy.js";
import AddInvestigator from "./AddInvestigator.js";

export default function CTM(props) {
  var [ctmPage, setCtmPage] = useState("CTM Menu");
  var CTMOptions = {
    CreateStudy: "Create study",
    UpdateStudy: "Update study information",
    AddInvestigator: "Add Site/Investigator",
    DeleteSite: "Delete site",
  };
  if (ctmPage === "CTM Menu") {
    return (
      <Container>
        <h2>Welcome to CTM portal</h2>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card
                onClick={() => {
                  setCtmPage(Object.keys(CTMOptions)[idx]);
                }}
              >
                <Card.Img src="medical-equipment-1318743.jpeg" />
                <Card.ImgOverlay>
                  <Card.Title>{Object.values(CTMOptions)[idx]}</Card.Title>
                  {/* <Card.Text>{Object.keys(CTMOptions)[idx]}</Card.Text> */}
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
  if (ctmPage === "CreateStudy") {
    return <CreateStudy setPage={setCtmPage} />;
  }
  if (ctmPage === "UpdateStudy") {
    return <UpdateStudy setPage={setCtmPage} />;
  }
  if (ctmPage === "AddInvestigator") {
    return <AddInvestigator setPage={setCtmPage} />;
  }
  //   if (ctmPage === "DeleteSite") {
  //     return <DeleteSite setPage={setCtmPage} />;
  //   }
}
