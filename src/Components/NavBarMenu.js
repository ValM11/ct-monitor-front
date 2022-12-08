import Nav from "react-bootstrap/Nav";

export default function NavBarMenu(props) {
  function onLinkClick(event) {
    event.preventDefault();
    props.setPage(props.page);
  }

  return (
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="menu" onClick={(event) => onLinkClick(event)}>
          Back to menu
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="justify-content-end">
        <Nav.Link eventKey="disconnect">Disconnect</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
