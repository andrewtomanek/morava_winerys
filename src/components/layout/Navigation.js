import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import firebase from "../../firebase/firebase";
import { AuthContext } from "../../auth/Auth";
import "../../App.css";

const Navigation = props => {
  const { currentUser } = useContext(AuthContext);

  return (
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

        <ul className="nav__list">
          <li className="nav__item">
            <NavLink className="nav__link" to="/vlozit">
              Vložit{" "}
            </NavLink>
          </li>{" "}
          {currentUser && (
            <>
              <li className="nav__item">
                <span>{currentUser.email}</span>
              </li>
              <li className="nav__item">
                <button
                  className="login__button"
                  onClick={() => firebase.auth().signOut()}
                >
                  Odhlásit
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
