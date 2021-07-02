import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

/**
 * @author
 * @function Cart
 **/

const Cart = (props) => {
  return (
    <div style={{ fontSize: "35px", position: "relative", marginTop: "10px" }}>
      <span
        style={{
          position: "absolute",
          background: "red",
          width: "15px",
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
      <RiShoppingCartLine />
    </div>
  );
};

export default Cart;
