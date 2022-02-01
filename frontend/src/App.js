import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar/navbar.js';
import Home from './pages'
import About from './pages/about'
import Contact from './pages/contact'
import Gallery from "./pages/signup";
import Services from './pages/services';
import AliceCarousel from "react-alice-carousel";
import nails1 from './images/nails1.jpg';
import nails2 from './images/nails2.jpg';
import nails3 from './images/nails3.jpg';
import "react-alice-carousel/lib/alice-carousel.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
