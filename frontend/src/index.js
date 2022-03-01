import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

