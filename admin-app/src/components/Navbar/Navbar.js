import React from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

const navbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">ADMIN</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">DASHBOARD</Nav.Link>
          <Nav.Link href="#pricing">DOCTORS</Nav.Link>
          <Nav.Link href="#pricing">MESSAGES</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets"></Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            <button
              class="btn btn-outline-secondary "
              type="button"
              style={{ borderRadius: "4rem" }}
            >
              Sign Out
            </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
