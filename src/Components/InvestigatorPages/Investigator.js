import React from "react";
import Container from "react-bootstrap/Container";
import NavBarWelcome from "../GlobalPages/NavBarWelcome.js";

export default function Investigator(props) {
  return (
    <Container>
      <NavBarWelcome setPage={props.setPage} />
      <div>Welcome to invetigator page</div>
    </Container>
  );
}
