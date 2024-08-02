import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3_footer section_padding">
    <div className="gpt3_footer-heading">
      <h1 className="gradient_text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3_footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3_footer-links">
      <div className="gpt3_footer-links-logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>05 Cradock Ave, Rosebank, Johannesburg, 2196 <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3_footer-links-div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3_footer-links-div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3_footer-links-div">
        <h4>Get in touch with</h4>
        <p>Mr T.S Mncwabe</p>
        <p>072-5236-968</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt3_footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;