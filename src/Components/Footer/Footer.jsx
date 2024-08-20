import { Col, Row, Container } from "react-bootstrap";
import { food1, food2, food3, food4, vector } from "../../Images";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="bg text-white py-4 footer ">
        <Container>
          <Row className="pt-5 mb-5">
            <Col xs={6} sm={4} className="mb-3 mb-md-0 ">
              <div className="d-flex align-items-center">
                <img
                  src={vector}
                  alt="logo"
                  height="40"
                  className="d-inline-block align-middle"
                />{" "}
                <h3 className="ms-2 font-type">
                  <i>Bistro Bliss</i>
                </h3>
              </div>
              <p className="mt-4 second-color" style={{ fontSize: "smaller" }}>
                In the new era of technology we look a in the future with
                certainty and pride to for our company and.
              </p>
              <div></div>
            </Col>
            <Col xs={6} sm={2} className="mb-3 mb-md-0">
              <h6 className="mb-5">Pages</h6>
              <ul className="list-unstyled ">
                <li className="mb-3">Home</li>
                <li className="mb-3">About</li>
                <li className="mb-3">Menu</li>
                <li className="mb-3">Pricing</li>
                <li className="mb-3">Blog</li>
                <li className="mb-3">Contact</li>
                <li className="mb-3">Delivery</li>
              </ul>
            </Col>
            <Col xs={6} sm={2} className="mb-3 mb-md-0">
              <h6 className="mb-5">Utility Pages</h6>
              <ul className="list-unstyled">
                <li className="mb-3">Start Here</li>
                <li className="mb-3">Styleguide</li>
                <li className="mb-3">Password Protected</li>
                <li className="mb-3">404 Not Found</li>
                <li className="mb-3">Licenses</li>
                <li className="mb-3">Changelog</li>
                <li className="mb-3">View More</li>
              </ul>
            </Col>
            <Col xs={6} sm={4}>
              <h6 className="mb-5">Follow Us on Instagram</h6>
              <div className="d-flex gap-3">
                <ul className="list-unstyled">
                  <li>
                    <img src={food1} alt="food" />
                  </li>
                  <li>
                    <img src={food2} alt="food" />
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li>
                    <img src={food3} alt="food" />
                  </li>
                  <li>
                    <img src={food4} alt="food" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center py-3">
          Copyright &copy; {new Date().getFullYear()} Hashtag Developer. All
          Rights Reserved
        </div>
      </footer>
    </>
  );
}
