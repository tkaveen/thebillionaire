import React from "react";
import { Jumbotron, Col, Row, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import './Home.css'

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col md={2} className='slidebar' >Side Bar</Col>
          <Col md={10} style={{marginLeft:'auto'}} >Container</Col>
        </Row>
      </Container>

      {/* <Jumbotron className="text-center" style={{ margin: "5rem" }}>
        <h1>Welcome to Admin Dashboard</h1>
        <br></br>
        <p>
          Et aut est dolor voluptatem natus aut architecto et vel. Enim laborum
          a. Velit vel et. Sit saepe vel excepturi eos reprehenderit rerum
          commodi ut. Quia sunt corporis exercitationem eveniet et quia esse
          consectetur doloribus. Et aut est dolor voluptatem natus aut
          architecto et vel. Enim laborum a. Velit vel et. Sit saepe vel
          excepturi eos reprehenderit rerum commodi ut. Quia sunt corporis
          exercitationem eveniet et quia esse consectetur doloribus. Et aut est
          dolor voluptatem natus aut architecto et vel. Enim laborum a. Velit
          vel et. Sit saepe vel excepturi eos reprehenderit rerum commodi ut.
          Quia sunt corporis exercitationem eveniet et quia esse consectetur
          doloribus.
        </p>
      </Jumbotron> */}
    </Layout>
  );
}
