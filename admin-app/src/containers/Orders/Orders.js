import React from "react";
import Layout from "../../components/Layout/index";
import { Container, Row, Col, Table } from "react-bootstrap";
import Card from "../../components/Ui/Card";
import "./style.css";
import { useSelector } from "react-redux";

export default function Orders() {
  const order = useSelector((state) => state.order);

  return (
    <Layout sidebar>
      <Container fluid>
        <h3>Orders</h3>
        <br />
        <Card headerLeft="ORDER_ID">
          <div style={{ boxSizing: "border-box", padding: "100px" }}>
            <div className="orderTrack">
              <div className="orderStatus">
                <div className="point"></div>
                <div className="orderInfo">
                  <div className="status">Ordered</div>
                  <div className="date">Fri, 2021</div>
                </div>
              </div>
              <div className="orderStatus">
                <div className="point"></div>
                <div className="orderInfo">
                  <div className="status">Ordered</div>
                  <div className="date">Fri, 2021</div>
                </div>
              </div>
              <div className="orderStatus">
                <div className="point"></div>
                <div className="orderInfo">
                  <div className="status">Ordered</div>
                  <div className="date">Fri, 2021</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Layout>
  );
}
