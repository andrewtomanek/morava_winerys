import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="footer__box">
      <div className="footer__content">
        <NavLink className="footer__link" to="/">
          Moravská vinařství
        </NavLink>
        <a className="footer__link" href="mailto:andrewtomanek@gmail.com">
          Kontakt
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
