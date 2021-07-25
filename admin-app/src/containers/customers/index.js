import React, { useEffect, useRef } from "react";
import { Container, Table, Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import "./styles.css";

const Customer = () => {
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
            Customers
          </h3>
        </Jumbotron>

        <br />

        <div>
          <Table className="custable" responsive="sm">
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Products Brought</th>

                {/* <th>Category</th> */}
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {order.orders.map((orderItem, index) => (
                <tr key={order._id}>
                  <td>{orderItem.user._id} </td>
                  <td>
                    {orderItem.user.firstName} {orderItem.user.lastName}
                  </td>

                  <td>
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
