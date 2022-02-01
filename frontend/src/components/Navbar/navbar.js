import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements.js'


const Navbar = () => {
    return (
      <>
        <Nav className="nav">
          <NavLink className="nav-link" to="/">
            <h1>Nails by Astrid</h1>
          </NavLink>
          <Bars className="bars" />
          <NavMenu className="nav-menu">
            <NavLink className="nav-link" to="/about" activeStyle>
              About
            </NavLink>
            <NavLink className="nav-link" to="/services" activeStyle>
              Services
            </NavLink>
            <NavLink className="nav-link" to="/contact" activeStyle>
              Contact
            </NavLink>
            <NavLink className="nav-link" to="/sign-up" activeStyle>
              Sign up
            </NavLink>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavMenu>
        </Nav>
      </>
    );
}

export default Navbar;