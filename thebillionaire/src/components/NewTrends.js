import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import logo from "../components/images/TB3.png";
import SH1 from "../components/images/SH1.png";
import TR1 from "../components/images/TR1.png";
import T2 from "../components/images/T2.png";

function NewTrends() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>New Trends</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
              <img src={SH1} ></img>
                {/* <div className='icon'>
                  <FaFire />
                </div> */}
                <h3>Orange Short</h3>
                <h4>$8.99</h4>
                {/* <p>per month</p> */}
                <ul className='pricing__container-features'>
                  {/* <li>100 Transactions</li>
                  <li>2% Cash Back</li>
                  <li>$10,000 Limit</li> */}
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Buy Now
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                {/* <div className='icon'>
                  <BsXDiamondFill />
                </div> */}
                <img src={TR1} ></img>
                <h3></h3>
                <h3>Office Wear Trouser</h3>
                <h4>$29.99</h4>
                {/* <p>per month</p> */}
                <ul className='pricing__container-features'>
                  {/* <li>1000 Transactions</li> */}
                  {/* <li>3.5% Cash Back</li> */}
                  {/* <li>$100,000 Limit</li> */}
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                Buy Now
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                {/* <div className='icon'>
                  <GiCrystalize />
                </div> */}
                <img src={T2} ></img>
                <h3>Purple T-Shirt</h3>
                <h4>$99.99</h4>
                <p></p>

                <Button buttonSize='btn--wide' buttonColor='primary'>
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
