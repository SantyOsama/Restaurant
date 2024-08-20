import { Container } from "react-bootstrap";
import "./Sec3Home.css";
export default function Sec3Home({ image }) {
  return (
    <div className="sec3">
      <Container className="d-flex pl-5 justify-content-between sec3-div1 ">
        <div className="sec3-container">
          <div className="sec3-picture">
            <img src={image} alt="pic3" />
          </div>
          <div className="floating">
            <p
              style={{
                fontSize: "large",
                fontWeight: "400",
                marginBottom: "30px",
              }}
            >
              Come and vist us
            </p>
            <p>Come and vist us</p>
            <p>Come and vist us</p>
            <p>Come and vist us</p>
          </div>
        </div>
        <div className="d-flex sec3-content">
          <h2>We provide healthy food for your family.</h2>
          <p>
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in city's rich culinary culture, we aim to honor
            our local roots while infusing a global palate.
          </p>
          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>
      </Container>
    </div>
  );
}
