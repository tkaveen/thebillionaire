import React from "react";
// import './Pricing.css';
import "./ProductOverview.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
// import logo from "../components/images/TB3.png";
// import S1 from "../components/images/S1.png";
// import S2 from "../components/images/S2.png";
import S1 from "../../images/S1.png";
import { ButtonGroup, Button, Divider } from "@material-ui/core";
// import IncrementButton from '../IncrementButton/IncrementButton';

function ProductOverview() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__sectionPO">
        <div className="pricing__wrapper">
          {/* <h1 className='pricing__heading'>BEST SELLING</h1> */}
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-cardpo"></Link>
            <Link to="/sign-up" className="pricing__container-cardProdOver">
              <div className="pricing__container-cardInfo">
                <br></br>
                <br></br>
                <h1>Flower Shirt</h1>
                <br></br>
                <br></br>
                <br></br>
                <div>
                  <div className="row">
                    <div className="column">
                      {/* <div className='left'>fgdfgzfdg</div> */}
                      <div className="imageholder">
                        <img src={S1}></img>
                      </div>
                    </div>
                    <div className="column">
                      <div className="overview">
                        <div className="overview-content">
                          <h1>8.88 $</h1>
                          <br></br>
                          <p>
                            New Flower Shirt with cotton material New Flower
                            Shirt with cotton material New Flower Shirt with
                            cotton material New Flower Shirt with cotton
                            material New Flower Shirt with cotton material New
                            Flower Shirt with cotton material
                          </p>
                          <hr></hr>
                          {/* <Divider color="light" variant="middle" /> */}
                          <br></br>
                          <div className="row">
                            <div className="column">
                              <div className="size">
                                <h3>Size :</h3>
                                <br></br>
                                <div>
                                  <ButtonGroup
                                    color="Secondary"
                                    aria-label="outlined primary button group"
                                  >
                                    <Button>S</Button>
                                    <Button>M</Button>
                                    <Button>L</Button>
                                    <Button>XL</Button>
                                  </ButtonGroup>
                                </div>
                              </div>
                            </div>
                            <div className="column">
                              <div className="quantity">
                                <h3>Quantity :</h3>
                                <br></br>
                                {/* <IncrementButton></IncrementButton> */}
                                <div>
                                  <ButtonGroup
                                    color="Secondary"
                                    aria-label="outlined primary button group"
                                  >
                                    <Button>S</Button>
                                    <Button>M</Button>
                                    <Button>L</Button>
                                    <Button>XL</Button>
                                  </ButtonGroup>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br></br>
                          <br></br>
                          {/* <Button variant="outlined" color='secondary'>Add to Cart</Button> */}
                          <Button variant="contained">Add to Cart</Button>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          {/* <Button variant="outlined">Buy Now</Button> */}
                          <Button variant="contained">Buy Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <h3>Scott T-Shirt</h3>
                <h4>$29.99</h4> */}
                {/* <p>per month</p> */}
                <ul className="pricing__container-features">
                  {/* <li>1000 Transactions</li> */}
                  {/* <li>3.5% Cash Back</li> */}
                  {/* <li>$100,000 Limit</li> */}
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='blue'>
                Buy Now
                </Button> */}
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-cardpo"></Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default ProductOverview;
