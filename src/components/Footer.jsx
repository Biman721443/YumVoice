import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>YumVoice 🍽</h2>
          <p>Discover your favorite food with your voice. Your taste, your choice!</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-search">
          <h3>Search Your Favorite Food</h3>
          <div className="search-box">
            <input type="text" placeholder="Search dishes..." />
            <button>🔍</button>
          </div>
          <h3>Subscribe for Updates</h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <h3>Contact Us</h3>
          <p>📍 Kolkata, Newtown City</p>
          <p>📞 +91 7365818084</p>
          <p>✉ support@yumvoice.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© 2025 YumVoice. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;