import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navigation = props => (
  <header>
    <nav className="main__navigation">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            Domů
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/mapa">
            Mapa{" "}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/prodejny">
            Prodejny{" "}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/vyhledat">
            Vyhledat{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
