import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CreateStudy from "./CreateStudy.js";
import UpdateStudy from "./UpdateStudy.js";
import AddInvestigator from "./AddInvestigator.js";
import NavBarWelcome from "./NavBarWelcome.js";
import NavBarMenu from "./NavBarMenu.js";

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
        <NavBarWelcome setPage={props.setPage} />
        <h2>Welcome to CTM portal</h2>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card
                border="primary"
                onClick={() => {
                  setCtmPage(Object.keys(CTMOptions)[idx]);
                }}
              >
                <Card.Img
                  className="homeImage"
                  src="medical-equipment-1318743.jpeg"
                />
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
    return (
      <Container>
        <NavBarMenu setPage={setCtmPage} page="CTM Menu" />
        <CreateStudy setPage={setCtmPage} />
      </Container>
    );
  }
  if (ctmPage === "UpdateStudy") {
    return (
      <Container>
        <NavBarMenu setPage={setCtmPage} page="CTM Menu" />
        <UpdateStudy setPage={setCtmPage} />
      </Container>
    );
  }
  if (ctmPage === "AddInvestigator") {
    return (
      <Container>
        <NavBarMenu setPage={setCtmPage} page="CTM Menu" />
        <AddInvestigator setPage={setCtmPage} />
      </Container>
    );
  }
  //   if (ctmPage === "DeleteSite") {
  //     return <DeleteSite setPage={setCtmPage} />;
  //   }
}
