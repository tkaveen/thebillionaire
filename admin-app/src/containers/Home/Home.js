import React from "react";
import { Jumbotron, Col, Row, Container, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./Home.css";
import { NavLink } from "react-router-dom";
import BarChart from "../../components/Chart/BarChart";
import LineChart from "../../components/Chart/LineChart";
import TB2 from "../../images/TB2.png";

export default function Home() {
  return (
    <Layout sidebar>
      <Jumbotron className="jumbHome">
        <Row>
          <Col md={2}>
            <img src={TB2} />
          </Col>
          <Col md={10}>
            <h2
              className="text-center"
              style={{
                marginTop: "35px",
                marginLeft: "50px",
              }}
            >
              Welcome to The Billionaire Clothing <br /> Admin Dashboard
            </h2>
          </Col>
        </Row>
      </Jumbotron>
      <Row>
        <Col>
          <Card
            className="chartcard"
            style={{
              width: "49rem",
              borderRadius: "10px",
              boxShadow: "3px 3px red, -1em 0 .4em olive",
              backgroundColor: "rgb(52, 58, 64)",
            }}
          >
            <Card.Body>
              <BarChart />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: "47.3rem",
              borderRadius: "10px",
              boxShadow: "3px 3px red, -1em 0 .4em olive",
              backgroundColor: "rgb(52, 58, 64)",
            }}
          >
            <Card.Body>
              <LineChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </Layout>
  );
}
