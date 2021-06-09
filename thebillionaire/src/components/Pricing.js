import React from "react";
import { Button } from "./Button";
import "./Pricing.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import S1 from "../components/images/S1.png";
import S2 from "../components/images/S2.png";
import T1 from "../components/images/T1.png";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">BEST SELLING</h1>
          <div className="pricing__container">
            <Link className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img src={S1}></img>
                <h3 style={{ textAlign: "center" }}>
                  The Billionaire Flower Shirt
                </h3>
                <h4>Rs. 2000</h4>
                <ul className="pricing__container-features"></ul>
                <Link to="/The-Billionaire-Flower-Shirt/60b0eb4fdd76f11604f444bb/p">
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </Link>
            <Link className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img src={T1}></img>
                <h3></h3>
                <h3>Scott T-Shirt</h3>
                <h4>Rs. 950</h4>
                <ul className="pricing__container-features"></ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Buy Now
                </Button>
              </div>
            </Link>
            <Link className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img src={S2}></img>
                <h3>TB Urban Shirt</h3>
                <h4>Rs. 2500</h4>
                <p></p>
                <Link to="The-Billionaire-Shirt/60bd9e465f018d09cce77039/p">
                  <Button buttonSize="btn--wide" buttonColor="primary">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
