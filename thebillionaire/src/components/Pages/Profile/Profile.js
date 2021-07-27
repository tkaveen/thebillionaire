import React, { useEffect } from "react";
import "./Profile.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, getProductDetailsById } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
import Card from "../../card/Card";
import { CgProfile } from "react-icons/cg";
import empty from "../../images/undraw_empty_xct9.svg";
import avatar from "../../images/avatr.svg";
import { height } from "@material-ui/system";

const Profile = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section_profile">
        <div className="pricing__wrapper_profile">
          <div className="pricing__container_profile">
            <Link className="pricing__container-card_cart"></Link>
            <Link className="pricing__container-cardprofile">
              <br />
              <div>
                <h1 className="text-center" style={{ fontSize: "35px" }}>
                  My Profile
                </h1>
                <br />
                <div style={{ textAlign: "center" }}>
                  <img
                    src={avatar}
                    style={{ width: "200px", height: "200px" }}
                  />
                  {/* <CgProfile size={130} /> */}
                </div>
                <div>
                  <br />
                  {auth.authenticate ? (
                    <div style={{ paddingBottom: "15px", textAlign: "center" }}>
                      <span>
                        <b style={{ fontSize: "30px", textAlign: "center" }}>
                          {auth.user.fullName}
                        </b>
                      </span>
                      <br></br>
                      <span
                        style={{
                          fontSize: "20px",
                          marginLeft: "20px",
                        }}
                      >
                        {auth.user.email}
                      </span>
                    </div>
                  ) : null}
                  <div className="change-pass">
                    <Link to="/passwordchange">
                      <button className="PCButton">Change Password</button>
                    </Link>
                    {/* <a className="forgot" href="/passwordchange">
                      Change Password
                    </a> */}
                  </div>
                </div>

                <br />
                <br />
                <br />
                <h3>Orders Placed</h3>
                <br />
                <div>
                  {user.orders.length > 0 ? (
                    user.orders.map((order) => {
                      return order.items.map((item) => (
                        <Card
                          style={{ maxWidth: "1200px", margin: "5px auto" }}
                        >
                          <Link
                            to={`/order_details/${order._id}`}
                            className="orderItemContainer"
                          >
                            <div
                              style={{
                                width: 80,
                                height: 80,
                                overflow: "hidden",
                              }}
                            >
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
                            <div
                              style={{
                                display: "flex",
                                flex: 1,
                                justifyContent: "space-between",
                              }}
                            >
                              <div style={{ width: 300, marginLeft: "20px" }}>
                                {item.productId.name}
                              </div>
                              <div style={{ width: 100, marginLeft: "20px" }}>
                                {item.purchasedSize}
                              </div>
                              <div style={{ width: 120 }}>
                                Rs. {item.payablePrice}
                              </div>
                              <div style={{ marginRight: "20px" }}>
                                {order.paymentStatus}
                              </div>
                            </div>
                          </Link>
                        </Card>
                      ));
                    })
                  ) : (
                    <div>
                      <img
                        src={empty}
                        style={{ width: "200px", height: "200px" }}
                      />
                    </div>
                  )}
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
export default Profile;
