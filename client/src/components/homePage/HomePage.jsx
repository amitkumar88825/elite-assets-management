import React from "react";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Welcome to Elite Assets Management</h1>
                        <p>Your trusted partner in financial growth and asset management.</p>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about">
                <h2>About Us</h2>
                <p>
                    At Elite Assets Management, we provide world-class asset management services 
                    tailored to help you achieve your financial goals. With over a decade of 
                    experience in the finance industry, our team of experts is dedicated to 
                    offering personalized investment strategies that maximize your returns.
                </p>
            </section>

            {/* Plans Section */}
            <section className="plans">
                <h2>Our Plans</h2>
                <div className="plan-list">
                    <div className="plan-item">
                        <h3>Starter Plan</h3>
                        <p>Perfect for new investors. Get access to basic investment opportunities and financial advice.</p>
                        <p><strong>Minimum Investment:</strong> $1,000</p>
                    </div>
                    <div className="plan-item">
                        <h3>Growth Plan</h3>
                        <p>Designed for growing portfolios. Includes advanced asset management and growth strategies.</p>
                        <p><strong>Minimum Investment:</strong> $10,000</p>
                    </div>
                    <div className="plan-item">
                        <h3>Growth Plan</h3>
                        <p>Designed for growing portfolios. Includes advanced asset management and growth strategies.</p>
                        <p><strong>Minimum Investment:</strong> $10,000</p>
                    </div>
                    <div className="plan-item">
                        <h3>Growth Plan</h3>
                        <p>Designed for growing portfolios. Includes advanced asset management and growth strategies.</p>
                        <p><strong>Minimum Investment:</strong> $10,000</p>
                    </div>
                    <div className="plan-item">
                        <h3>Growth Plan</h3>
                        <p>Designed for growing portfolios. Includes advanced asset management and growth strategies.</p>
                        <p><strong>Minimum Investment:</strong> $10,000</p>
                    </div>
                    <div className="plan-item">
                        <h3>Growth Plan</h3>
                        <p>Designed for growing portfolios. Includes advanced asset management and growth strategies.</p>
                        <p><strong>Minimum Investment:</strong> $10,000</p>
                    </div>
                    <div className="plan-item">
                        <h3>Growth Plan</h3>
                        <p>Designed for growing portfolios. Includes advanced asset management and growth strategies.</p>
                        <p><strong>Minimum Investment:</strong> $10,000</p>
                    </div>
                    <div className="plan-item">
                        <h3>Elite Plan</h3>
                        <p>Exclusive access to top-tier investment opportunities and personalized consulting services.</p>
                        <p><strong>Minimum Investment:</strong> $100,000</p>
                    </div>
                </div>
            </section>

            {/* Company Policy Section */}
            <section className="policy">
                <h2>Company Policy</h2>
                <p>
                    At Elite Assets Management, we prioritize transparency and customer satisfaction. Our policies 
                    ensure that all client data is securely handled, and our investment strategies are aligned with 
                    ethical financial practices. We believe in long-term partnerships built on trust, integrity, and 
                    mutual success.
                </p>
            </section>

            {/* Contact Us Section */}
            <section className="contact">
                <h2>Contact Us</h2>
                <p>
                    Have questions about our services or plans? Reach out to us and we'll be happy to assist you!
                </p>
                <p><strong>Email:</strong> support@eliteassets.com</p>
                <p><strong>Phone:</strong> +123 456 7890</p>
                <p><strong>Address:</strong> 123 Finance St, New York, NY</p>
            </section>
        </div>
    );
}

export default HomePage;
