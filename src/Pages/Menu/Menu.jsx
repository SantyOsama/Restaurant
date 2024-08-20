import { Button, Col, Container, Row } from "react-bootstrap";
import "./Menu.css";
export default function Menu() {
  return (
    <Container className="mt-4 text-center ">
      <Row>
        <Col>
          <div className="title">Our Menu</div>
        </Col>
      </Row>
      <Row>
        <Col className=" mb-4">
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </Col>
      </Row>
      <Row>
        <Button>all</Button>
        <Button>all</Button>
        <Button>all</Button>
        <Button>all</Button>
        <Button>all</Button>
      </Row>
    </Container>
  );
}
