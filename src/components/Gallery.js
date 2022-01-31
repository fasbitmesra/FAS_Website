import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./gallerypage/Carousel";
import { Categories } from "../assets/gallery page";
import Featured from "./gallerypage/Featured";
import "./Gallery.scss";

function Gallery() {
  return (
    <>
      <Navbar />
      <Featured />

      {Categories.map((category, index) => (
        <Carousel title={category.title} images={category.images} />
      ))}

      <Footer />
    </>
  );
}

export default Gallery;
