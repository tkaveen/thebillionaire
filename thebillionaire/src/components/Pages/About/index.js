import React, { useEffect } from "react";
import "./styles.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import logo from "../../images/TB3.png";

const About = (props) => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section_profile">
        <div className="pricing__wrapper_profile">
          <div className="pricing__container_profile">
            <Link className="pricing__container-card_cart"></Link>
            <Link className="pricing__container-cardprofile">
              <br />
              <img
                src={logo}
                style={{
                  marginTop: "60px",
                }}
              ></img>
              <div
                style={{
                  width: "700px",
                  textAlign: "center",
                  marginTop: "0px",
                }}
              >
                <p>
                  There is no business like fashion business. The starting point
                  of our journey revolves around the definition of fashion.
                  Despite being a concept we refer to daily, defining fashion
                  can be challenging. In the words of Christopher Breward, when
                  we speak about fashion we refer to at least three different
                  concepts: Fashion intended as a form of art and communication
                  Fashion as an ‘adornment’ of the body Fashion as an industry
                  producing clothing and accessories Any way we look at it from
                  a business perspective, fashion is a direct result of both a
                  creative and industrial process. In this post we are going to
                  focus on the concept of “fashion as an industry” and in
                  particular, we are going to analyse what makes the fashion
                  industry unique.The cycle of obsolescence is something that
                  firms need to plan for and manage effectively by planning the
                  four stages of the Product Life Cycle.
                  <br />
                  The first element we are going to discuss relates to the
                  fashion industry’s planned obsolescence. The fashion industry
                  relies on production cycles which, over time have become
                  increasingly short. At the beginning of the 20th century,
                  French couturiers created two product collections a year: one
                  for the Fall and Winter season, the other for Summer and
                  Spring season. The pace of collection production, in time, has
                  been continuously increasing and one century later,
                  fast-fashion companies are able to work through production
                  cycles that put new items in the store every six weeks.
                </p>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-cardpo"></Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default About;
