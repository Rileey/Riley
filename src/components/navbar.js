import React from 'react';
import "./navbar.css"
import { animateScroll as scroll, Link } from 'react-scroll';

const Navbar = () => {
  return (<div className="navbar-container">
      <nav className="navbar">
        <div className="logo-container">
            <h1 className="logo" onClick={() => scroll.scrollToTop()}>Riley</h1>
        </div>
        <div className="menu">
            
            {/* <span className="menu-link">About</span> */}
            <Link to="my-services" style={{display: "contents"}} smooth={true} duration={1000}>
                <span className="empty"></span>
                <span className="menu-link">Services</span>
            </Link>
            <Link to="my-portfolio" style={{display: "contents"}} smooth={true} duration={1000}>
                <span className="empty"></span>
                <span className="menu-link">Portfolio</span>
            </Link>
        </div>
      </nav>
    </div>);
};

export default Navbar;
