import Nav from "react-bootstrap/Nav";

export default function NavBarWelcome(props) {
  function onLinkClick(event) {
    event.preventDefault();
    localStorage.clear();
    props.setPage("Homepage");
  }

  return (
    <Nav className="justify-content-end">
      <Nav.Item onClick={(event) => onLinkClick(event)}>
        <Nav.Link eventKey="disconnect">Disconnect</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
