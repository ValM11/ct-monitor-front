import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { fetchStudies } from "../Services/ctm.services.js";

export default function SelectStudy(props) {
  let [studiesList, setStudiesList] = useState([]);

  useEffect(() => fetchStudies(setStudiesList), []);

  return (
    <ListGroup>
      <ListGroup.Item>Please select a study</ListGroup.Item>
      {studiesList.map((study) => (
        <ListGroup.Item
          action
          variant="info"
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
