import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../firebase/firebase";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/upload");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/upload" />;
  }

  return (
    <div className="login__page">
      <form className="login__form" onSubmit={handleLogin}>
        <h1 className="login__title">Přihlášení</h1>
        <input
          className="login__input"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          className="login__input"
          name="password"
          type="password"
          placeholder="heslo"
        />
        <button className="login__button" type="submit">
        Přihlásit
        </button>
        <h1 className="login__title">nebo</h1>
        <button
          className="login__switch"
          onClick={() => history.push("/signup")}
        >
          Registrovat
        </button>
      </form>
    </div>
  );
};

export default withRouter(Login);
