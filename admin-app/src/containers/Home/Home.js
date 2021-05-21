import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Jumbotron>
        <h1 className="text-center">Welcome to Admin Dashboard</h1>
      </Jumbotron>
    </Layout>
  );
}
