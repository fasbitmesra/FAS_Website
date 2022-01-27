import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Spectra.scss";

function Spectra() {
  return (
    <>
      <Navbar />

      <div className="Spectra-container">
        <h1>Spectra</h1>

        <div className="Spectra-Trailer">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/C2L-XIdCrxU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Spectra;
