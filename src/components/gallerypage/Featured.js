import React from "react";
import FeaturedArtworks from "../../api/FeaturedArtworks";

function Featured() {
  return (
    <>
      <div className="Featured-container">
        <h2>Featured Artworks</h2>
        <div className="Featured-grid">
          {FeaturedArtworks.map((artwork, index) => (
            <div class="Featured-card">
              <img src={artwork.image} alt={artwork.title} />
              <div class="container">
                <h4>{artwork.title}</h4>
                <p>By {artwork.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Featured;
