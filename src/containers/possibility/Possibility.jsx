import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3_possibility section_padding" id="possibility">
    <div className="gpt3_possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3_possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient_text">The possibilities are <br /> beyond your imagination</h1>
      <p>Empowering intelligence, Enhancing Humanity. Unlocking the potential of Artificial Intelligence to revolutionize industries, transform lives and create a brighter future for all. With AI the possibilities are endless and the future is now.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;