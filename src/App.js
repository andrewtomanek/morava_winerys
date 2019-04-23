import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Domu from "./pages/Domu";
import Mapa from "./pages/Mapa";
import Prodejny from "./pages/Prodejny";
import Vyhledat from "./pages/Vyhledat";
import Kontakt from "./pages/Kontakt";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Domu} exact />
          <Route path="/mapa" component={Mapa} exact />
          <Route path="/prodejny" component={Prodejny} exact />
          <Route path="/vyhledat" component={Vyhledat} exact />
          <Route path="/kontakt" component={Kontakt} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
