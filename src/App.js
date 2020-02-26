import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./auth/PrivateRoute";
import Navigation from "./components/layout/Navigation";
import Home from "./pages/Home";
import Mapa from "./pages/Mapa";
import Prodejny from "./pages/Prodejny";
import Vyhledat from "./pages/Vyhledat";
import Form from "./pages/Form";
import Upload from "./pages/Upload";
import Footer from "./components/layout/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <div className="main__container">
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route path="/mapa" component={Mapa} exact />
              <Route path="/prodejny" component={Prodejny} exact />
              <Route path="/vyhledat" component={Vyhledat} exact />
              <Route path="/vlozit" component={Form} exact />
              <PrivateRoute exact path="/upload" component={Upload} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
