import React from "react";
import "./AboutUs.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Elite Assets Management</h1>
                <p className="about-subtitle">
                    Trusted Investment Solutions with a Legacy of Excellence
                </p>
            </div>
            <div className="about-content">
                <section className="about-section">
                    <h2>Who We Are</h2>
                    <p>
                        Located in the financial hub of Noida, India, Elite Assets Management is a
                        government-registered, ISO-certified asset management company. With a steadfast commitment
                        to integrity, innovation, and client satisfaction, we’ve built a solid reputation in the 
                        industry over many years.
                    </p>
                </section>
                <section className="about-section">
                    <h2>Our Experience</h2>
                    <p>
                        With years of expertise in managing diverse investment portfolios, we cater to individuals, 
                        institutions, and corporate clients. Our team of seasoned professionals designs personalized 
                        strategies that align with each client’s financial goals and risk tolerance. Our services 
                        are backed by thorough research, meticulous analysis, and industry insight.
                    </p>
                </section>
                <section className="about-section">
                    <h2>Why Choose Us</h2>
                    <p>
                        Elite Assets Management stands as a beacon of reliability and precision in asset management. 
                        Our ISO certification ensures we uphold rigorous standards in quality and transparency. We are 
                        dedicated to providing exceptional service, maintaining your trust, and securing your financial 
                        future.
                    </p>
                </section>
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to empower clients with sound financial guidance, offer robust investment 
                        solutions, and foster long-term wealth creation. We work diligently to exceed client 
                        expectations and support them on every step of their financial journey.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default About;
