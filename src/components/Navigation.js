import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/">Domu</NavLink>
        </li>
        <li>
          <NavLink to="/mapa">Mapa </NavLink>
        </li>
        <li>
          <NavLink to="/prodejny">Prodejny </NavLink>
        </li>
        <li>
          <NavLink to="/vyhledat">Vyhledat </NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
