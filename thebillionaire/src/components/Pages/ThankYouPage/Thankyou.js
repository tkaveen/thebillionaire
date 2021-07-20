import React from "react";
import "./Thankyou.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import logo from "../../images/bag.png";
import avatar from "../../images/undraw_web_shopping_dd4l.svg";
import avatar2 from "../../images/undraw_deliveries_131a.svg";
import avatar3 from "../../images/undraw_Successful_purchase_re_mpig.svg";
import avatar4 from "../../images/undraw_Order_confirmed_re_g0if.svg";

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
                <h2 style={{ fontSize: "30px" }}>
                  Thank you for being a part of The Billionaire Family{" "}
                </h2>
              </div>
              <br />
              <br />
              <br />
              <img
                src={avatar}
                style={{ width: "400px", height: "400px", marginLeft: "150px" }}
              ></img>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
