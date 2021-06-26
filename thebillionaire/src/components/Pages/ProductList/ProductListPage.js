import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions/product.action";
import Layout from "../../Layout/Layout";
import "./ProductListPage.css";
import { Button } from "../../Button";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../../urlConfig";
import "./ProductListPage.css";
import { Container, Row, Col } from "react-bootstrap";
// import CarouselProductlist from "../../Carousel/CaraouselProductlist";

const ProductListPage = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <Layout>
      {/* {Object.keys(product.products).map(() => {
        return (
          <div className="card">
            <div className="card-header">
              <div> Mens Collection </div>
              <div className="product-container">
                <div className="product-img-container">
                  <img
                    src={generatePublicUrl(product.productPictures[0].img)}
                    alt=""
                  />
                </div>
                <div className="product-info">
                  <div>{product.name}</div>
                  <div>{product.price}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })} */}

      <IconContext.Provider value={{ color: "#fff", size: 64 }}>
        {/* <CarouselProductlist /> */}
        <div className="pricing__section_Product_List_Page">
          <Container>
            <div className="productlis-container">
              <div className="pricing__wrapper_Product_List_Page">
                {/* <h1 className="pricing__heading_Product_List_Page">Mens</h1> */}

                <div className="pricing__container_Product_List_Page">
                  {product.products &&
                    product.products.map((product, index) => {
                      return (
                        <div>
                          <div
                            to=""
                            className="pricing__container-card_Product_List_Page"
                          >
                            <div
                              className="pricing__container-cardInfo_Product_List_Page"
                              key={index}
                            >
                              <img
                                src={generatePublicUrl(
                                  product.productPictures[0].img
                                )}
                                alt=""
                              />
                              <h3>{product.name}</h3>
                              <h4>Rs. {product.price}</h4>
                              <ul className="pricing__container-features_Product_List_Page"></ul>
                              <Link to={`/${product.slug}/${product._id}/p`}>
                                <Button
                                  buttonSize="btn--wide"
                                  buttonColor="blue"
                                >
                                  Buy Now
                                </Button>
                              </Link>
                            </div>
                          </div>
                          {/* {product.products.map((product) => (
                      <div
                        to=""
                        className="pricing__container-card"
                        style={{ display: "flex" }}
                      >
                        <div className="pricing__container-cardInfo">
                          <img
                            src={generatePublicUrl(
                              product.productPictures[0].img
                            )}
                            alt=""
                          />
                          <h3>{product.name}</h3>
                          <h4>{product.price}</h4>
                          <ul className="pricing__container-features"></ul>
                          <Button buttonSize="btn--wide" buttonColor="primary">
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    ))} */}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </IconContext.Provider>
      {/* <IconContext.Provider value={{ color: "#fff", size: 64 }}>
        <div className="">
          <div className="">
            <h1 className="">Mens Collection</h1>
          </div>

          {Object.keys(product.products).map((key, index) => {
            return (
              <div className="">
                <Link to="" className="" style={{ display: "flex" }}>
                  {product.products.map((product) => (
                    <div className="">
                      <img
                        src={generatePublicUrl(product.productPictures[0].img)}
                        alt=""
                      />
                      <h3>{product.name}</h3>
                      <h4>{product.price}</h4>
                      <ul className=""></ul>
                      <Button buttonSize="btn--wide" buttonColor="primary">
                        Buy Now
                      </Button>
                    </div>
                  ))}
                </Link>
              </div>
            );
          })}
        </div>
      </IconContext.Provider> */}
    </Layout>
  );
};

export default ProductListPage;
