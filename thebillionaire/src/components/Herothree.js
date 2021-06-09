import React from "react";
import { Button } from "./Button";
import "./Herothree.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import Animation from "./Layout/Animation";

function Herothree() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__sec">
        <div className="pricing__wrapper">
          <div className="banner">
            <div className="heading">
              <Animation text="Check Out the All New" />
              <Animation text="Womens Collection" />
            </div>
            <div className="subtitle">
              New Arrivals<br></br> New Womens Collection
            </div>
            <Link to="/Womens">
              <Button buttonSize="btn--wide" buttonColor="blue" onClick="/">
                Check Out
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Herothree;
