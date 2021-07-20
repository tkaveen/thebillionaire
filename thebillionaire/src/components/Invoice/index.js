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
        <Card id="divToPrint" style={{ width: "800px" }}>
          <div>
            <h1 style={{ textAlign: "center" }}>Invoice</h1>
          </div>
          <img
            src={logo}
            alt="logo"
            // style={{ marginLeft: "150px", marginTop: "50px" }}
          />
          <div>
            <div>
              <div style={{ fontSize: "28px", marginLeft: "20px" }}>
                Order ID : {this.props.orderId}
              </div>
              <br />
              <div style={{ marginLeft: "20px" }}>
                Address : {this.props.address}
              </div>
              <br />
              <div style={{ marginLeft: "20px" }}>
                Payment Type :{" "}
                {this.props.paymentType === "cod"
                  ? "Cash On Delivery"
                  : this.props.paymentType}
              </div>
            </div>
          </div>
          <Table striped bordered hover style={{ marginTop: "50px" }}>
            <thead>
              <tr style={{ color: "black" }}>
                <th>Order Items</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody style={{ color: "black" }}>
              {this.props.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.productId.name}</td>
                  <td>Rs. {item.payablePrice}</td>
                  <td>{item.purchasedQty}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div style={{ marginTop: "50px" }}>
            <h2 style={{ color: "red", fontWeight: "bold" }}>
              Grand Total : Rs. {this.props.total}.00
            </h2>
          </div>
        </Card>
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
