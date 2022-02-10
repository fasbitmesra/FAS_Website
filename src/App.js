import React from "react";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Spectra from "./components/Spectra";
import Error from "./components/Error";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="gallery" element={<Gallery />} />
        <Route path="spectra" element={<Spectra />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
