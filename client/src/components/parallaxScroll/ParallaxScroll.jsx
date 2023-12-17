import React from "react";
import "./parallaxScroll.css";
import animatedGif from "../../assets/animated.gif";
import bg from "../../assets/bg.jpg";
import { Skills } from "../index";

const ParallaxScroll = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <img src={bg} alt="" className="background" width={"100%"} style={{filter: "blur(5px)"}} />
          <img src={animatedGif} alt="" className="foreground" />
          <h1 className="title">WELCOME</h1>
        </header>
        <section>
         <div style={{paddingBottom: "500px"}}></div>
        </section>
      </div>
    </>
  );
};

export default ParallaxScroll;
