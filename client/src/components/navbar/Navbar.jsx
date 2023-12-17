import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleOpen = () => {
    setToggle(true);
  };

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__container1">
        <div className="navbar__section_bg">
          <div className="navbar__section_bg_logo">
            <img src={logo} alt="" />
            <h3>THILAK</h3>
          </div>
          <div className="navbar__section_bg_pages">
            <ul>
              <li>
                <Link
                  to={"home"}
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={700}
                >
                  HOME
                </Link>
                <Link
                  to={"about"}
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={700}
                >
                  ABOUT
                </Link>
                <Link
                  to={"services"}
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={700}
                >
                  SERVICES
                </Link>

                <Link
                  to={"portfolio"}
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={700}
                >
                  PORTFOLIO
                </Link>
                <Link
                  to={"contact"}
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={700}
                >
                  CONTACT
                </Link>
                {/* <AnchorLink href="#home">HOME</AnchorLink>
                <AnchorLink href="#about">ABOUT</AnchorLink>
                <AnchorLink href="#services">SERVICES</AnchorLink>
                <AnchorLink href="#portfolio">PORTFOLIO</AnchorLink>
                <AnchorLink href={"#contact"}>CONTACT</AnchorLink> */}
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar__section_sm">
          <div className="navbar__section_sm__logo">
            <img src={logo} alt="logo" width={"45px"} />
            <h4>THILAK</h4>
          </div>
          <div className="navbar__section_sm_icon">
            {toggle ? (
              <IoMdClose fontSize={"27px"} onClick={handleClose} />
            ) : (
              <IoIosMenu fontSize={"27px"} onClick={handleOpen} />
            )}
          </div>
        </div>

        <div className="navbar__section_sm__pages">
          {toggle && (
            <div className="navbar__section_sm__pages_list">
              <ul>
                <div className="navbar__border_bottom">
                  <li>
                    <Link
                      to={"home"}
                      spy={true}
                      offset={-50}
                      smooth={true}
                      duration={900}
                    >
                      Home
                    </Link>
                    {/* <AnchorLink href="#home">Home</AnchorLink> */}
                  </li>
                </div>
                <div className="navbar__border_bottom">
                  <li>
                    <Link
                      to={"about"}
                      spy={true}
                      offset={-50}
                      smooth={true}
                      duration={900}
                    >
                      About
                    </Link>
                    {/* <AnchorLink href="#about">About</AnchorLink> */}
                  </li>
                </div>
                <div className="navbar__border_bottom">
                  <li>
                    <Link
                      to={"services"}
                      spy={true}
                      offset={-50}
                      smooth={true}
                      duration={900}
                    >
                      Services
                    </Link>
                    {/* <AnchorLink href="#services">Services</AnchorLink> */}
                  </li>
                </div>

                <div className="navbar__border_bottom">
                  <li>
                    <Link
                      to={"portfolio"}
                      spy={true}
                      offset={-50}
                      smooth={true}
                      duration={900}
                    >
                      Portfolio
                    </Link>
                    {/* <AnchorLink href="#portfolio">Portfolio</AnchorLink> */}
                  </li>
                </div>
                <div className="navbar__border_bottom">
                  <li>
                    <Link
                      to={"contact"}
                      spy={true}
                      offset={-50}
                      smooth={true}
                      duration={900}
                    >
                      Contact
                    </Link>
                    {/* <AnchorLink href="#contact">Contact</AnchorLink> */}
                  </li>
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
