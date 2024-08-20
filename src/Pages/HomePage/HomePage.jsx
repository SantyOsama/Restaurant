import { Button, Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";
import {
  image1,
  man,
  pic1,
  pic2,
  service1,
  service2,
  service3,
  service4,
} from "../../Images";
import { CardCategory, CardService, Sec3Home } from "../../Components";
export default function Header() {
  return (
    <>
      <div className="home-img">
        <div className="home-container">
          <div className="title">Best food for your taste</div>
          <p className="description">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
        </div>
        <div className="home-buttons">
          <button className="ms-auto red big">Book A Table</button>{" "}
          <Button variant="light" className="ms-auto big">
            Explore Menue{" "}
          </Button>
        </div>
      </div>
      <Container className="text-center mt-4 mb-4 ">
        <div className="display-6 medium-text mb-4 fs-1">Browse Our Menue</div>
        <div className="d-flex card-category-container">
          <CardCategory
            icon={"fv"}
            title="Breakfast"
            description="In the new era of technology we look in the future with certainty and pride for our life."
            link="hhh"
          />
          <CardCategory
            icon={"fv"}
            title="Main Dishes"
            description="In the new era of technology we look in the future with certainty and pride for our life."
            link="hhh"
          />
          <CardCategory
            icon={"fv"}
            title="Drinks"
            description="In the new era of technology we look in the future with certainty and pride for our life."
            link="hhh"
          />
          <CardCategory
            icon={"fv"}
            title="Desserts"
            description="In the new era of technology we look in the future with certainty and pride for our life."
            link="hhh"
          />
        </div>
      </Container>
      <div>
        <Sec3Home image={image1} />
      </div>
      <div className="sec4">
        <Container className=" mb-4 ">
          <div className="display-6 medium-text mt-4 mb-4 fs-1">
            We also offer unique services for your events{" "}
          </div>
          <div className="d-flex card-category-container">
            <CardService
              image={service1}
              title={"Caterings"}
              description={
                "In the new era of technology we look in the future with certainty for life."
              }
            />
            <CardService
              image={service2}
              title={"Birthdays"}
              description={
                "In the new era of technology we look in the future with certainty for life."
              }
            />
            <CardService
              image={service3}
              title={"Weddings"}
              description={
                "In the new era of technology we look in the future with certainty for life."
              }
            />
            <CardService
              image={service4}
              title={"Events"}
              description={
                "In the new era of technology we look in the future with certainty for life."
              }
            />
          </div>
        </Container>
      </div>
      <div className="background">
        <Container>
          <div className="sec5">
            <Col>
              <img src={man} alt="man" style={{ width: "100%" }} />
            </Col>
            <Col>
              <Row>
                <img
                  className="img"
                  src={pic1}
                  alt="man"
                  style={{ marginTop: "25px" }}
                />
              </Row>
              <Row>
                <img
                  className="img"
                  src={pic2}
                  alt="man"
                  style={{ marginTop: "25px" }}
                />
              </Row>
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <div className="display-6 medium-text mt-4 mb-4 fs-1">
                Fastest Food Delivery in City
              </div>
              <p>
                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop.
              </p>
              <div style={{ marginTop: "25px", fontWeight: "600" }}>
                <p>Delivery within 30 minutes</p>
                <p>Best Offer & Prices</p>
                <p>Online Services Available</p>
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </>
  );
}
