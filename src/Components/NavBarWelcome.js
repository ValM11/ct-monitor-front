import Nav from "react-bootstrap/Nav";

export default function NavBarWelcome(props) {
  function onLinkClick(event) {
    event.preventDefault();
    props.setPage("Homepage");
  }

  return (
    <Nav activeKey="/open">
      <Nav.Item>
        <Nav.Link eventKey="welcome" onClick={(event) => onLinkClick(event)}>
          Back to sign in page
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="justify-content-end">
        <Nav.Link eventKey="disconnect">Disconnect</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
