import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from "../firebase/firebase";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/upload");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
<div className="login__page">
<form className="login__form" onSubmit={handleSignUp}>
  <h1 className="login__title">Registrace</h1>
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
    placeholder="Password"
  />
  <button className="login__button" type="submit">
  Registrovat
  </button>
  <h1 className="login__title">nebo</h1>
  <button
    className="login__switch"
    onClick={() => history.push("/login")}>Přihlásit
  </button>
</form>
</div>
  );
};

export default withRouter(SignUp);
