import React from "react";
import About from "./homepage/About";
import Events from "./homepage/Events";
import Team from "./homepage/Team";
import Contact from "./homepage/Contact";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <About />
      <Events />
      <Team />
      <Contact />
    </>
  );
}

export default Home;
