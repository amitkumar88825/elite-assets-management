import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Company Information Section */}
                <div className="footer-section">
                    <h2 className="footer-title">Elite Assets Management</h2>
                    <p className="footer-description">
                        Providing world-class asset management services tailored to your financial needs.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h3 className="footer-subtitle">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Plans</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Information Section */}
                <div className="footer-section">
                    <h3 className="footer-subtitle">Contact Us</h3>
                    <p><strong>Email:</strong> support@eliteassets.com</p>
                    <p><strong>Phone:</strong> +123 456 7890</p>
                    <p><strong>Address:</strong> 123 Finance St, New York, NY</p>
                </div>

                {/* Social Media Section */}
                <div className="footer-section footer-social">
                    <h3 className="footer-subtitle">Follow Us</h3>
                    <div className="footer-social-icons">
                        <a href="#" className="social-icon"><FaFacebook /></a>
                        <a href="#" className="social-icon"><FaTwitter /></a>
                        <a href="#" className="social-icon"><FaLinkedin /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; 2024 Elite Assets Management. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
