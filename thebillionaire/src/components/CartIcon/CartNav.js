import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";

/**
 * @author
 * @function Cart
 **/

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);

  return (
    <div style={{ fontSize: "35px", position: "relative", marginTop: "10px" }}>
      {Object.keys(cart.cartItems).length > 0 ? (
        <span
          style={{
            position: "absolute",
            background: "red",
            width: "18px",
            height: "15px",
            borderRadius: "5px",
            fontSize: "10px",
            //   border: "1px solid #fff",
            textAlign: "center",
            alignSelf: "center",
            top: "-12px",
            right: "-6px",
            color: "white",
          }}
        >
          {props.count}
        </span>
      ) : null}

      <RiShoppingCartLine />
    </div>
  );
};

export default Cart;
