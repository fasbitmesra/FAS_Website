import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./gallerypage/Carousel";
import { Categories } from "../assets/gallery page";

function Gallery() {
  return (
    <>
      <Navbar />
      <h1>Gallery</h1>

      {Categories.map((category, index) => (
        <Carousel title={category.title} images={category.images} />
      ))}

      <Footer />
    </>
  );
}

export default Gallery;
