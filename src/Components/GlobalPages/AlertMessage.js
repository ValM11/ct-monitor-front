import Alert from "react-bootstrap/Alert";

export default function AlertMessage(props) {
  if (props.message.length !== 0)
    return <Alert variant={props.messageVariant}>{props.message}</Alert>;
  return <br></br>;
}
