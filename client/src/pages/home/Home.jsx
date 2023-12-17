import React from "react";
import "./home.css";
import { Header, HomeContent, Navbar } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="home__decoration"></div>
      <HomeContent />
    </div>
  );
};

export default Home;
