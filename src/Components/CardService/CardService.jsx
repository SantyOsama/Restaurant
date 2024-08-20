import { Col, Row } from "react-bootstrap";
import "./CardService.css";
export default function CardService({ image, title, description }) {
  return (
    <>
      <Col className="card-service">
        <Row>
          <img src={image} alt="service" />
        </Row>
        <Row>
          <p className="card-service-title">{title}</p>
          <p>{description}</p>
        </Row>
      </Col>
    </>
  );
}
