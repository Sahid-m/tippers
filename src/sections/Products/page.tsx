import { ChevronRight, Droplets, Sparkles, Zap } from "lucide-react";
import React from "react";
import "./style.css";

export default function MonsterEnergyLanding() {
    return (
        <div className="monster-landing">
            {/* Header */}
            <header className="header">
                <div className="logo-container">
                    <div className="logo">
                        <img
                            src="/icon-512.png"
                            alt="Monster Energy Logo"
                            width={40}
                            height={40}
                            className="logo-image"
                        />
                    </div>
                    <span className="brand-name">MONSTER ENERGY</span>
                </div>
                <nav className="main-nav">
                    <a href="#" className="nav-link">
                        Home
                    </a>
                    <a href="#" className="nav-link">
                        Products
                    </a>
                    <a href="#" className="nav-link">
                        About
                    </a>
                    <a href="#" className="nav-link">
                        Contact
                    </a>
                </nav>
                <a href="#" className="buy-button">
                    Buy Now
                </a>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="title-white">WHITE</span>
                        <span className="title-green"> MONSTER</span>
                    </h1>
                    <p className="hero-subtitle">Unleash the Ultra. Zero Sugar. Full Monster Flavor.</p>
                    <div className="hero-buttons">
                        <a href="#" className="shop-button">
                            Shop Now <ChevronRight size={18} />
                        </a>
                        <a href="#" className="learn-button">
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="product-image">
                        <img
                            src="/product/image.png"
                            alt="White Monster Energy Drink"

                            className="product-image-content"
                        />
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="description-section">
                <div className="description-container">
                    <h2 className="section-title">ULTRA REFRESHMENT</h2>
                    <p className="description-text">
                        White Monster Ultra is a refreshing zero sugar, zero calorie energy drink with a crisp, clean taste. Perfect
                        for those who want the energy boost of Monster without the sugar. With our signature Monster Energy blend,
                        Ultra delivers the energy you need with a lighter, refreshing flavor profile.
                    </p>
                    <div className="tagline">
                        ZERO SUGAR. FULL MONSTER FLAVOR.
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="section-title">WHY CHOOSE WHITE MONSTER?</h2>
                <div className="features-grid">
                    {/* Feature 1 */}
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Zap size={32} className="icon" />
                        </div>
                        <h3 className="feature-title">ENERGY BOOST</h3>
                        <p className="feature-text">
                            Our signature energy blend with caffeine, taurine, and B-vitamins gives you the energy you need to power
                            through your day.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Droplets size={32} className="icon" />
                        </div>
                        <h3 className="feature-title">ZERO SUGAR</h3>
                        <p className="feature-text">
                            All the energy without the sugar. White Monster Ultra has zero sugar and zero calories while maintaining
                            the full Monster flavor.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card">
                        <div className="feature-icon">
                            <Sparkles size={32} className="icon" />
                        </div>
                        <h3 className="feature-title">REFRESHING TASTE</h3>
                        <p className="feature-text">
                            A crisp, clean, and refreshing citrus flavor that's light on the palate but heavy on taste. Perfect for
                            any occasion.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-container">
                    <h2 className="cta-title">READY TO UNLEASH THE ULTRA?</h2>
                    <p className="cta-text">
                        Join the millions who have discovered the refreshing taste of White Monster Ultra.
                    </p>
                    <a href="#" className="cta-button">
                        Find a Store Near You
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-grid">
                        <div className="footer-column">
                            <div className="footer-logo">
                                <div className="footer-logo-image">
                                    <img
                                        src="icon-512.png"
                                        alt="Monster Energy Logo"
                                        width={32}
                                        height={32}
                                        className="logo-small"
                                    />
                                </div>
                                <span className="footer-brand">MONSTER ENERGY</span>
                            </div>
                            <p className="footer-address">
                                Monster Energy Company
                                <br />1 Monster Way
                                <br />
                                Corona, CA 92879
                            </p>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-heading">Products</h3>
                            <ul className="footer-links">
                                <li>
                                    <a href="#" className="footer-link">
                                        Original
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Ultra Series
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Juice Series
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Java Series
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-heading">Company</h3>
                            <ul className="footer-links">
                                <li>
                                    <a href="#" className="footer-link">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Press
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="footer-link">
                                        Sponsorships
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-heading">Contact Us</h3>
                            <ul className="footer-contact">
                                <li>Email: info@monsterenergy.com</li>
                                <li>Phone: 1-800-MONSTER</li>
                                <li className="social-links">
                                    <div className="social-container">
                                        <a href="#" className="social-link">
                                            Facebook
                                        </a>
                                        <a href="#" className="social-link">
                                            Twitter
                                        </a>
                                        <a href="#" className="social-link">
                                            Instagram
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="copyright">© {new Date().getFullYear()} Monster Energy Company. All rights reserved.</p>
                        <p className="legal-links">
                            <a href="#" className="legal-link">
                                Privacy Policy
                            </a>{" "}
                            |
                            <a href="#" className="legal-link">
                                Terms of Service
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}