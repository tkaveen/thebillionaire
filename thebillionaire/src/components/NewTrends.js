import React from "react";
import { Button } from "./Button";
import "./Pricing.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import SH1 from "../components/images/SH1.png";
import TR1 from "../components/images/TR1.png";
import T2 from "../components/images/T2.png";

function NewTrends() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">New Trends</h1>
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img src={SH1}></img>
                <h3>Orange Short</h3>
                <h4>Rs. 1200</h4>
                <ul className="pricing__container-features"></ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Buy Now
                </Button>
              </div>
            </Link>
            <Link className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img src={TR1}></img>
                <h3></h3>
                <h3 style={{ textAlign: "center" }}>
                  The Billionaire Office Pant
                </h3>
                <h4>Rs. 1200</h4>
                <ul className="pricing__container-features"></ul>
                <Link to="/The-Billionaire-Office-Pant/60b0eb86dd76f11604f444be/p">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <img src={T2}></img>
                <h3>Purple T-Shirt</h3>
                <h4>Rs. 1000</h4>
                <p></p>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Buy Now
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default NewTrends;
