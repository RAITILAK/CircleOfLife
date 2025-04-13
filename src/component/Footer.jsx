import React from "react";
import "../styles/Footer.scss";

import logo from "../assets/logo/mainlogo.png"; // Replace with the actual logo path
import visaLogo from "../assets/logo/visa1.png"; // Replace with the actual Visa logo path
import mastercardLogo from "../assets/logo/mastercard.png"; // Replace with the actual MasterCard logo path
import instaLogo from "../assets/logo/insta.png"; // Replace with the actual Instagram logo path
import facebookLogo from "../assets/logo/fb.webp"; // Replace with the actual Facebook logo path
import linkedinLogo from "../assets/logo/ldin.avif"; // Replace with the actual LinkedIn logo path
import tiktokLogo from "../assets/logo/tiktok.webp"; // Replace with the actual TikTok logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Site Logo" className="footer-logo" />
        <div className="footer-info">
          <p>ABN: 95 630 817 284</p>
          <div className="payment-methods">
            <img src={visaLogo} alt="Visa" className="payment-logo" />
            <img
              src={mastercardLogo}
              alt="MasterCard"
              className="payment-logo"
            />
          </div>
          <p>2024 Circle of Hope Disability © 2024 | Website Design by RAI</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <i className="fa-solid fa-phone"></i> Phone: +123 456 7890
          </p>
          <p>
            <i className="fa-solid fa-store"></i> Shop Address: 123 Main St,
            City, Country
          </p>
          <p>
            <i className="fa-solid fa-clock"></i> Time of Contact: Mon-Fri
            9am-5pm
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaLogo} alt="Instagram" className="social-logo" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookLogo} alt="Facebook" className="social-logo" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktokLogo} alt="TikTok" className="social-logo" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <a href="/register" className="footer-button">
            Register Your Interest
          </a>
          <a href="/enquire" className="footer-button">
            Make an Enquiry
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
