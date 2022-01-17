import React from "react";
import Navbar from "./Navbar";
import About from "./homepage/About";
import Events from "./homepage/Events";
import Team from "./homepage/Team";
import Contact from "./homepage/Contact";
import Footer from "./Footer";
import "./Home.scss";
import HomeBG from "../assets/backgrounds/Home-bg.png";

function Home() {
  return (
    <>
      <Navbar />

      <div className="Hero">
        <img src={HomeBG} alt="..." />
      </div>

      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
