import React, { useEffect, useRef } from "react";
import "./style.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../../actions";
import Card from "../../card/Card";
import { generatePublicUrl } from "../../../urlConfig";
import { useReactToPrint } from "react-to-print";
import Invoice from "../../Invoice/index";

const OrderDetailsPage = (props) => {
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.user.orderDetails);

  useEffect(() => {
    console.log({ props });
    const payload = {
      orderId: props.match.params.orderId,
    };
    dispatch(getOrder(payload));
  }, []);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const formatDate = (date) => {
    if (date) {
      const d = new Date(date);
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
    return "";
  };

  const formatDate2 = (date) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (date) {
      const d = new Date(date);
      return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
  };

  if (!(orderDetails && orderDetails.address)) {
    return null;
  }

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section_OrderDetails">
        <div className="pricing__wrapper_OrderDetails">
          <div className="pricing__container-card_cart">
            <Link className="pricing__container_OrderDetails">
              <div className="pricing__container-cardInfo">
                <br />
                <h4>Orders</h4>
                <div
                  style={{
                    width: "1160px",
                    margin: "10px auto",
                  }}
                >
                  <Card
                    style={{
                      margin: "10px 0",
                    }}
                  >
                    <div className="delAdrContainer">
                      <div className="delAdrDetails">
                        <div className="delTitle">Delivery Address</div>
                        <div className="delName">
                          {orderDetails.address.name}
                        </div>
                        <div className="delAddress">
                          {orderDetails.address.address}
                        </div>
                        <div className="delPhoneNumber">
                          Phone number {orderDetails.address.mobileNumber}
                        </div>
                      </div>
                      <div className="delMoreActionContainer">
                        <div className="delTitle">More Actions</div>
                        <Invoice
                          orderId={orderDetails._id}
                          address={orderDetails.address.address}
                          items={orderDetails.items}
                          paymentType={orderDetails.paymentType}
                          total={orderDetails.totalAmount}
                        ></Invoice>
                        {/* <div className="delName">Download Invoice</div> */}
                      </div>
                    </div>
                  </Card>
                  {orderDetails.items.map((item, index) => (
                    <Card
                      style={{
                        display: "flex",
                        padding: "20px 0",
                        margin: "10px 0",
                      }}
                    >
                      <div className="flexRow">
                        <div className="delItemImgContainer">
                          <img
                            style={{
                              width: 80,
                              height: 80,
                            }}
                            src={generatePublicUrl(
                              item.productId.productPictures[0].img
                            )}
                          />
                        </div>
                        <div style={{ width: "250px", marginLeft: "50px" }}>
                          <div className="delItemName">
                            {item.productId.name}
                          </div>
                          {/* <Price value={item.payablePrice} /> */}
                        </div>
                      </div>
                      <div style={{ padding: "25px 50px" }}>
                        <div className="orderTrack">
                          {orderDetails.orderStatus.map((status) => (
                            <div
                              className={`orderStatus ${
                                status.isCompleted ? "active" : ""
                              }`}
                            >
                              <div
                                className={`point ${
                                  status.isCompleted ? "active" : ""
                                }`}
                              ></div>
                              <div className="orderInfo">
                                <div className="status">{status.type}</div>
                                <div className="date">
                                  {formatDate(status.date)}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ fontWeight: "500", fontSize: 14 }}>
                        {orderDetails.orderStatus[3].isCompleted &&
                          `Delivered on ${formatDate2(
                            orderDetails.orderStatus[3].date
                          )}`}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-cardpo"></Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default OrderDetailsPage;
