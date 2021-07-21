import React, { Component, PropTypes } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Row, Col, Table } from "react-bootstrap";
import logo from "../../components/images/TB1.png";
import Card from "../card/Card";

export default class Invoice extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }

  render() {
    return (
      <div>
        <div className="mb5">
          <button class="btn btn-primary" onClick={this.printDocument}>
            Download Invoice
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
              INVOICE
            </h1>
          </div>
          <img
            src={logo}
            alt="logo"
            style={{ marginLeft: "130px", marginTop: "20px" }}
          />
          <div>
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
          </div>
          <Table
            striped
            bordered
            hover
            style={{ marginTop: "50px", marginLeft: "20px" }}
          >
            <thead>
              <tr style={{ color: "black", marginBottom: "10px" }}>
                <th style={{ marginLeft: "20px", paddingBottom: "10px" }}>
                  Order Items
                </th>
                <th style={{ paddingLeft: "120px", paddingBottom: "10px" }}>
                  Price
                </th>
                <th style={{ paddingLeft: "50px", paddingBottom: "10px" }}>
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              {this.props.items.map((item, index) => (
                <tr key={index}>
                  <td style={{ paddingBottom: "10px" }}>
                    {item.productId.name}
                  </td>
                  <td style={{ paddingLeft: "120px" }}>
                    Rs. {item.payablePrice}
                  </td>
                  <td style={{ paddingLeft: "75px" }}>{item.purchasedQty}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div style={{ marginTop: "50px", marginLeft: "20px" }}>
            <h2 style={{ color: "red", fontWeight: "bold" }}>
              Grand Total : Rs. {this.props.total}.00
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

// <div
// id="divToPrint"
// className="mt4"
// style={
//   {
//     backgroundColor: "#f5f5f5",
//     width: "210mm",
//     minHeight: "297mm",
//     marginLeft: "auto",
//     marginRight: "auto",
//     border: "2px solid black",
//   }
// }
// >
// <div>
//   <div className="card mb-3" style={{ maxWidth: "100%" }}>
//     <div className="row g-0">
//       <div className="col-md-4">
//         <img
//           src={logo}
//           className="img-fluid rounded-start"
//           alt="logo"
//         />
//       </div>
//       <div className="col-md-8">
//         <div className="card-body">
//           <div className="text-center">
//             <h2 className="card-title">Invoice</h2>
//           </div>
//           <h4 className="card-text">
//             Order ID : {this.props.orderId}
//             <br></br>
//             Address : {this.props.address}
//             <br></br>
//             Payment Type :{" "}
//             {this.props.paymentType === "cod"
//               ? "Cash On Delivery"
//               : this.props.paymentType}
//           </h4>
//         </div>
//       </div>
//     </div>
//   </div>
//   <Table striped bordered hover style={{ marginTop: "50px" }}>
//     <thead>
//       <tr style={{ color: "black" }}>
//         <th>Order Items</th>
//         <th>Price</th>
//         <th>Quantity</th>
//       </tr>
//     </thead>
//     <tbody style={{ color: "black" }}>
//       {this.props.items.map((item, index) => (
//         <tr key={index}>
//           <td>{item.productId.name}</td>
//           <td>Rs. {item.payablePrice}</td>
//           <td>{item.purchasedQty}</td>
//         </tr>
//       ))}
//       <tr>
//         <td>Delivery Charges</td>
//         <td>Rs. 150.00</td>
//         <td>1</td>
//       </tr>
//     </tbody>
//   </Table>
//   <div className="text-center" style={{ marginTop: "50px" }}>
//     <h2
//       className="card-title"
//       style={{ color: "red", fontWeight: "bold" }}
//     >
//       Grand Total : Rs. {this.props.total}.00
//     </h2>
//   </div>
// </div>
// </div>
