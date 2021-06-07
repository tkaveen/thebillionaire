import React from "react";
import { Jumbotron, Col, Row, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Layout sidebar>
      <Jumbotron>
        <h2 className="text-center">
          Welcome to The Billionaire Clothing <br /> Admin Dashboard
        </h2>
      </Jumbotron>
    </Layout>
  );
}
