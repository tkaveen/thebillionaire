import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions/product.action";
import Layout from "../../Layout/Layout";
import "./ProductListPage.css";
import { Button } from "../../Button";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import S1 from "../../images/S1.png";
import S2 from "../../images/S2.png";
import T1 from "../../images/T1.png";

const ProductListPage = (props) => {
  const product = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <Layout>
      <IconContext.Provider value={{ color: "#fff", size: 64 }}>
        <div className="pricing__sectionMens">
          <div className="pricing__wrapper">
            <h1 className="pricing__heading">Mens Collection</h1>
          </div>

          {Object.keys(product.products).map((key, index) => {
            return (
              <div className="pricing__container">
                <Link
                  to=""
                  className="pricing__container-card"
                  style={{ display: "flex" }}
                >
                  {product.products.map((product) => (
                    <div className="pricing__container-cardInfo">
                      <img src={product.productPictures[0].img} alt="" />
                      <h3>{product.name}</h3>
                      <h4>{product.price}</h4>
                      <ul className="pricing__container-features"></ul>
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
      </IconContext.Provider>
    </Layout>
  );
};

export default ProductListPage;
