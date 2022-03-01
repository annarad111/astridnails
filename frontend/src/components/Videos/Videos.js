import React from "react";
import video1 from '../../videos/video1.mp4'
import video2 from '../../videos/video2.mp4'
import video3 from '../../videos/video3.mp4'
import video4 from '../../videos/video4.mp4'
import video5 from '../../videos/video5.mp4'
import video6 from '../../videos/video6.mp4'
import video7 from '../../videos/video7.mp4'
import video8 from '../../videos/video8.mp4'
import '../Videos/videos.css'
// import './about.css'

export const Videos = () => {
  return (
    <div>
      <h1 className="text">Videos</h1>
      <div className="videos">
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          className="video"
          width="300"
          height="300"
        >
          <source src={video1} type="video/mp4" />
        </video>
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          className="video"
          width="300"
          height="300"
        >
          <source src={video2} type="video/mp4" />
        </video>
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          className="video"
          width="300"
          height="300"
        >
          <source src={video3} type="video/mp4" />
        </video>
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          className="video"
          width="300"
          height="300"
        >
          <source src={video4} type="video/mp4" />
        </video>
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          className="video"
          width="300"
          height="300"
        >
          <source src={video5} type="video/mp4" />
        </video>
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          className="video"
          width="300"
          height="300"
        >
          <source src={video6} type="video/mp4" />
        </video>
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          className="video"
          width="300"
          height="300"
        >
          <source src={video7} type="video/mp4" />
        </video>
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          className="video"
          width="300"
          height="300"
        >
          <source src={video8} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Videos;