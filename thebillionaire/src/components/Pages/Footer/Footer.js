import React from "react";
import "./Footer.css";
import logo from "../../images/TB3.png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/aboutus">How it works</Link>
            {/* <Link to="/">Testimonials</Link> */}
            {/* <Link to="/">Careers</Link> */}
            {/* <Link to="/">Investors</Link> */}
            <Link to="/aboutus">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/aboutus">Contact</Link>
            <Link to="/aboutus">Support</Link>
            {/* <Link to="/">Destinations</Link> */}
            {/* <Link to="/">Sponsorships</Link> */}
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Categories</h2>
            <Link to="/Mens">Mens</Link>
            <Link to="/Womens">Womens</Link>
            <Link to="/Summer">Summer</Link>
            {/* <Link to="/">Influencer</Link> */}
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link
              target="_blank"
              to={"//www.instagram.com/billionaireceylon/?utm_medium=copy_link"}
            >
              Instagram
            </Link>
            <Link
              target="_blank"
              to={"//www.facebook.com/thebillionaireclothing"}
            >
              Facebook
            </Link>
            {/* <Link to="/">Youtube</Link> */}
            {/* <Link to="/">Twitter</Link> */}
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src={logo}></img>
            </Link>
          </div>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={"//www.facebook.com/thebillionaireclothing"}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.instagram.com/billionaireceylon/?utm_medium=copy_link"}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            {/* <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
