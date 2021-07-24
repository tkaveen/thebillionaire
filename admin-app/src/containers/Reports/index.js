import React, { useRef } from "react";
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import Card from "../../components/Ui/Card";
import { Link } from "react-router-dom";

export default function Reports() {
  const order = useSelector((state) => state.order);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Layout sidebar>
      <Container fluid>
        <Jumbotron
          style={{
            backgroundColor: "rgb(52, 58, 64)",
            color: "white",
            height: "50px",
            alignItems: "center",
          }}
        >
          <h3
            className="text-center"
            style={{ fontSize: "40px", marginTop: "-20px" }}
          >
            Reports
          </h3>
        </Jumbotron>
        <Row>
          <Col>
            <Card style={{ height: "200px" }}>
              <Link to={"/reports/customerreport"}>
                <Button>Customer Report</Button>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: "200px" }}>
              <Link to={"/reports/salesreport"}>
                <Button>sales Report</Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
