import React from "react";
import "./Hero.css";
import Boy from "../../images/boy.png";
import Crown from "../../images/crown.png";
import Glassimojie from "../../images/glassesimoji.png";
import Vector1 from "../../images/Vector1.png";
import Vector2 from "../../images/Vector2.png";
import Thumbsup from "../../images/thumbup.png";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import Instagram from "../../images/instagram.png";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div>
      <div className="all">
        <Fade left>
          <div className="left">
            <h1>
              Hey! I am <br /> <span>Mohamed Khalifa</span>
            </h1>
            <p className="par">
              Front-end developer with high level of experience <br /> in web
              designing and using react js
            </p>
            {/* this button is copied from code pen, I just made some changes on it */}
            <div class="container">
              <div class="center">
                <button class="btn">
                  <svg
                    width="180px"
                    height="60px"
                    viewBox="0 0 180 60"
                    class="border"
                  >
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      class="bg-line"
                    />
                    <polyline
                      points="179,1 179,59 1,59 1,1 179,1"
                      class="hl-line"
                    />
                  </svg>
                  <span>Hire</span>
                </button>
              </div>
            </div>
            {/* the icons */}
            <div className="icons">
              <img src={Linkedin} alt="" />
              <img src={Instagram} alt="" />
              <img src={Github} alt="" />
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="right">
            <img className="boy" src={Boy} alt="boy" />
            <img className="glassimojie" src={Glassimojie} alt="glassimojie" />
            <img className="vector1" src={Vector1} alt="vector1" />
            <img className="vector2" src={Vector2} alt="vector2" />
            {/* <Fade left> */}
            <div className="thumsup">
              <img src={Thumbsup} alt="thumbsup" />
              <p className="thumsPar">Best Design Award</p>
            </div>
            {/* </Fade> */}
            <div className="crown">
              <img src={Crown} alt="Crown" />
              <p className="crownPar">Web Developer</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
