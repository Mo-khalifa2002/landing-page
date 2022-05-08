import React from "react";
import "./Navbar.css";
import {
  BrowserRouter,
  // Link as LinkRouter,
  Routes,
  Route,
} from "react-router-dom";
import Form from "../Form/Form.jsx";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    // <BrowserRouter>
    <div>
      <div className="nav">
        <div className="navRight">
          <h2 style={{ marginLeft: "5rem" }}>Mohamed</h2>

          {/* the switch */}
        </div>
        <div className="navMiddle">
          <ul className="middle">
            <li>Home</li>
            <Link spy={true} to="services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="nums" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="swipers" smooth={true}>
              <li>Portofolio</li>
            </Link>
            <Link spy={true} to="testemonials" smooth={true}>
              <li>Testemonial</li>
            </Link>
          </ul>
        </div>
        <nav>
          {/* <BrowserRouter>
            <Routes>
              <Route to="form" element={<Form />}> */}
                <ul>
                  <li style={{ cursor: "pointer" }}>
                    Contact
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </li>
                </ul>
              {/* </Route>
            </Routes>
          </BrowserRouter> */}
        </nav>
      </div>
    </div>
    // </BrowserRouter>
  );
};

export default Navbar;
