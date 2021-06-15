import React, { useEffect } from "react";
import "./ProductOverview.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
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
                            <div className="column"></div>
                          </div>
                          <br></br>
                          <br></br>
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
                          <Button variant="contained">Buy Now</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="pricing__container-features"></ul>
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
