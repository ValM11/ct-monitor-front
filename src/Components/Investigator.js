import React from "react";
import Container from "react-bootstrap/Container";
import NavBarWelcome from "./NavBarWelcome.js";

export default function Invetsigator(props) {
  return (
    <Container>
      <NavBarWelcome setPage={props.setPage} />
      <div>Welcome to invetigator page</div>
    </Container>
  );
}
