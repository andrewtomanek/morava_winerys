import React from "react";
import Navigation from "../components/Navigation";
import GridContainer from "../components/GridContainer";
import Footer from "../components/Footer";
import "../App.css";

const Home = () => {
  return (
    <div className="main__container">
      <Navigation />
      <GridContainer />
      <Footer />
    </div>
  );
};

export default Home;
