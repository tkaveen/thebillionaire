import React, { useEffect, useState } from "react";
import "./Cart.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { RiShoppingCartLine } from "react-icons/ri";
import CartItem from "./CartItem";
import { addToCart } from "../../../actions";
import Card from "../../card/Card";
import { Button } from "../../Button";
import PriceDetails from "../../PriceDetails";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  const onQuantityIncrement = (_id, qty) => {
    // console.log({ _id, qty });
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  if (props.onlyCartItems) {
    return (
      <>
        {Object.keys(cartItems).map((key, index) => (
          <Container>
            <CartItem
              key={index}
              cartItem={cartItems[key]}
              onQuantityInc={onQuantityIncrement}
              onQuantityDec={onQuantityDecrement}
            ></CartItem>
          </Container>
        ))}
      </>
    );
  }

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section_cart">
        <div>
          <div className="pricing__container_cart">
            <Link className="pricing__container-card_cart"></Link>
            <Link className="pricing__container-cardProdOver_cart">
              {/* <div className="pricing__container-cardInfo_cart"> */}
              <div className="cart-header">
                <span>
                  <h3>My Cart&nbsp; | &nbsp; </h3>
                </span>
                <RiShoppingCartLine size={27} />
              </div>
              <br />
              <br />

              <div
                className="cart-Item-Container"
                style={{ marginLeft: "140px" }}
              >
                {Object.keys(cartItems).map((key, index) => (
                  <Container>
                    <CartItem
                      key={index}
                      cartItem={cartItems[key]}
                      onQuantityInc={onQuantityIncrement}
                      onQuantityDec={onQuantityDecrement}
                    ></CartItem>
                  </Container>
                ))}
              </div>
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
              <br />
              <br />
              <Button
                buttonSize="btn--wide"
                buttonColor="blue"
                onClick={() => props.history.push(`/checkout`)}
              >
                Place Order
              </Button>
              <br />
              <br />
              <br />
            </Link>
            <Link className="pricing__container-cardpo"></Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default Cart;
