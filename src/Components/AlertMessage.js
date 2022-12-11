import Alert from "react-bootstrap/Alert";

export default function AlertMessage(props) {
  if (Object.keys(props.message)[0] === "success")
    return <Alert variant="success">{Object.values(props.message)}</Alert>;
  else if (Object.keys(props.message)[0] === "error")
    return <Alert variant="danger">{Object.values(props.message)}</Alert>;
  else return <></>;
}
