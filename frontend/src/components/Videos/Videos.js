import React from "react";
import video1 from '../../videos/video1.mp4'
// import './about.css'

export const Videos = () => {
  return (
    <div>
          <h1 className="text">Videos</h1>
          <video autoPlay
            width="300"
            height="300">
            <source src={video1} type="video/mp4"/>
            </video>
          
    </div>
  );
};

export default Videos;