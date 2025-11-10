import React from 'react'
import { FaInstagram, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-left">
            <h2>AZAZ KHAN</h2>
            <p className="footer-tagline">Fullstack Developer</p>
            <p className="footer-description">
              Building digital experiences that matter. Specialized in creating
              modern, scalable web applications with clean code and exceptional user experience.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/azaz__wri8s?igsh=eXJ6N200dWVpb3ll" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='footer-social-icon' />
              </a>
              <a href="https://www.linkedin.com/in/ijaj-gori-36298338a" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='footer-social-icon' />
              </a>
              <a href="https://github.com/Azaz-Gori07" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare className='footer-social-icon' />
              </a>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#skills-wrapper">Skills</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Backend Development</a></li>
                <li><a href="#services">Full Stack Solutions</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Get in Touch</h4>
              <ul className="footer-contact">
                <li>
                  <span className="contact-label">Email:</span>
                  <a href="mailto:azazkhan007007@gmail.com">azazkhan007007@gmail.com</a>
                </li>
                <li>
                  <span className="contact-label">Phone:</span>
                  <a href="tel:+916378192135">+91 6378192135</a>
                </li>
                <li>
                  <span className="contact-label">Location:</span>
                  <span>Sikar, Rajasthan, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Azaz Khan. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer