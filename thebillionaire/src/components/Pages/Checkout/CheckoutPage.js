import React, { useEffect, useState } from "react";
import "./CheckoutPage.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { getAddress } from "../../../actions";
import { Button } from "../../Button";
import AddressForm from "./AddressForm";
import { MaterialInput } from "../../MaterialUi";

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
  const [newAddress, setNewAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [confirmAddress, setConfirmAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const dispatch = useDispatch();

  const onAddressSubmit = () => {};

  const selectAddress = (addr) => {
    // console.log(addr);
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
                style={{ marginLeft: "140px" }}
              >
                <div className="cartContainer" style={{ display: "block" }}>
                  {/* <div className="checkoutContainer"> */}
                  <CheckoutStep
                    stepNumber={"1"}
                    title={"LOGIN"}
                    active={!auth.authenticate}
                    body={
                      auth.authenticate ? (
                        <div className="loggedInId">
                          <span style={{ color: "black" }}>
                            <b>{auth.user.fullName}</b>
                          </span>
                          <span style={{ margin: "0 5px", color: "black" }}>
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
                    active={!confirmAddress}
                    body={
                      <>
                        {confirmAddress
                          ? JSON.stringify(selectedAddress)
                          : address.map((adr) => (
                              <div className="flexRow addressContaner">
                                <div>
                                  <input
                                    name="address"
                                    type="radio"
                                    onClick={() => selectAddress(adr)}
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
                                    {adr.selected && (
                                      <Button
                                        buttonSize="btn--wide"
                                        buttonColor="blue"
                                        onClick={() =>
                                          confirmDeliveryAddress(adr)
                                        }
                                      >
                                        DELIVERY HERE
                                      </Button>
                                    )}
                                  </div>
                                  {adr.selected && (
                                    <div style={{ marginRight: "10px" }}>
                                      edit
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
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
