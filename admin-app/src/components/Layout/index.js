import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Container>{props.children}</Container>
    </>
  );
};

export default Layout;
