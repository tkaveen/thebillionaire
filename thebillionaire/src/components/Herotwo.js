import React from "react";
import { Button } from "./Button";
import "./Herotwo.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import Animation from "./Layout/Animation";

function Herotwo() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__sechero">
        <div className="pricing__wrapper">
          <div className="banner">
            <div className="heading">
              <Animation text="Check Out All New" /> 
              <Animation text="Mens Collection" />
            </div>
            <div className="subtitle">
              CNew Arrivals<br></br> New Mens Collection
            </div>
            <Link to="/Mens">
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
export default Herotwo;
