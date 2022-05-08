import React from "react";
import Card from "./Card";
import "./Services.css";
// import { BsCloudDownload } from "react-icons/bs";
import Heart from "../../images/heartemoji.png";
import Glasses from "../../images/glasses.png";
import Humble from "../../images/humble.png";
import {Fade} from 'react-reveal'

const Services = () => {
  return (
    <div>
      <Fade bottom>
        <div className="services">
          <Fade left>
            <div className="leftSer">
              <h1>
                My Awesome <br /> <span className="spann">Services</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                minus <br />
                quam sed natus fugit officia ut quisquam accusamus quas
                deleniti!
              </p>
              {/* button from google.com */}
              <div class="container">
                <a href="#" className="button">
                  Download
                </a>
              </div>
            </div>
          </Fade>
          {/* the right part */}
          <Fade right>
            <div className="rightSer">
              <Card
                className="card1"
                image={Heart}
                header={"Designer"}
                par={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe Xd"}
                btn={"Learn More"}
              />
              <Card
                className="card2"
                image={Glasses}
                header={"Developer"}
                par={"Html, Css, Js, React, MUI, Bootstrap, Sass"}
                btn={"Learn More"}
              />
              <Card
                className="card2"
                image={Humble}
                header={"UI/Ux"}
                par={
                  "Designing web pages and mobile applications, and make them look good"
                }
                btn={"Learn More"}
              />
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

export default Services;
