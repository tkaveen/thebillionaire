import React from "react";
import { Jumbotron, Col, Row, Container, Table } from "react-bootstrap";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../components/Ui/Card";

const Customer = () => {
  const order = useSelector((state) => state.order);

  return (
    <Layout sidebar>
      <Container fluid>
        <h3>Customers</h3>
        <br />
        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th></th>
                <th>Customer Name</th>
                <th>Products Brought</th>
                {/* <th>Quantity</th> */}
                {/* <th>Category</th> */}
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {order.orders.map((orderItem, index) => (
                <tr key={order._id}>
                  <td>{/* <IoShirtOutline /> */}</td>
                  <td>
                    {orderItem.user.firstName} {orderItem.user.lastName}
                  </td>
                  <td>
                    {" "}
                    {orderItem.items.map((item, index) => (
                      <div className="value" key={index}>
                        {item.productId.name} - {item.purchasedSize}
                      </div>
                    ))}
                  </td>
                  {/* <td>{orderItem.user.firstName}</td> */}
                  {/* <td>{orderItem.user.firstName}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </Layout>
  );
};

export default Customer;
