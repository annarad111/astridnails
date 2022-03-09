import React, { Component } from 'react';
import "./index.css";
import Slider from '../components/Slider/Slider.js'
import Services from './services.js';
import { Link } from 'react-router-dom';
import nails1 from '../images/pozahomeresized.jpeg';
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init();


export const Home = () => {
  return (
    <div className='big'>
      <Slider />
      <div className="afterslider">
        <h1 className="titleafter">Accesează lista de servicii ! </h1>
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
            Servicii full de manichiură <br /> și pedichiură profesionale
            </h1>
            Semipermanență cu apex, întreținere gel, schimbări de arhitecutură,
            <br />
            construcții gel cu șablon sau tipsuri reutilizabile, pedichiură semi,
            <br /> manichiură clasică, pedichiură clasică.
          </p>
        </div>
      </div>
      <div className="call">
        <h1 className="titleafter">Contacteaza-mă </h1>
        <a href="tel:+40787400999" className="call-link">
          Sună
        </a>
      </div>
    </div>
  );
};


export default Home;