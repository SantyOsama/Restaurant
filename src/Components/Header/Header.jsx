import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import "./Header.css";

export default function Header() {
  return (
    <>
      <p className="header-paragraph"></p>
      <Container className="mt-4">
        <Navbar bg="#DBDFD0" expand="lg">
          <Navbar.Brand href="#" className="me-auto">
            <img
              src={logo}
              height="40"
              className="d-inline-block align-middle"
              alt="Logo"
            />
            <span className="navbar-brand-text ms-2">
              <i>Bistro Bliss</i>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto custom-nav">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                Menu
              </NavLink>
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  `nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                Pages
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                Contact
              </NavLink>
            </Nav>
            <Button variant="light" className="ms-auto">
              Book A Table
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}
