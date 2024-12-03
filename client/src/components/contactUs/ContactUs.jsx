import React from "react";
import "./ContactUs.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We're here to help you with any questions or inquiries.</p>
            </div>
            <div className="contact-content">
                {/* Contact Information Section */}
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Feel free to reach out to us for assistance.</p>
                    <div className="contact-info-item">
                        <FaPhoneAlt className="contact-icon" />
                        <span>+123 456 7890</span>
                    </div>
                    <div className="contact-info-item">
                        <FaEnvelope className="contact-icon" />
                        <span>support@eliteassets.com</span>
                    </div>
                    <div className="contact-info-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <span>123 Finance St, Noida, India</span>
                    </div>
                    <div className="contact-social">
                        <h3>Follow Us</h3>
                        <a href="#" className="social-icon"><FaFacebook /></a>
                        <a href="#" className="social-icon"><FaTwitter /></a>
                        <a href="#" className="social-icon"><FaLinkedin /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" required />
                        
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" required />
                        
                        <label>Message</label>
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
