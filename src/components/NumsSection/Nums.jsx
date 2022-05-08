import React from "react";
import "./Nums.css";
import {Fade} from 'react-reveal'

const Nums = () => {
  return (
    <div>
      <Fade bottom>
        <div className="nums">
          <div className="num">
            <button class="border-gradient border-gradient-purple">9+</button>
            <h2 className="achievements">
              Years <br /> <span>Experience</span>
            </h2>
          </div>
          <div className="num">
            <button class="border-gradient border-gradient-purple">21+</button>
            <h2 className="achievements">
              Completed <br /> <span>Projects</span>
            </h2>
          </div>
          <div className="num">
            <button class="border-gradient border-gradient-purple">3+</button>
            <h2 className="achievements">
              Campanies <br /> <span>Work</span>
            </h2>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Nums;
