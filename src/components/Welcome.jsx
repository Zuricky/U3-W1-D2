import { Alert } from "react-bootstrap";

function Welcome() {
  return (
    <>
      {["primary", "success", "danger", "warning"].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default Welcome;
