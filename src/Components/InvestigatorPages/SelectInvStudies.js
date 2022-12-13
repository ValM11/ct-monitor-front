import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { fetchInvStudies } from "../../Services/inv.services.js";

export default function SelectInvStudy(props) {
  let [invStudies, setInvStudies] = useState([]);
  let inv = props.inv;

  useEffect(() => fetchInvStudies(inv, setInvStudies), [inv]);

  return (
    <ListGroup className="listGroup" variant="flush">
      <ListGroup.Item variant="info">
        Please select a study<br></br>StudyID / ProductID / Start date
      </ListGroup.Item>
      {invStudies.map((study) => (
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
