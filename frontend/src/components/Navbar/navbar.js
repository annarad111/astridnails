
import React from 'react';
import '../Navbar/navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements.js';
// import Hamburger from './Hamburger';



const Navbar = () => {

  // state= { clicked: false }
  // handleClick = () => {
  //     this.setState({ clicked: !this.state.clicked })
  // }
//   const [hamburgerOpen, setHamburgerOpen] = useState(false);
  

//   const toggleHamburger = () =>{
//   setHamburgerOpen(!hamburgerOpen)
// }
    return (
      <>
        <nav className="nav">
          <Link className="nav-link" to="/">
            <h1 className='logo'>Nails by Astrid</h1>
          </Link>
          {/* <Bars className="bars" /> */}
          <div className="nav-menu">
            <Link className="nav-link" to="/about" activeStyle>
              About
            </Link>
            <Link className="nav-link" to="/services" activeStyle>
              Servicii
            </Link>
            <Link className="nav-link" to="/contact" activeStyle>
              Contact
            </Link>
            <Link className="nav-link" to="/sign-up" activeStyle>
              Gallery
            </Link>
            <a href="tel:+040787400999" className='call-btn'>Suna acum!</a>
          </div>
          {/* <div className='hamburger' onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen}/>
          </div> */}
        </nav>
      </>
    );
}

export default Navbar;