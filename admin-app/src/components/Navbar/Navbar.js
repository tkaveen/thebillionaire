import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

const navbar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">ADMIN DASHBOARD</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">DASHBOARD</Nav.Link>
          {/* <Nav.Link href="#pricing">DOCTORS</Nav.Link> */}
          <Nav.Link href="#pricing">MESSAGES</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <NavLink
              to="/signin"
              class="btn btn-outline-secondary "
              type="button"
            >
              Sign In
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/signup"
              class="btn btn-outline-secondary "
              type="button"
            >
              Sign Up
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navbar;
