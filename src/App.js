import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Home from "./pages/Home";
import Mapa from "./pages/Mapa";
import Prodejny from "./pages/Prodejny";
import Vyhledat from "./pages/Vyhledat";
import Footer from "./components/layout/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="main__container">
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/mapa" component={Mapa} exact />
          <Route path="/prodejny" component={Prodejny} exact />
          <Route path="/vyhledat" component={Vyhledat} exact />
        </Switch>
        <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
