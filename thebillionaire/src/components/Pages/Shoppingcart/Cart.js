import React from "react";
import "./Cart.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import S1 from "../../images/S1.png";
import { ButtonGroup, Button, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
// import IncrementButton from '../IncrementButton/IncrementButton';

const Cart = (props) => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section_cart">
        <div className="pricing__wrapper_cart">
          {/* <h1 className='pricing__heading'>BEST SELLING</h1> */}
          <div className="pricing__container_cart">
            <Link className="pricing__container-card_cart"></Link>
            <Link className="pricing__container-cardProdOver">
              <div className="pricing__container-cardInfo">Cart</div>
            </Link>
            <Link  className="pricing__container-cardpo"></Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default Cart;
