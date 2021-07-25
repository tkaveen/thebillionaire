import React, { useRef } from "react";
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import Card from "../../components/Ui/Card";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import "./styles.css";

export default function Reports() {
  const order = useSelector((state) => state.order);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Layout sidebar>
      <Container fluid>
        <Jumbotron className="jumb">
          <h3
            className="text-center"
            style={{ fontSize: "40px", marginTop: "-20px" }}
          >
            Reports
          </h3>
        </Jumbotron>
        <Row>
          <Col>
            <Link
              to={"/reports/customerreport"}
              style={{ textDecoration: "none" }}
            >
              <Card
                className="reportcart"
                style={{
                  height: "200px",
                  borderLeft: "8px solid #0f1abd",
                }}
              >
                <Row>
                  <Col>
                    <h3
                      className="text-muted"
                      style={{
                        marginLeft: "20px",
                        marginTop: "72px",
                      }}
                    >
                      Customer Report
                    </h3>
                  </Col>
                  <Col>
                    <BsFillPersonFill
                      style={{
                        fontSize: "100px",
                        marginLeft: "230px",
                        marginTop: "40px",
                        color: "0f1abd",
                      }}
                    />
                  </Col>
                </Row>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link
              to={"/reports/salesreport"}
              style={{ textDecoration: "none" }}
            >
              <Card
                className="reportcart"
                style={{ height: "200px", borderLeft: "8px solid #e42c45" }}
              >
                <Row>
                  <Col>
                    <h3
                      className="text-muted"
                      style={{
                        marginLeft: "20px",
                        marginTop: "72px",
                      }}
                    >
                      Sales Report
                    </h3>
                  </Col>
                  <Col>
                    <GoGraph
                      style={{
                        fontSize: "100px",
                        marginLeft: "230px",
                        marginTop: "40px",
                        color: "#e42c45",
                      }}
                    />
                  </Col>
                </Row>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
