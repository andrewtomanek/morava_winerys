import React from "react";
import { NavLink } from "react-router-dom";
import firebase from "../../firebase/firebase";
import "../../App.css";

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
        <li className="nav__item">
          <NavLink className="nav__link" to="/vlozit">
            Pridat{" "}
          </NavLink>
        </li>{" "}
        <li className="nav__item">
          <NavLink className="nav__link" to="/upload">
            Upload{" "}
          </NavLink>
        </li>{" "}
        <li className="nav__item">
          <NavLink className="nav__link" to="/login">
            Login{" "}
          </NavLink>
        </li>{" "}
        <li className="nav__item">
          <NavLink className="nav__link" to="/signup">
            SignUp{" "}
          </NavLink>
        </li>        <li className="nav__item">
        <button onClick={() => firebase.auth().signOut()}>Sign out</button>

        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
