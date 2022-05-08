import React from "react";
import "./Footer.css";
import Wave from "../../images/wave.png";
// import {AiFillGithub} from 'react-icons/ai'
// import {BsInstagram} from 'react-icons/bs'
// import {FaFacebookSquare} from 'react-icons/fa'
import Github from "../../images/github.png";
import Facebook from "../../images/Facebook.png";
import Instagram from "../../images/instagram.png";

const Footer = () => {
  return (
    <div className="theholeFooter">
      <img src={Wave} alt="" />
      <div className="gmail">Mk@gmail.com</div>
      <div className="iconss">
        <img src={Github} alt="" />
        <img src={Facebook} alt="" />
        <img src={Instagram} alt="" />
        {/* <AiFillGithub />
        <BsInstagram />
        <FaFacebookSquare /> */}
      </div>
    </div>
  );
};

export default Footer;
