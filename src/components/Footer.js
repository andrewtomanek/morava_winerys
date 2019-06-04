import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Footer = props => (
  <footer>
    <div className="footer__box">
      <div className="footer__content">
        <p className="footer__text">Moravská vinařství</p>
        <a className="footer__link">andrewtomanek@gmail.com</a>
      </div>
    </div>
  </footer>
);

export default Footer;
