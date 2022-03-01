import React from "react";
import "./App.css";
import Navbar from "../src/components/Navbar/navbar.js";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Services from "./pages/services";
import Footer from "./components/Footer/Footer.js";
import history from "./history.js";
import {
  HashRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import Videos from "./components/Videos/Videos.js";
import Photos from "./components/Photos/Photos.js";


console.log(React.version)

function App()  {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
      <a
        href="https://wa.me/+40787400999"
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
