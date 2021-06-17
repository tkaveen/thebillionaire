import React, { useEffect, useState } from "react";
import "./CheckoutPage.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { getAddress } from "../../../actions";
import { Button } from "../../Button";
import AddressForm from "./AddressForm";
import { Anchor, MaterialInput } from "../../MaterialUi";
import PriceDetails from "../../PriceDetails";

const CheckoutStep = (props) => {
  return (
    <div className="checkoutStep">
      <div
        onClick={props.onClick}
        className={`checkoutHeader ${props.active && "active"}`}
      >
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
  const cart = useSelector((state) => state.cart);
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const dispatch = useDispatch();

  const onAddressSubmit = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
  };

  const selectAddress = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id
        ? { ...adr, selected: true }
        : { ...adr, selected: false }
    );
    setAddress(updatedAddress);
  };

  const confirmDeliveryAddress = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
  };

  const enableAddressEditForm = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
  }, [auth.authenticate]);

  useEffect(() => {
    const address = user.address.map((adr) => ({
      ...adr,
      selected: false,
      edit: false,
    }));
    setAddress(address);
  }, [user.address]);

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
                style={{ marginLeft: "140px", display: "flex" }}
              >
                <div className="cartContainer" style={{ display: "block" }}>
                  {/* <div className="checkoutContainer"> */}
                  <CheckoutStep
                    stepNumber={"1"}
                    title={"LOGIN"}
                    active={!auth.authenticate}
                    body={
                      auth.authenticate ? (
                        <div
                          className="loggedInId"
                          style={{ paddingBottom: "15px" }}
                        >
                          <span>
                            <b style={{ fontSize: "15px" }}>
                              {auth.user.fullName}
                            </b>
                          </span>
                          <span
                            style={{
                              margin: "0 5px",
                              marginLeft: "10px",
                              paddingBottom: "20px",
                              fontSize: "15px",
                            }}
                          >
                            {auth.user.email}
                          </span>
                        </div>
                      ) : (
                        <div>
                          <MaterialInput label="Email" />
                        </div>
                      )
                    }
                  />
                  <CheckoutStep
                    stepNumber={"2"}
                    title={"DILIVERY ADDRESS"}
                    active={!confirmAddress && auth.authenticate}
                    body={
                      <>
                        {confirmAddress ? (
                          <div>{`${selectedAddress.address} - ${selectedAddress.pinCode}`}</div>
                        ) : (
                          address.map((adr) => (
                            <div
                              className="flexRow addressContaner"
                              style={{
                                marginTop: "15px",
                                paddingBottom: "20px",
                              }}
                            >
                              <div>
                                <input
                                  name="address"
                                  type="radio"
                                  onClick={() => selectAddress(adr)}
                                  style={{
                                    marginLeft: "25px",
                                    marginBottom: "23px",
                                  }}
                                />
                              </div>
                              <div className="flexRow sb addressinfo">
                                {!adr.edit ? (
                                  <div>
                                    <div>
                                      {adr.selected && (
                                        <Anchor
                                          name="EDIT"
                                          style={{
                                            color: "white",
                                            fontWeight: "500",
                                            marginLeft: "600px",
                                          }}
                                          onClick={() =>
                                            enableAddressEditForm(adr)
                                          }
                                        />
                                      )}
                                      <span className="addressName">
                                        {adr.name}
                                      </span>
                                      <span
                                        className="addressType"
                                        style={{ marginLeft: "25px" }}
                                      >
                                        {adr.addressType}
                                      </span>
                                      <span style={{ marginLeft: "25px" }}>
                                        {adr.mobileNumber}
                                      </span>
                                    </div>

                                    <div
                                      className="fullAddress"
                                      style={{ marginTop: "5px" }}
                                    >
                                      {adr.address} <br />{" "}
                                      {`${adr.state} - ${adr.pinCode}`}
                                    </div>
                                    {adr.selected && (
                                      <div style={{ marginTop: "10px" }}>
                                        <Button
                                          buttonSize="btn--wide"
                                          buttonColor="blue"
                                          onClick={() =>
                                            confirmDeliveryAddress(adr)
                                          }
                                        >
                                          DELIVERY HERE
                                        </Button>
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <AddressForm
                                    withoutLayout={true}
                                    onSubmitForm={onAddressSubmit}
                                    onSubmitForm={onAddressSubmit}
                                    onCancel={() => {}}
                                  />
                                )}
                                {/* <div>
                                  {adr.selected && (
                                    <div style={{ marginRight: "10px" }}>
                                      edit
                                    </div>
                                  )}
                                </div> */}
                              </div>
                            </div>
                          ))
                        )}
                      </>
                    }
                  />
                  {confirmAddress ? null : newAddress ? (
                    <AddressForm
                      onSubmitForm={onAddressSubmit}
                      onCancel={() => {}}
                    />
                  ) : (
                    <CheckoutStep
                      stepNumber={"+"}
                      title={"ADD NEW ADDRESS"}
                      active={false}
                      onClick={() => {
                        setNewAddress(true);
                      }}
                    />
                  )}
                  <CheckoutStep stepNumber={3} title={"ORDER SUMMARY"} />
                  <CheckoutStep stepNumber={4} title={"PAYMENT OPTIONS"} />
                </div>
                <div
                  style={{
                    marginLeft: "50px",
                    marginTop: "12px",
                    width: "350px",
                  }}
                >
                  <PriceDetails
                    totalItem={Object.keys(cart.cartItems).reduce(function (
                      qty,
                      key
                    ) {
                      return qty + cart.cartItems[key].qty;
                    },
                    0)}
                    totalPrice={Object.keys(cart.cartItems).reduce(
                      (totalPrice, key) => {
                        const { price, qty } = cart.cartItems[key];
                        return totalPrice + price * qty;
                      },
                      0
                    )}
                  />
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
