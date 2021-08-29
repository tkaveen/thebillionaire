import React, { useEffect } from "react";
import { Button } from "./Button";
import "./Pricing.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import SH1 from "../components/images/SH1.png";
import TR1 from "../components/images/TR1.png";
import T2 from "../components/images/T2.png";
import T3 from "../components/images/polo.png";
import den from "../components/images/den.png";
import str from "../components/images/str.png";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByWomen } from "../actions";
import { generatePublicUrl } from "../urlConfig";

function NewTrends() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    // const { match } = props;
    dispatch(getProductsByWomen());
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">AVERAGE PRICE </h1>
          <div className="pricing__container">
            {/* {Object.keys(product.productByPrice.under1k).map((key, index) => { */}
            {/* return ( */}
            <>
              {product.productByPrice.upper2k.slice(0, 3).map((product) => (
                <>
                  <Link className="pricing__container-card">
                    <div className="pricing__container-cardInfo">
                      <div className="imgcont">
                        <img
                          src={generatePublicUrl(
                            product.productPictures[0].img
                          )}
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
    // <IconContext.Provider value={{ color: "#fff", size: 64 }}>
    //   <div className="pricing__section">
    //     <div className="pricing__wrapper">
    //       <h1 className="pricing__heading">Average Price</h1>
    //       <div className="pricing__container">
    //         <Link className="pricing__container-card">
    //           <div className="pricing__container-cardInfo">
    //             <img src={str}></img>
    //             <h3>TB Stripe Shirt </h3>
    //             <h4>Rs. 2000</h4>
    //             <ul className="pricing__container-features"></ul>
    //             <Link to="/TB-Collor-T-Shirt/60c0913a0432124014022d3d/p">
    //               <Button buttonSize="btn--wide" buttonColor="primary">
    //                 Buy Now
    //               </Button>
    //             </Link>
    //           </div>
    //         </Link>
    //         <Link className="pricing__container-card">
    //           <div className="pricing__container-cardInfo">
    //             <img src={TR1}></img>
    //             <h3></h3>
    //             <h3 style={{ textAlign: "center" }}>
    //               The Billionaire Office Pant
    //             </h3>
    //             <h4>Rs. 2500</h4>
    //             <ul className="pricing__container-features"></ul>
    //             <Link to="/The-Billionaire-Office-Pant/60b0eb86dd76f11604f444be/p">
    //               <Button buttonSize="btn--wide" buttonColor="blue">
    //                 Buy Now
    //               </Button>
    //             </Link>
    //           </div>
    //         </Link>
    //         <Link to="/sign-up" className="pricing__container-card">
    //           <div className="pricing__container-cardInfo">
    //             <img src={den}></img>
    //             <h3>TB Denim Trouser</h3>
    //             <h4>Rs. 2300</h4>
    //             <p></p>
    //             <Link to="/TB-Pink-Ladies/6100fe00ee8f20036c0310bf/p">
    //               <Button buttonSize="btn--wide" buttonColor="primary">
    //                 Buy Now
    //               </Button>
    //             </Link>
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </IconContext.Provider>
  );
}
export default NewTrends;
