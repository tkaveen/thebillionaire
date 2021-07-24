import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../actions/category.action";
import { CgProfile } from "react-icons/cg";
import { signout } from "../actions";
import CartNav from "./CartIcon/CartNav";

function Navbar() {
  const auth = useSelector((state) => state.auth);
  const category = useSelector((state) => state.category);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return {
      //   window.removeEventListener('resize', showButton)
    };
  }, []);

  const [navbar, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.parentId ? (
            <span>{category.name}</span>
          ) : (
            <a href={category.slug}>{category.name}</a>
          )}

          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };

  const logout = () => {
    dispatch(signout());
  };

  const renderLoggedInLinks = () => {
    return (
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            The billionaire.
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <ul className="nav-item">
                {category.categories.length > 0
                  ? renderCategories(category.categories)
                  : null}
              </ul>
            </li>
            <li style={{ marginLeft: "12px" }}>
              <Link to="/cart">
                {/* <RiShoppingCartLine className="nav-shopp" /> */}
                <CartNav count={Object.keys(cart.cartItems).length} />
              </Link>
            </li>
            <li className="rightside">
              <Link to="/profile">
                <CgProfile
                  className="nav-shopp"
                  style={{ fontSize: "35px", marginTop: "3px" }}
                />
              </Link>
            </li>

            <li className="nav-btn">
              {button ? (
                <Link className="btn-link">
                  <Button buttonStyle="btn--outline" onClick={logout}>
                    LOG OUT
                  </Button>
                </Link>
              ) : (
                <Link className="btn-link">
                  <Button
                    buttonStyle="btn--outline"
                    buttonSize="btn--mobile"
                    onClick={logout}
                  >
                    LOG OUT
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            The billionaire.
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <ul className="nav-item">
                {category.categories.length > 0
                  ? renderCategories(category.categories)
                  : null}
              </ul>
            </li>
            <li style={{ marginRight: "20px", marginLeft: "8px" }}>
              <Link to="/cart">
                <CartNav count={Object.keys(cart.cartItems).length} />
                {/* <RiShoppingCartLine className="nav-shopp" /> */}
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/signin" className="btn-link">
                  <Button buttonStyle="btn--outline">LOG IN</Button>
                </Link>
              ) : (
                <Link to="/signin" className="btn-link">
                  <Button
                    buttonStyle="btn--outline"
                    buttonSize="btn--mobile"
                    onClick={closeMobileMenu}
                  >
                    LOG IN
                  </Button>
                </Link>
              )}
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/signup" className="btn-link">
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>
              ) : (
                <Link to="/signup" className="btn-link">
                  <Button
                    buttonStyle="btn--outline"
                    buttonSize="btn--mobile"
                    onClick={closeMobileMenu}
                  >
                    SIGN UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
