import React from "react";
import "./Services.css";

const Card = ({ image, header, par, btn }) => {
  return (
    <div>
      <div className="holeCard">
        <img src={image} alt="" />
        <div className="texts">
          <h1>{header}</h1>
          <p>{par}</p>
        </div>
        <button>{btn}</button>
      </div>
    </div>
  );
};

export default Card;
