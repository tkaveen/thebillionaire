import React, { Component, PropTypes } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Row, Col, Table } from "react-bootstrap";
import logo from "../../../images/TB1.png";

export default class salesReport extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output("dataurlnewwindow");
      pdf.save("download.pdf");
    });
  }

  render() {
    return (
      <div>
        <div className="mb5">
          <button class="btn btn-primary" onClick={this.printDocument}>
            Download Sales Report
          </button>
        </div>
        <br />
        <div id="divToPrint" style={{ width: "800px" }}>
          <div>
            <h1
              style={{
                textAlign: "center",
                color: "black",
                paddingTop: "40px",
              }}
            >
              Sales Report
            </h1>
          </div>
          <img
            src={logo}
            alt="logo"
            style={{ marginLeft: "130px", marginTop: "20px" }}
          />
          {/* <div>
            <div>
              <div
                style={{ fontSize: "20px", marginLeft: "20px", color: "black" }}
              >
                <b>Order ID : {this.props.orderId}</b>
              </div>
              <br />
              <div style={{ marginLeft: "20px", color: "black" }}>
                Address : {this.props.address}
              </div>
              <br />
              <div style={{ marginLeft: "20px", color: "black" }}>
                Payment Type :{" "}
                {this.props.paymentType === "cod"
                  ? "Cash On Delivery"
                  : this.props.paymentType}
              </div>
            </div>
          </div> */}
          <Table
            striped
            bordered
            style={{ marginTop: "50px", marginLeft: "20px" }}
          >
            <thead>
              <tr style={{ color: "black", marginBottom: "10px" }}>
                <th style={{ marginLeft: "20px", paddingBottom: "10px" }}>
                  Order ID
                </th>
                <th style={{ paddingLeft: "120px", paddingBottom: "10px" }}>
                  Products Brought
                </th>
                <th style={{ paddingLeft: "120px", paddingBottom: "10px" }}>
                  Total Price
                </th>
                <th style={{ paddingLeft: "120px", paddingBottom: "10px" }}>
                  Payment Method
                </th>
                <th style={{ paddingLeft: "120px", paddingBottom: "10px" }}>
                  Delivery Status
                </th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              {this.props.items.map((orderItem, index) => (
                <tr key={index}>
                  <td>{orderItem._id}</td>

                  <td>
                    {orderItem.items.map((item, index) => (
                      <div className="value" key={index}>
                        {item.productId.name} - {item.purchasedSize}
                      </div>
                    ))}
                  </td>
                  <td>{orderItem.totalAmount}</td>
                  <td>{orderItem.paymentType}</td>
                  <td>{orderItem.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
