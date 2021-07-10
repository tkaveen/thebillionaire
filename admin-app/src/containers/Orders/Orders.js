import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/index";
import { Container } from "react-bootstrap";
import Card from "../../components/Ui/Card";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../actions/order.action";

const Orders = () => {
  const order = useSelector((state) => state.order);
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const onOrderUpdate = (orderId) => {
    const payload = {
      orderId,
      type,
    };
    dispatch(updateOrder(payload));
  };

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  return (
    <Layout sidebar>
      <Container fluid>
        <h3>Orders</h3>
        <br />
        {order.orders.map((orderItem, index) => (
          <Card
            key={index}
            headerLeft={"ORDER ID : " + orderItem._id}
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
              <div>
                <div className="title">Items</div>
                {orderItem.items.map((item, index) => (
                  <div className="value" key={index}>
                    {item.productId.name} - {item.purchasedSize}
                  </div>
                ))}
              </div>
              <div>
                <span className="title">Total Price</span>
                <br />
                <span className="value">{orderItem.totalAmount}</span>
              </div>
              <div>
                <span className="title">Payment Type</span> <br />
                <span className="value">{orderItem.paymentType}</span>
              </div>
              <div>
                <span className="title">Payment Status</span> <br />
                <span className="value">{orderItem.paymentStatus}</span>
              </div>
              <div>
                <span className="title">Dilivery Address</span> <br />
                <span className="value">{orderItem.addressId.address}</span>
              </div>
            </div>
            <div
              style={{
                boxSizing: "border-box",
                padding: "100px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="orderTrack">
                {orderItem.orderStatus.map((status) => (
                  <div
                    className={`orderStatus ${
                      status.isCompleted ? "active" : ""
                    }`}
                  >
                    <div
                      className={`point ${status.isCompleted ? "active" : ""}`}
                    ></div>
                    <div className="orderInfo">
                      <div className="status">{status.type}</div>
                      <div className="date">{formatDate(status.date)}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* select input  */}
              <div style={{ marginLeft: "100px" }}>
                <select
                  className="form-control"
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value={""}>Select Status</option>
                  {orderItem.orderStatus.map((status) => {
                    return (
                      <>
                        {!status.isCompleted ? (
                          <option key={status.type} value={status.type}>
                            {status.type}
                          </option>
                        ) : null}
                      </>
                    );
                  })}
                </select>
              </div>
              {/* Button to confirm action */}
              <div style={{ marginLeft: "50px" }}>
                <button
                  className="btn btn-dark"
                  onClick={() => onOrderUpdate(orderItem._id)}
                >
                  Confirm
                </button>
              </div>
            </div>
          </Card>
        ))}
      </Container>
    </Layout>
  );
};

export default Orders;
