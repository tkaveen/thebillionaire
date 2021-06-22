import React, { useState } from "react";
import Layout from "../../components/Layout/index";
import { Container } from "react-bootstrap";
import Card from "../../components/Ui/Card";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../actions/order.action";

export default function Orders() {
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

  return (
    <Layout sidebar>
      <Container fluid>
        <h3>Orders</h3>
        <br />
        {order.orders.map((orderItem, index) => (
          <Card key={index} headerLeft={orderItem._id}>
            <div
              style={{
                boxSizing: "border-box",
                padding: "100px",
                display: "flex",
                alignItems: "center",
              }}
            >
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
                    <div className="status">Packed</div>
                    <div className="date">Fri, 2021</div>
                  </div>
                </div>
                <div className="orderStatus">
                  <div className="point"></div>
                  <div className="orderInfo">
                    <div className="status">Shipped</div>
                    <div className="date">Fri, 2021</div>
                  </div>
                </div>
                <div className="orderStatus">
                  <div className="point"></div>
                  <div className="orderInfo">
                    <div className="status">Deleivered</div>
                    <div className="date">Fri, 2021</div>
                  </div>
                </div>
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
}
