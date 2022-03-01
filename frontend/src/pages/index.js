import React, { Component } from 'react';
import "./index.css";
import Slider from '../components/Slider/Slider.js'
import Services from './services.js';
import { Link } from 'react-router-dom';
import nails1 from '../images/nails2.jpg';
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init();


export const Home = () => {
  return (
    <div className='big'>
      <Slider />
      <div className="afterslider">
        <h1 className="titleafter">Acceseaza lista de servicii ! </h1>
        <Link to="/services" className="link">
          Servicii
        </Link>
      </div>
      <div className="about">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img src={nails1} className="img" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p className="about-text">
            <h1 className="text-animation">
              Servicii full de manichiura <br /> si pedichiura profesionale
            </h1>
            Semipermanenta cu apex, întreținere gel, schimbari de arhitecutura,
            <br />
            constructii gel cu sablon sau tipsuri reutilizabile, pedichiura
            semi,
            <br /> manichiura clasica, pedichiura clasica.
          </p>
        </div>
      </div>
      <div className="call">
        <h1 className="titleafter">Contacteaza-ma ! </h1>
        <a href="tel:+40787400999" className="call-link">
          Suna!
        </a>
      </div>
    </div>
  );
};


export default Home;