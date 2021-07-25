import React, { useRef } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import CustomerReport from "../../components/Reports/CustomerReport/index";

export default function CustomerReports() {
  const order = useSelector((state) => state.order);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Layout sidebar>
      <Container fluid>
        <Jumbotron
         className="jumb"
        >
          <h3
            className="text-center"
            style={{ fontSize: "40px", marginTop: "-20px" }}
          >
            Customer Report
          </h3>
        </Jumbotron>
        <Jumbotron>
          <CustomerReport items={order.orders} />
        </Jumbotron>
      </Container>
    </Layout>
  );
}
