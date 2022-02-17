import React, { Component } from 'react';
import "./index.css";
import Slider from '../components/Slider/Slider.js'
import Services from './services.js';
import { Link } from 'react-router-dom';
import nails1 from '../images/nails2.jpg'


export const Home = () => {
    return (<div>
      <Slider />
      <div className='afterslider'>
        <h1 className='titleafter'>Acceseaza lista de servicii ! </h1>
        <Link to="/services" className='link'>Servicii</Link>
      </div>
      <div className='about'>
      <img src={nails1} className="img"/>
      <p className='about-text'>
        <h1 className='text-animation'>Servicii full de manichiura <br/> si pedichiura profesionale</h1>
        Semipermanenta cu apex, întreținere gel, schimbari de arhitecutura,<br/>
        constructii gel cu sablon sau tipsuri reutilizabile, pedichiura semi,<br/> manichiura clasica,
        pedichiura clasica.
      </p>
      </div>
  </div>);
};


export default Home;