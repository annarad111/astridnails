
import React from 'react';
import '../Navbar/navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {
    return (
      <>
        <nav className="nav">
          <Link className="nav-link" to="/">
            <h1 className='logo'>Nails by Astrid</h1>
          </Link>
          <div className="nav-menu">
            <Link className="nav-link" to="/about" activeStyle>
              Despre
            </Link>
            <Link className="nav-link" to="/services" activeStyle>
              Servicii
            </Link>
            <Link className="nav-link" to="/contact" activeStyle>
              Contact
            </Link>
            <Link className="nav-link" to="/gallery" activeStyle>
              Galerie
            </Link>
            <a href="tel:+040787400999" className='call-btn'>Sună acum!</a>
          </div>
        </nav>
      </>
    );
}

export default Navbar;