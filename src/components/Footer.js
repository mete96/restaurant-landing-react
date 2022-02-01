import React from "react";
import "./Footer.css";
import logom from "../images/logom.svg";
import { BsInstagram } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-side">
        <h2>Contact Us</h2>
        <h3>+917 56 834 2349</h3>
        <h4>business@email.com</h4>
      </div>
      <div className="right-side">
        <h2>Follow Us</h2>
      </div>
      <div className="ikon">
        <BsInstagram className="instagram" />
        <SiTwitter className="twitter" />
      </div>
      <div className="middle">
        <img src={logom} />
      </div>
      <p className="copyright">© John Daniel's Dubai, All rights reserved</p>
    </div>
  );
};

export default Footer;
