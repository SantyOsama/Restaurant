import { Col, Container } from "react-bootstrap";
import { Sec3Home } from "../../Components";
import "./About.css";
import { about, image2 } from "../../Images";
export default function About() {
  return (
    <>
      <Sec3Home image={image2} />
      <div className="bg-image">
        <div className="circle-white">
          <div className="arrow-red"></div>
        </div>
        <p
          className="font-type fs-1"
          style={{ color: "white", padding: "15px", textAlign: "center" }}
        >
          Feel the authentic & original taste from us
        </p>
      </div>
      <div className="background">
        <Container>
          <Col></Col>
          <Col className="mt-4 mb-4">
            <img src={about} alt="food" className="about-img" />{" "}
          </Col>
        </Container>
      </div>
    </>
  );
}
