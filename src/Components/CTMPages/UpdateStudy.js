import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import SelectStudy from "../GlobalPages/SelectStudy.js";
import UpdateStudyForm from "./UpdateStudyForm.js";
import { fetchStudyInfo } from "../../Services/ctm.services.js";

export default function UpdateStudy(props) {
  let [selectedStudy, setSelectedStudy] = useState("");
  let [studyInfos, setStudyInfos] = useState({});

  useEffect(
    () => fetchStudyInfo(selectedStudy, setStudyInfos),
    [selectedStudy]
  );

  return (
    <Container>
      <h2>Update study</h2>
      <SelectStudy setStudy={setSelectedStudy} />
      <br></br>
      <UpdateStudyForm study={studyInfos} />
    </Container>
  );
}
