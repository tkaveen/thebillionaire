import React, { useEffect } from "react";
import "./Profile.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, getProductDetailsById } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
import Card from "../../card/Card";

const Profile = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
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
              <div className="pricing__container-cardInfo">
                <h3>My Profile</h3>
                <br />
                <h4>My Orders</h4>
                <div>
                  {user.orders.map((order) => {
                    return order.items.map((item) => (
                      <Card style={{ maxWidth: "1200px", margin: "5px auto" }}>
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
                  })}
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
