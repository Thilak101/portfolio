import React from "react";
import "./header.css";
import email from "../../assets/email.png";
import mobile from "../../assets/phone-call.png";
import profile from "../../assets/profile1.png"

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__left">
        <div className="header__title">
          <h4><span>HELLO,</span> MY NAME IS</h4>
        </div>
        <div className="header__name">
          <h1>GNANA THILAK</h1>
          <h3>Web Developer</h3>
        </div>
        <div className="header__contact">
          <div className="header__details">
            <img src={email} alt="email" width={"27px"} /> <span>nanuthilak101@gmail.com</span>
          </div>
          <div className="header__details">
            <img src={mobile} alt="call_icon" width={"27px"} /> <span>8668003020</span>
          </div>
        </div>
      </div>
      <div className="header__right">
        <img src={profile} alt="profile_pic" width={"600px"} />
      </div>
    </div>
  );
};

export default Header;
