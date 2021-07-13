import React from "react";
import "./Thankyou.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import logo from "../../images/bag.png";

export default function Thankyou() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section_profile">
        <div className="pricing__wrapper_profile">
          <div>
            <Link className="pricing__container-card_cart"></Link>
            <Link className="pricing__container-thankyou">
              <br />
              <br />
              <br />
              <br />
              <div>
                <h2>Thank you for being a part of The Billionaire Family </h2>
              </div>
              <img src={logo} style={{ width: "400px", height: "400px" }}></img>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
