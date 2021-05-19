import React from "react";
// import './Pricing.css';
import "./ProductOverview.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
// import logo from "../components/images/TB3.png";
// import S1 from "../components/images/S1.png";
// import S2 from "../components/images/S2.png";
import S1 from "../images/S1.png";

function ProductOverview() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__sectionPO">
        <div className="pricing__wrapper">
          {/* <h1 className='pricing__heading'>BEST SELLING</h1> */}
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-cardpo"></Link>
            <Link to="/sign-up" className="pricing__container-cardProdOver">
              <div className="pricing__container-cardInfo">
                <h1>Flower Shirt</h1>
                <div>
                  <div className="row">
                    <div className="column">
                      {/* <div className='left'>fgdfgzfdg</div> */}
                      <div className="imageholder">
                        <img src={S1}></img>
                      </div>
                    </div>
                    <div className="column">
                      
                      <div className="overview">
                      
                        <p>
                          New Flower Shirt with cotton material New Flower Shirt
                          with cotton material New Flower Shirt with cotton
                          material New Flower Shirt with cotton material New
                          Flower Shirt with cotton material New Flower Shirt
                          with cotton material
                        </p>
                        <br></br>
                        <h3>SIZE :</h3>
                        <br></br>
                        
                      </div>
                    </div>
                  </div>
                </div>

                {/* <h3>Scott T-Shirt</h3>
                <h4>$29.99</h4> */}
                {/* <p>per month</p> */}
                <ul className="pricing__container-features">
                  {/* <li>1000 Transactions</li> */}
                  {/* <li>3.5% Cash Back</li> */}
                  {/* <li>$100,000 Limit</li> */}
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='blue'>
                Buy Now
                </Button> */}
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-cardpo"></Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default ProductOverview;
