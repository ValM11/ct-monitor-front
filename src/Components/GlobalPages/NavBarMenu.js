import Nav from "react-bootstrap/Nav";

export default function NavBarMenu(props) {
  function onMenuClick(event) {
    event.preventDefault();
    props.setPageMenu(props.page);
  }
  function onLinkClick(event) {
    event.preventDefault();
    localStorage.clear();
    props.setPageHome("Homepage");
  }

  return (
    <Nav activeKey="/home" className="justify-content-end">
      <Nav.Item>
        <Nav.Link eventKey="menu" onClick={(event) => onMenuClick(event)}>
          Back to menu
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disconnect" onClick={(event) => onLinkClick(event)}>
          Disconnect
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
