import React from "react";
import { Jumbotron, Col, Row, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../components/Ui/Card";

export default function Customer() {
  const order = useSelector((state) => state.order);

  return (
    <Layout sidebar>
      <div>
        {order.orders.map((orderItem, index) => (
          <Card
            key={index}
            // headerLeft={"ORDER ID : " + orderItem._id}
            style={{ marginBottom: "15px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "50px 50px",
                alignItems: "center",
              }}
            >
              {/* <div>
                <div className="title">Items</div>
                {orderItem.items.map((item, index) => (
                  <div className="value" key={index}>
                    {item.productId.name} - {item.purchasedSize}
                  </div>
                ))}
              </div> */}
              {/* <div>
                <span className="title">Total Price</span>
                <br />
                <span className="value">{orderItem.totalAmount}</span>
              </div> */}
              {/* <div>
                <span className="title">Payment Type</span> <br />
                <span className="value">{orderItem.paymentType}</span>
              </div> */}
              {/* <div>
                <span className="title">Payment Status</span> <br />
                <span className="value">{orderItem.paymentStatus}</span>
              </div> */}
              <div>
                <span className="title">Customers</span> <br />
                <span className="value">{orderItem.user}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
