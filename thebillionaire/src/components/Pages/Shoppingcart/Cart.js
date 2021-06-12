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

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();
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

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section_cart">
        <div>
          {/* <h1 className='pricing__heading'>BEST SELLING</h1> */}
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

                  // <div key={index}>
                  //   <div>{cartItems[key].name}</div>
                  // <CardContent key={index}>
                  //   <Typography
                  //     variant="h5"
                  //     component="h2"
                  //     style={{ color: "white" }}
                  //   >
                  //     {cartItems[key].name} - qty - {cartItems[key].qty}
                  //     <br />
                  //     __________________________________________________________________________________________
                  //   </Typography>

                  //   <Typography
                  //     variant="body2"
                  //     component="p"
                  //     style={{ color: "white" }}
                  //   ></Typography>
                  // </CardContent>
                  // </div>
                ))}
              </div>
              <Card style={{ width: "500px", color: "black" }}>Price</Card>
            </Link>
            <Link className="pricing__container-cardpo"></Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default Cart;
