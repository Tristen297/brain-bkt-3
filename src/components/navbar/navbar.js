import "../../styles/navbar/navbar.css";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="Navbar">
            <div className="Navbar-content">
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className="menu-icon-bar"></div>
                    <div className="menu-icon-bar"></div>
                    <div className="menu-icon-bar"></div>
                </div>
                <ul className={`Navbar-links ${isMenuOpen ? "open" : ""}`}>
                    {isMenuOpen && (
                        <div className="close-icon" onClick={toggleMenu}>
                            &times;
                        </div>
                    )}
                    <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                    <li><a href="#ourwork" onClick={toggleMenu}>Our Work</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
