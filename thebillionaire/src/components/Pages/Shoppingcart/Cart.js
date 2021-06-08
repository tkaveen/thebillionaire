import React from "react";
import "./Cart.css";

import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import S1 from "../../images/S1.png";
import { ButtonGroup, Button, Divider, Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
import { RiShoppingCartLine } from "react-icons/ri";
// import Card from "../../card/Card";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CartItem from "./CartItem";


// import IncrementButton from '../IncrementButton/IncrementButton';
const useStyles = makeStyles({
  root: {},

  title: {
    fontSize: 14,
  },
});

const Cart = (props) => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const cartItems = cart.cartItems;

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section_cart">
        <div>
          {/* <h1 className='pricing__heading'>BEST SELLING</h1> */}
          <div className="pricing__container_cart">
            <Link className="pricing__container-card_cart"></Link>
            <Link className="pricing__container-cardProdOver">
              <div className="pricing__container-cardInfo">
                <div className="cart-header">
                  <span>
                    <h3>My Cart&nbsp; | &nbsp; </h3>
                  </span>
                  <RiShoppingCartLine size={27} />
                </div>
                <br />
                <br />

                <div className="cart-Item-Container" style={{marginLeft:"30px"}}>
                  {Object.keys(cartItems).map((key, index) => (
                    <Container>
                      <CartItem
                        key={index}
                        cartItem={cartItems[key]}
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
              </div>
            </Link>
            <Link className="pricing__container-cardpo"></Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default Cart;
