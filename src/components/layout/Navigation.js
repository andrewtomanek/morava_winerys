import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import firebase from "../../firebase/firebase";
import { AuthContext } from "../../auth/Auth";

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <header>
      <nav className="main__navigation">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              className="nav__link"
              to="/"
              exact={true}
              activeClassName="is-active"
            >
              Domů
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              to="/mapa"
              activeClassName="is-active"
            >
              Mapa
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              to="/prodejny"
              activeClassName="is-active"
            >
              Prodejny
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className="nav__link"
              to="/vyhledat"
              activeClassName="is-active"
            >
              Vyhledat
            </NavLink>
          </li>
        </ul>

        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              className="nav__link"
              to="/vlozit"
              activeClassName="is-active"
            >
              Vložit
            </NavLink>
          </li>
          {currentUser && (
            <>
              <li className="nav__item">
                <span className="nav__text">{currentUser.email}</span>
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
