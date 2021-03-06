import React, { useEffect, useState } from "react";
import "./CheckoutPage.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { getAddress, getCartItems, addOrder, sendMail } from "../../../actions";
import { Button } from "../../Button";
import AddressForm from "./AddressForm";
import { Anchor, MaterialInput } from "../../MaterialUi";
import PriceDetails from "../../PriceDetails";
import CartPage from "../Shoppingcart/Cart.js";
import Card from "../../card/Card";
import { makeStyles } from "@material-ui/core/styles";
import Buttonn from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paypal from "../../Paypal/index";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

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
  const classes = useStyles();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [location, setLocation] = useState("");
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const dispatch = useDispatch();
  const [checkout, setCheckout] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [paid, setPaid] = useState("");

  const onAddressSubmit = (addr) => {
    setSelectedAddress(addr);
    setConfirmAddress(true);
    setOrderSummary(true);
    setLocation(addr.address);
    console.log(addr.address);
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
    setOrderSummary(true);
    setLocation(addr.address);
    console.log(addr.address);
  };

  const enableAddressEditForm = (addr) => {
    const updatedAddress = address.map((adr) =>
      adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
    );
    setAddress(updatedAddress);
  };

  const userOrderConfirmation = () => {
    const emailObj = {
      receiverMail: auth.user.email,
    };

    dispatch(sendMail(emailObj));

    setOrderConfirmation(true);
    setOrderSummary(false);
    setPaymentOption(true);
  };

  const onConfirmOrder = () => {
    const totalAmount = Object.keys(cart.cartItems).reduce(
      (totalPrice, key) => {
        const { price, qty } = cart.cartItems[key];
        return totalPrice + price * qty;
      },
      0
    );
    const items = Object.keys(cart.cartItems).map((key) => ({
      productId: key,
      payablePrice: cart.cartItems[key].price,
      purchasedQty: cart.cartItems[key].qty,
      purchasedSize: cart.cartItems[key].size,
    }));
    const payload = {
      addressId: selectedAddress._id,
      totalAmount,
      items,
      paymentStatus: paymentStatus,
      paymentType: paymentType,
      location: location,
    };

    console.log(payload);
    dispatch(addOrder(payload));
    setConfirmOrder(true);
  };

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
    auth.authenticate && dispatch(getCartItems());
  }, [auth.authenticate]);

  useEffect(() => {
    const address = user.address.map((adr) => ({
      ...adr,
      selected: false,
      edit: false,
    }));
    setAddress(address);
  }, [user.address]);

  if (confirmOrder) {
    return (
      <Card>
        return <Redirect to={`/thankyou`} />;
      </Card>
    );
  }

  // const currentMail = auth.user.email;

  // const addNewMail = () => {
  //   const emailObj = {
  //     mail: currentMail,
  //   };

  //   dispatch(sendMail(emailObj));
  // };

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
                          <div
                            style={{
                              marginLeft: "59px",
                              paddingBottom: "20px",
                            }}
                          >{`${selectedAddress.address} - ${selectedAddress.pinCode}`}</div>
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
                                <FormControlLabel
                                  name="address"
                                  control={<Radio />}
                                  onClick={() => selectAddress(adr)}
                                  style={{
                                    marginLeft: "10px",
                                    marginBottom: "23px",
                                  }}
                                />
                                {/* <input
                                  name="address"
                                  type="radio"
                                  onClick={() => selectAddress(adr)}
                                  style={{
                                    marginLeft: "25px",
                                    marginBottom: "23px",
                                  }}
                                /> */}
                              </div>
                              <div className="flexRow sb addressinfo">
                                {!adr.edit ? (
                                  <div style={{ width: "100%" }}>
                                    <div className="addressDetail">
                                      <div>
                                        <span
                                          className="addressName"
                                          style={{ marginTop: "10px" }}
                                        >
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
                                      {adr.selected && (
                                        <Anchor
                                          name="EDIT"
                                          onClick={() =>
                                            enableAddressEditForm(adr)
                                          }
                                          style={{
                                            fontWeight: "500",
                                            color: "#2874f0",
                                          }}
                                        />
                                      )}
                                    </div>

                                    <div
                                      className="fullAddress"
                                      style={{ marginTop: "5px" }}
                                    >
                                      {adr.address} <br />
                                      {`${adr.state} - ${adr.pinCode}`}
                                    </div>
                                    {adr.selected && (
                                      <div style={{ marginTop: "10px" }}>
                                        <Buttonn
                                          variant="contained"
                                          size="small"
                                          color="primary"
                                          className={classes.margin}
                                          onClick={() =>
                                            confirmDeliveryAddress(adr)
                                          }
                                          style={{ marginLeft: "-21px" }}
                                        >
                                          DELIVERY HERE
                                        </Buttonn>
                                        {/* <Button
                                          buttonSize="btn--wide"
                                          buttonColor="blue"
                                          onClick={() =>
                                            confirmDeliveryAddress(adr)
                                          }
                                        >
                                          DELIVERY HERE
                                        </Button> */}
                                      </div>
                                    )}
                                  </div>
                                ) : (
                                  <AddressForm
                                    withoutLayout={true}
                                    onSubmitForm={onAddressSubmit}
                                    initialData={adr}
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
                  <CheckoutStep
                    stepNumber={3}
                    title={"ORDER SUMMARY"}
                    active={orderSummary}
                    body={
                      orderSummary ? (
                        <CartPage onlyCartItems={true} />
                      ) : orderConfirmation ? (
                        <div
                          style={{ marginLeft: "59px", paddingBottom: "20px" }}
                        >
                          {Object.keys(cart.cartItems).length} items
                        </div>
                      ) : null
                    }
                  />
                  {orderSummary && (
                    <Card style={{ margin: "10px 0 " }}>
                      <div className="flexRow sb" style={{ padding: "0 20px" }}>
                        <p
                          style={{
                            color: "white",
                            margin: "10px 10px 10px 10px",
                            padding: "10px 10px 10px 10px",
                          }}
                        >
                          Order Confirmation email will be sent to{" "}
                          <b>{auth.user.email}</b>
                        </p>
                        <Buttonn
                          variant="contained"
                          size="small"
                          color="primary"
                          className={classes.margin}
                          onClick={userOrderConfirmation}
                        >
                          Continue
                        </Buttonn>
                      </div>
                    </Card>
                  )}

                  <CheckoutStep
                    stepNumber={4}
                    title={"PAYMENT OPTIONS"}
                    active={paymentOption}
                    body={
                      paymentOption && (
                        <div
                          className=""
                          style={{
                            // display: "flex",
                            alignItems: "center",
                            marginLeft: "25px",
                            marginTop: "20px",
                            paddingBottom: "20px",
                          }}
                        >
                          {checkout ? (
                            <Paypal
                              totalPrice={Object.keys(cart.cartItems).reduce(
                                (totalPrice, key, deli) => {
                                  const { price, qty } = cart.cartItems[key];
                                  return totalPrice + price * qty;
                                },
                                0
                              )}
                              distance="10"
                              offer={Object.keys(cart.cartItems).reduce(
                                function (offer, key) {
                                  return (
                                    offer +
                                    cart.cartItems[key].offer *
                                      cart.cartItems[key].qty
                                  );
                                },
                                0
                              )}
                            ></Paypal>
                          ) : (
                            <>
                              <div
                                style={{
                                  display: "flex",
                                }}
                              >
                                <FormControlLabel
                                  name="paymentOption"
                                  value="online"
                                  control={<Radio />}
                                  onClick={() => {
                                    setCheckout(true);
                                    setPaymentType("online");
                                    setPaymentStatus("completed");
                                  }}
                                />
                                <div
                                  style={{
                                    marginTop: "10px",
                                    marginLeft: "-12px",
                                  }}
                                >
                                  Online Payment
                                </div>
                              </div>
                            </>
                            // <Button
                            //   onClick={() => {
                            //     setCheckout(true);
                            //   }}
                            // >
                            //   ado
                            // </Button>
                          )}
                          <div
                            style={{
                              display: "flex",
                            }}
                          >
                            <FormControlLabel
                              name="paymentOption"
                              value="cod"
                              control={<Radio />}
                              onClick={() => {
                                setPaymentType("cod");
                                setPaymentStatus("pending");
                              }}
                            />
                            {/* <input
                              type="radio"
                              name="paymentOption"
                              value="cod"
                              style={{ marginTop: "3px" }}
                            /> */}
                            <div
                              style={{ marginTop: "10px", marginLeft: "-12px" }}
                            >
                              Cash on Delivery
                            </div>
                          </div>
                          <div
                            style={{ marginLeft: "21px", marginTop: "10px" }}
                          >
                            <Buttonn
                              variant="contained"
                              size="small"
                              color="primary"
                              className={classes.margin}
                              onClick={onConfirmOrder}
                            >
                              Confirm order
                            </Buttonn>
                          </div>
                        </div>
                      )
                    }
                  />
                </div>
                <div
                  style={{
                    marginLeft: "50px",
                    marginTop: "12px",
                    width: "350px",
                  }}
                >
                  <PriceDetails
                    totalItems={Object.keys(cart.cartItems).reduce(function (
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
                    offer={Object.keys(cart.cartItems).reduce(function (
                      offer,
                      key
                    ) {
                      return (
                        offer +
                        cart.cartItems[key].offer * cart.cartItems[key].qty
                      );
                    },
                    0)}
                  />
                  {/* <PriceDetails
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
                  /> */}
                </div>
              </div>
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
