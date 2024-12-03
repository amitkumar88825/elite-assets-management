import React, { useState } from 'react';
import './SideBar.css';  // Sidebar styles
import { FaHome, FaInfoCircle, FaPhone, FaListAlt, FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa'; // Icons

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);  // State to toggle sidebar

    const toggleSidebar = () => {
        setIsOpen(!isOpen);  // Toggle the sidebar open/close
    }

    return (
        <>
            {/* Sidebar Toggle Button */}
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}  {/* Toggle between the bars and close icon */}
            </button>

            {/* Sidebar */}
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item">
                        <FaHome className="sidebar-icon" />
                        <a href="#">Home</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <FaInfoCircle className="sidebar-icon" />
                        <a href="#">About</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <FaPhone className="sidebar-icon" />
                        <a href="#">Contact</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <FaListAlt className="sidebar-icon" />
                        <a href="#">Plans</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <FaShieldAlt className="sidebar-icon" />
                        <a href="#">Policy</a>
                    </li>
                </ul>
            </aside>
        </>
    );
}

export default Sidebar;
