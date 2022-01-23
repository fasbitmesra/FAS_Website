import React from "react";
import Navbar from "./Navbar";
import About from "./homepage/About";
import Slider from "./homepage/Slider";
import Events from "./homepage/Events";
import Team from "./homepage/Team";
import Contact from "./homepage/Contact";
import Footer from "./Footer";
import "./Home.scss";
import HomeBG from "../assets/backgrounds/Home-bg.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div className="Hero-container" id="home">
        <img src={HomeBG} alt="..." />

        <div className="Hero">
          <h1>Fine Arts Society, BIT Mesra</h1>
          <h2>Where Creativity Thrives.</h2>
          <div className="Hero-btn">
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
      </div>

      <About />
      <Slider />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
