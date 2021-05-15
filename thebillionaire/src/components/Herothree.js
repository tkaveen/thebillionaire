import React from 'react';
import { Button } from './Button';
import './Herothree.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import logo from "../components/images/TB3.png";
import S1 from "../components/images/S1.png";
import S2 from "../components/images/S2.png";
import T1 from "../components/images/T1.png";

function Herothree() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__sec'>
        <div className='pricing__wrapper'>
          {/* <h1 className='pricing__heading'>BEST SELLING</h1> */}
          <div className = "banner">
            <div className='heading'>Check Out the All<br></br> New Womens Collection</div>
            <div className='subtitle'>Check Out the All<br></br> New Womens Collection</div>

                <Button buttonSize='btn--wide' buttonColor='blue'>
                    Check Out
                  </Button>
          </div>

        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Herothree;
