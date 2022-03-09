import React from "react";
import "./gallery.css";
import Images from "../components/SliderGallery/SliderGallery";
import video1 from '../videos/video1.mp4';
import { Link } from 'react-router-dom';
import nails1 from '../images/nails1.jpg';
import nails2 from '../images/nails2.jpg';

export const Gallery = () => {
  return (
    <div>
        <h1 className="text">Galerie</h1>
      <div className="links-to-gallery">
          <img src={nails1} className="img-for-gallery"></img>
          <img src={nails2} className="img-for-gallery"></img>
          <div className="links-to">
            <Link to="/videos" className="gallery-link">
              Videos
            </Link>
            <Link to="/photos" className="gallery-link">
              Photos
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Gallery;
