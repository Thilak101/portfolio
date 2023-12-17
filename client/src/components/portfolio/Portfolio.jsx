import React from "react";
import "./portfolio.css";
import amazon from "../../assets/amazonClone.png";
import youtube from "../../assets/youtubeClone.png";
import photoshop from "../../assets/photoshopClone.png";
import staticSite from "../../assets/staticSite.png";
import foodRecipe from "../../assets/foodRecipe.png";
import newsApp from "../../assets/newsApp.png";
import verficationForm from "../../assets/verificationform.png";
import webseriesList from "../../assets/webseriesList.png";
import ai from "../../assets/ai.png";
import food from "../../assets/food.png";
import weatherappEJS from "../../assets/weatherAppEjs.png";
import hospitalManagement from "../../assets/hospitalManagement.png";

import { Link, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="portfolio" id="portfolio">
      <h1>PORTFOLIO</h1>
      <div className="portfolio__container">
        <div className="portfolio__grid">
          <div>
            <Link to={"https://stunning-mermaid-2218dd.netlify.app"}>
              <img src={amazon} alt="amazon" width={"400px"} />
            </Link>
          </div>
          <div>
            <Link to={"https://timely-sorbet-c13a92.netlify.app"}>
              <img src={youtube} alt="youtube" width={"400px"} />
            </Link>
          </div>
          <div>
            <Link to={"https://zesty-raindrop-7fa0fe.netlify.app"}>
              <img src={photoshop} alt="photoshop" width={"400px"} />
            </Link>
          </div>
          <div>
            <Link to={"https://jolly-choux-ad0517.netlify.app"}>
              <img src={staticSite} alt="staticSite" width={"400px"} />
            </Link>
          </div>
          <div>
            <Link to={"https://chimerical-frangipane-ff058c.netlify.app"}>
              <img src={foodRecipe} alt="foodRecipe" width={"400px"} />
            </Link>
          </div>
          <div>
            <Link to={"https://jovial-melomakarona-2c735d.netlify.app"}>
              <img src={newsApp} alt="newsApp" width={"400px"} />
            </Link>
          </div>
          <div>
            <Link to={"https://sage-brigadeiros-9e82ca.netlify.app"}>
              <img
                src={verficationForm}
                alt="verificationForm"
                width={"400px"}
              />
            </Link>
          </div>
          <div>
            <Link to={"https://effortless-starburst-6add0c.netlify.app"}>
              <img src={webseriesList} alt="webseriesList" width={"400px"} />
            </Link>
          </div>
          <div>
            <Link to={"https://amazing-syrniki-b538fc.netlify.app"}>
              <img src={ai} alt="ai" width={"400px"} />
            </Link>
          </div>
          <div>
            <Link to={"https://fanciful-crisp-8ba494.netlify.app"}>
              <img src={food} alt="food" width={"400px"} />
            </Link>
          </div>
          <div>
            <Link to={"https://weather-with-backend.onrender.com"}>
              <img src={weatherappEJS} alt="weather_app" width={"400px"} />
            </Link>
          </div>
          <div>
            <Link to={"https://hospital-management-app-jp16.onrender.com"}>
              <img
                src={hospitalManagement}
                alt="hospital management"
                width={"400px"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
