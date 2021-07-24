import React, { useRef } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import SalesReport from "../../components/Reports/SalesReport/index";

export default function SalesReports() {
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
            Sales Report
          </h3>
        </Jumbotron>

        <Jumbotron>
          <SalesReport items={order.orders} />
        </Jumbotron>
      </Container>
    </Layout>
  );
}
