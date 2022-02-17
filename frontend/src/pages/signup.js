import React from "react";
import "./signup.css";
import Images from "../components/SliderGallery/SliderGallery";
import video1 from '../videos/video1.mp4'

export const Gallery = () => {
  return (
    <div>
      <h1 className="text">Gallery</h1>
      <Images />
      <video autoPlay
      width="300"
      height="300">
      <source src={video1} type="video/mp4"/>
      </video>
    </div>
  );
};

export default Gallery;
