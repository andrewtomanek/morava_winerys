import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MapApp from "../components/MapContainer";
import database from "../data/db";
import "../App.css";

function Mapa() {
  return (
    <div className="main__container">
      <Navigation />
      <MapApp markers={database} />
      <Footer />
    </div>
  );
}

export default Mapa;
