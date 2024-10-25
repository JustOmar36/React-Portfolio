import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS styles

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
            {isOpen && (
                <div className={`dropdown ${isOpen ? 'open' : ''}`}>
                    <button className="close-button" onClick={toggleMenu}>✖</button> {/* Close button */}
                    <Link to="/" onClick={toggleMenu}>About Me</Link>
                    <Link to="/work" onClick={toggleMenu}>Work</Link>
                    <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                </div>
            )}
            <div className="contact-button">
              <Link to="/contact-me" className="contact-btn">Contact Me</Link>
            </div>
        </nav>
    );
};

export default Navbar;
