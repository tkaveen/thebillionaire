import React, { useEffect } from "react";
import "./ProductOverview.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { ButtonGroup, Button, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
// import IncrementButton from '../IncrementButton/IncrementButton';
import { addToCart } from "../../../actions/cart.action";

const ProductOverview = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    const { productId } = props.match.params;
    console.log(props);
    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));
  }, []);

  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__sectionPO">
        <div className="pricing__wrapper">
          {/* <h1 className='pricing__heading'>BEST SELLING</h1> */}
          <div className="pricing__container">
            <Link className="pricing__container-cardpo"></Link>
            <Link className="pricing__container-cardProdOver">
              <div className="pricing__container-cardInfo">
                <br></br>
                <br></br>
                <h1>{product.productDetails.name}</h1>
                <br></br>
                <br></br>
                <br></br>
                <div>
                  <div className="row">
                    <div className="column">
                      {/* <div className='left'>fgdfgzfdg</div> */}
                      <div className="imageholder">
                        <img
                          src={generatePublicUrl(
                            product.productDetails.productPictures[0].img
                          )}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="column">
                      <div className="overview">
                        <div className="overview-content">
                          <h1>Rs. {product.productDetails.price}</h1>
                          <br></br>
                          <p>{product.productDetails.description}</p>
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
                          <Button
                            variant="contained"
                            onClick={() => {
                              const { _id, name, price } =
                                product.productDetails;
                              const img =
                                product.productDetails.productPictures[0].img;
                              dispatch(addToCart({ _id, name, price, img }));
                              props.history.push(`/cart`);
                            }}
                          >
                            Add to Cart
                          </Button>
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
            <Link className="pricing__container-cardpo"></Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default ProductOverview;
