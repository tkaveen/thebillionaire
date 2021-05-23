import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = (props) => {
  const auth = useSelector((state) => state.auth);

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link">sign Out</span>
        </li>
        {/* <Nav.Link>
          <NavLink class="btn btn-outline-secondary " type="button">
            Sign Out
          </NavLink>
        </Nav.Link> */}
      </Nav>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
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
    );
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: 1 }}
    >
      {/* <Navbar.Brand href="#home">ADMIN DASHBOARD</Navbar.Brand> */}
      <Link to="/" className="navbar-brand">
        ADMIN DASHBOARD
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="#features">DASHBOARD</Nav.Link> */}
          {/* <Nav.Link href="#pricing">DOCTORS</Nav.Link> */}
          {/* <Nav.Link href="#pricing">MESSAGES</Nav.Link> */}
        </Nav>
        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
