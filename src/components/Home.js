import React from "react";
import Navbar from "./Navbar";
import About from "./homepage/About";
import Events from "./homepage/Events";
import Team from "./homepage/Team";
import Contact from "./homepage/Contact";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
