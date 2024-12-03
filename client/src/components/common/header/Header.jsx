import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <h1 className="header-title">Elite Assets Management</h1>
                </div>
                <nav className="header-nav">
                    <ul className="header-menu">
                        <li className="header-menu-item"><Link to="/">Home</Link></li>
                        <li className="header-menu-item"><Link to="/about">About</Link></li>
                        <li className="header-menu-item"><Link to="/contact">Contact</Link></li>
                        <li className="header-menu-item"><Link to="/plans">Plans</Link></li>
                        <li className="header-menu-item"><Link to="/policy">Policy</Link></li>
                        <li 
                            className="header-menu-item dropdown"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="dropdown-toggle">Login/Signup</span>
                            {showDropdown && (
                                <div className="dropdown-menu">
                                    <Link to="/login" className="dropdown-link">Login</Link>
                                    <Link to="/signup" className="dropdown-link">Signup</Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
