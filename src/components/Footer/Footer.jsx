import React from 'react';
import './Footer.css';
import footer_logo from "../assets/logo.png";
import instagram_icon from "../assets/instagram_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import linkedin_icon from "../assets/linkedin_icon.png"; // Import LinkedIn icon

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-top">
                <div className="footer-logo">
                  
                </div>
                <div className="footer-social-icons">
                    <a href="https://www.instagram.com/.sk.?igsh=MmFrNmFjeGMxM2dj" className="footer-icon" target="_blank" rel="noopener noreferrer">
                        <img src={instagram_icon} alt="Instagram" />
                    </a>
                    <a href="https://wa.me/9080562233" className="footer-icon" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp_icon} alt="WhatsApp" />
                    </a>
                    <a href="https://www.linkedin.com/in/saravanan-k-4676832a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-icon" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin_icon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <ul className='footer-links'>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
            </ul>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
