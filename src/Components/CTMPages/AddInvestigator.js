import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SelectStudy from "../GlobalPages/SelectStudy.js";
import AddInvestigatorForm from "./AddInvestigatorForm.js";
// import { fetchStudyInfo } from "../Services/ctm.services.js";

export default function UpdateAddInvetsigator(props) {
  let [selectedStudy, setSelectedStudy] = useState("");
  //   let [studyInfos, setStudyInfos] = useState({});

  //   useEffect(
  //     () => fetchStudyInfo(selectedStudy, setStudyInfos),
  //     [selectedStudy]
  //   );

  return (
    <Container>
      <h2>Add investigator</h2>
      <SelectStudy setStudy={setSelectedStudy} />
      <br></br>
      <AddInvestigatorForm study={selectedStudy} />
    </Container>
  );
}
