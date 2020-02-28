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
      <h1 className="login__title">Log in</h1>
      <form className="login__form" onSubmit={handleLogin}>
        <label className="login__label">
          Email
        </label>
          <input className="login__input" name="email" type="email" placeholder="Email" />
        <label className="login__label">
          Password
        </label>
          <input className="login__input" name="password" type="password" placeholder="Password" />
        <button className="login__button" type="submit">Log in</button>
        <button className="login__switch" onClick={() => history.push("/signup")}>Registrovat</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
