import React, { useState } from "react";
import "./style.css";
import { generatePublicUrl } from "../../../../urlConfig";
import { Button } from "../../../Button";

/**
 * @author
 * @function CartItem
 **/

const CartItem = (props) => {
  const { _id, name, price, qty, img } = props.cartItem;

  return (
    <div className="cartItemContainer ">
      <div className="flexRow">
        <div className="cartProImgContainer">
          <img src={generatePublicUrl(img)} alt={""} />
        </div>
        <div className="cartItemDetails">
          <div>
            <h3 style={{ marginLeft: "120px", marginTop: "25px" }}>{name}</h3>
            <p style={{ marginLeft: "120px", fontSize: "16px" }}>Rs. {price}</p>
          </div>

          {/* <div style={{ marginLeft: "70px" }}>Delivery in 3 - 5 days</div> */}
          <div
            style={{
              display: "flex",
              marginLeft: "120px",
            }}
          >
            <div className="quantityControl">
              <button style={{ color: "white" }}>-</button>
              <input value={qty} readOnly />
              <button style={{ color: "white" }}>+</button>
            </div>
            <div style={{ marginTop: "32px", marginLeft: "70px" }}>
              <Button buttonStyle="btn--outline">Save</Button>
              <span>
                {" "}
                <Button buttonStyle="btn--outline">Remove</Button>
              </span>
              {/* <button className="cartActionBtn" style={{ color: "white" }}>
                save for later
              </button>
              <button className="cartActionBtn" style={{ color: "white" }}>
                Remove
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default CartItem;
