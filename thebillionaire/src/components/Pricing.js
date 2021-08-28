import React, { useEffect } from "react";
import { Button } from "./Button";
import "./Pricing.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import S1 from "../components/images/S1.png";
import S2 from "../components/images/S2.png";
import T1 from "../components/images/T1.png";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByMen } from "../actions";
import { generatePublicUrl } from "../urlConfig";

const Pricing = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    // const { match } = props;
    dispatch(getProductsByMen());
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">MENS BEST PRICE </h1>
          <div className="pricing__container">
            {/* {Object.keys(product.productByPrice.under1k).map((key, index) => { */}
            {/* return ( */}
            <>
              {product.productByPrice.under1k.slice(0, 3).map((product) => (
                <>
                  <Link className="pricing__container-card">
                    <div className="pricing__container-cardInfo">
                     <div className="imgcont">
                     <img
                        src={generatePublicUrl(product.productPictures[0].img)}
                        alt=""
                      />
                     </div>
                      <h3 style={{ textAlign: "center" }}>{product.name}</h3>
                      <h4>Rs. {product.price}</h4>
                      <ul className="pricing__container-features"></ul>
                      <Link to={`/${product.slug}/${product._id}/p`}>
                        <Button buttonSize="btn--wide" buttonColor="primary">
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </Link>
                </>
              ))}
            </>
            {/* ); */}
            {/* })} */}

            {/* <Link className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img src={T1}></img>
                <h3></h3>
                <h3 style={{ textAlign: "center" }}>
                  The Billionaire Ladies Blue
                </h3>
                <h4>Rs. 900</h4>
                <ul className="pricing__container-features"></ul>
                <Link to="/The-Billionaire-Ladies-Blue/60fbd2226dfd0b3684883896/p">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </Link>
            <Link className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img src={S2}></img>
                <h3>TB Urban Shirt</h3>
                <h4>Rs. 1350</h4>
                <p></p>
                <Link to="/TB-Urban-Shirt/60c053ff0432124014022d34/p">
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default Pricing;
