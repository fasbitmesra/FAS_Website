import React from "react";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Spectra from "./components/Spectra";
import Error from "./components/Error";
import About from "./components/homepage/About";
import Events from "./components/homepage/Events";
import Team from "./components/homepage/Team";
import Contact from "./components/homepage/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="Team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="gallery" element={<Gallery />} />
        <Route path="spectra" element={<Spectra />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
