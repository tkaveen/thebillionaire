import React, { useState } from "react";
import "./style.css";
import { generatePublicUrl } from "../../../../urlConfig";
import { Button } from "../../../Button";

/**
 * @author
 * @function CartItem
 **/

const CartItem = (props) => {
  const [qty, setQty] = useState(props.cartItem.qty);
  const { _id, name, price, img, size } = props.cartItem;

  const onQuantityIncrement = () => {
    setQty(qty + 1);
    props.onQuantityInc(_id, qty + 1);
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    props.onQuantityDec(_id, qty - 1);
  };

  return (
    <div className="cartItemContainer ">
      <div className="flexRow">
        <div className="cartProImgContainer">
          <img src={generatePublicUrl(img)} alt={""} />
        </div>
        <div className="cartItemDetails">
          <div>
            <h3 style={{ marginLeft: "120px", marginTop: "25px" }}>{name}</h3>
            <p style={{ marginLeft: "120px", fontSize: "16px" }}>
              Rs. {price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Size
              :&nbsp;
              {size}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "120px",
            }}
          >
            <div className="quantityControl">
              <button onClick={onQuantityDecrement} style={{ color: "white" }}>
                -
              </button>
              <input value={qty} readOnly />
              <button onClick={onQuantityIncrement} style={{ color: "white" }}>
                +
              </button>
            </div>
            <div style={{ marginTop: "32px", marginLeft: "70px" }}>
              {/* <Button buttonStyle="btn--outline">Save</Button> */}
              <span>
                <Button buttonStyle="btn--outline">Remove</Button>
              </span>
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
