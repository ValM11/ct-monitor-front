import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { fetchStudies } from "../Services/ctm.services.js";

export default function SelectStudy(props) {
  let [studiesList, setStudiesList] = useState([]);

  useEffect(() => fetchStudies(setStudiesList), []);

  return (
    <ListGroup className="listGroup" variant="flush">
      <ListGroup.Item variant="info">
        Please select a study<br></br>StudyID / ProductID / Start date
      </ListGroup.Item>
      {studiesList.map((study) => (
        <ListGroup.Item
          action
          value={study.study_id}
          onClick={(event) => {
            props.setStudy(event.target.value);
          }}
        >
          {study.study_id} / {study.product_id} / {study.start_date}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
