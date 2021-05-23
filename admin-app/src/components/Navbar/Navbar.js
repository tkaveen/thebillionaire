import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/auth.actions";

const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link" onClick={logout}>
            Sign Out
          </span>
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
        <li className="nav-item">
          <NavLink
            to="/signin"
            className="nav-link"
            // class="btn btn-outline-secondary "
            // type="button"
          >
            Sign In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/signup"
            className="nav-link"
            // class="btn btn-outline-secondary "
            // type="button"
          >
            Sign Up
          </NavLink>
        </li>
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
      <Container fluid>
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
      </Container>
    </Navbar>
  );
};

export default Header;
