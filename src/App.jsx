import "./App.css";
import Hero from "./components/HeroSection/Hero.jsx";
import Navbar from "./components/Nav/Navbar.jsx";
import Nums from "./components/NumsSection/Nums.jsx";
import Services from "./components/Services/Services.jsx";
import Swipers from "./components/Swiper/Swipers.jsx";
import StarRating from "./components/Testemonials/StarRating.jsx";
import Testemonial from "./components/Testemonials/Testemonial.jsx";
import Work from "./components/WorkSection/Work.jsx";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useState } from "react";
import "./components/MediaQueries.css";
import { ThemeContext, themes } from "./components/Context/ThemeContext";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const BUTTON_WRAPPER_STYLES = {
  //   position: "relative",
  //   zIndex: 1,
  // };

  const [darkMode, setDarkMode] = useState(true);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };
  return (
    <div
      className="App"

      // style={{
      //   background: darkMode ? "black" : "",
      //   color: darkMode ? "white" : "",
      // }}
    >
      {/* this makes the hole design crashes */}
      {/* <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <button
            color="green"
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          >
            <span className="d-lg-none d-md-block">Switch mode</span>
          </button>
        )}
      </ThemeContext.Consumer> */}
      {/* <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log("clicked")}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div> */}

      {/* <button onClick={toggleDarkMode}>
        {darkMode ? <div>Dark</div> : <div>Light</div>}
      </button> */}

      <Navbar />
      <Hero />
      <Services />
      <Nums />
      <Work />
      <Swipers />
      <Testemonial />
      <Footer />
    </div>
  );
}

export default App;
