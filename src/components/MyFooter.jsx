import { Card } from "react-bootstrap";

function MyFooter() {
  return (
    <>
      <Card className="text-center fixed-bottom">
        <Card.Body>
          <Card.Title>Footer</Card.Title>
          <Card.Text>All rights reserved.</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyFooter;
