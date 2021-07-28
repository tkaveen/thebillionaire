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
          <h1 className="pricing__heading">BEST PRICE</h1>
          <div className="pricing__container">
            <Link className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img src={S1}></img>
                <h3 style={{ textAlign: "center" }}>
                  The Billionaire Flower Shirt
                </h3>
                <h4>Rs. 1300</h4>
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
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
