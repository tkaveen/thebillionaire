import React, { useRef } from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import CustomerReport from "../../components/Reports/CustomerReport/index";
import SalesReport from "../../components/Reports/SalesReport/index";

export default function Reports() {
  const order = useSelector((state) => state.order);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <Layout sidebar>
      <Jumbotron
        style={{
          color: "white",
        }}
      >
        <CustomerReport items={order.orders} />
      </Jumbotron>
      <Jumbotron
        style={{
          color: "white",
        }}
      >
        <SalesReport items={order.orders} />
      </Jumbotron>
      <br />
    </Layout>
  );
}
