import React, { useEffect } from "react";
import "./CheckoutPage.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { getAddress } from "../../../actions";
import Card from "../../card/Card";
import { Button } from "../../Button";
import AddressForm from "./AddressForm";
import { Container } from "react-bootstrap";

const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div className={`checkoutHeader ${props.active && "active"}`}>
        <div>
          <span className="stepNumber">{props.stepNumber}</span>
          <span className="stepTitle">{props.title}</span>
        </div>
      </div>
      {props.body && props.body}
    </div>
  );
};

const CheckoutPage = (props) => {
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onAddressSubmit = () => {};

  useEffect(() => {
    dispatch(getAddress());
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section_check">
        <div>
          <div className="pricing__container_check">
            <Link className="pricing__container-card_cart"></Link>
            <Link className="pricing__container-card_check">
              <div className="check-header">
                <span>
                  <h3>Checkout&nbsp; | &nbsp; </h3>
                </span>
                <HiOutlineShoppingBag size={27} />
              </div>
              <br />
              <br />
              {/* <Container style={{width:"900px", background:"white"}}> */}
              <div
                className="check-Item-Container"
                style={{ marginLeft: "140px" }}
              >
                <div className="cartContainer" style={{ display: "block" }}>
                  {/* <div className="checkoutContainer"> */}
                  <CheckoutStep
                    stepNumber={"1"}
                    title={"LOGIN"}
                    active={!auth.authenticate}
                    body={
                      <div className="loggedInId">
                        <span style={{ color: "black" }}>
                          <b>{auth.user.fullName}</b>
                        </span>
                        <span style={{ margin: "0 5px", color: "black" }}>
                          {auth.user.email}
                        </span>
                      </div>
                    }
                  />
                  <CheckoutStep
                    stepNumber={"2"}
                    title={"DILIVERY ADDRESS"}
                    active={true}
                    body={
                      <>
                        {(user.address || []).map((adr) => (
                          <div className="flexRow addressContaner">
                            <div>
                              <input
                                name="address"
                                type="radio"
                                style={{ marginLeft: "25px" }}
                              />
                            </div>
                            <div
                              className="flexRow sb addressinfo"
                              style={{ color: "black" }}
                            >
                              <div>
                                <div>
                                  <span>{adr.name}</span>
                                  <span>{adr.addressType}</span>
                                  <span>{adr.mobileNumber}</span>
                                </div>
                                <div style={{ color: "black" }}>
                                  {adr.address}
                                </div>
                              </div>
                              <div style={{ marginRight: "10px" }}>edit</div>
                            </div>
                          </div>
                        ))}
                      </>
                    }
                  />
                  <AddressForm
                    onSubmitForm={onAddressSubmit}
                    onCancel={() => {}}
                  />
                  <CheckoutStep stepNumber={3} title={"ORDER SUMMARY"} />
                  <CheckoutStep stepNumber={4} title={"PAYMENT OPTIONS"} />
                </div>
                {/* </div> */}
              </div>
              {/* </Container> */}
              <br />
            </Link>
            <Link className="pricing__container-cardpo"></Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default CheckoutPage;
