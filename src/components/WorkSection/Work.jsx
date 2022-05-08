import React from "react";
import "./Work.css";
import Upwork from "../../images/Upwork.png";
import Fiver from "../../images/fiverr.png";
import Facebook from "../../images/Facebook.png";
import Amazon from "../../images/amazon.png";
import Shopify from "../../images/Shopify.png";
import {Fade} from 'react-reveal'
import {Rotate} from 'react-reveal'

const Work = () => {
  return (
    <Fade bottom>
      <div className="work">
        <Fade left>
          <div className="leftSerr">
            <h1>
              works for All thes <br />{" "}
              <span className="spann">Brands & Clients</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minus{" "}
              <br />
              Lorem ipsum dolor sit amet consectetu quam sed natus fugit officia
              ut quisquam accusamus
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              inventore.
            </p>
            {/* button from google.com */}
            <div class="container">
              <a href="#" className="button">
                Hire
              </a>
            </div>
          </div>
        </Fade>
        {/* the right section */}
        <Fade right>
          <div className="rightWork">
            <div className="orange"></div>
            <div className="blue"></div>
            <Rotate>
              <div className="white">
                <img src={Amazon} alt="" className="amazon" />
                <img src={Fiver} alt="" className="fiver" />
                <img src={Upwork} alt="" className="upwork" />
                <img src={Facebook} alt="" className="facebook" />
                <img src={Shopify} alt="" className="shopify" />
              </div>
            </Rotate>
          </div>
        </Fade>
      </div>
    </Fade>
  );
};

export default Work;
