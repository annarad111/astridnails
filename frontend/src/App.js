import React from "react";
import "./App.css";
import Navbar from "../src/components/Navbar/navbar.js";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/signup";
import Services from "./pages/services";
import Footer from "./components/Footer/Footer.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Videos from "./components/Videos/Videos.js";
import Photos from "./components/Photos/Photos.js";

function App()  {
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
          <Route path="/videos" element={<Videos />} />
          <Route path="/photos" element={<Photos />} />
        </Routes>
      </Router>
      <a
        href="https://wa.me/+40735131140"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Footer />
    </>
  );
}

export default App;
