import React from "react";
import Header from "../Navbar/Navbar";
import { Col, Row, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Layout/Layout.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { VscMultipleWindows } from "react-icons/vsc";
import { GoListOrdered } from "react-icons/go";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <div>
          <Row>
            <Col md={2} className="sidebar ">
              <ul>
                <li>
                  <NavLink exact to={`/`}>
                    <AiIcons.AiFillHome />
                    <span> Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/category`}>
                    <VscMultipleWindows />
                    <span> Categories</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/products`}>
                    <div className="line">
                      <FaIcons.FaCartPlus /> <span> Products</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/orders`}>
                    <GoListOrdered />
                    <span> Orders</span>
                  </NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto", paddingTop: "75px" }}>
              {props.children}
            </Col>
          </Row>
        </div>
      ) : (
        props.children
      )}
    </>
  );
};

export default Layout;
