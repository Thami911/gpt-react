import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => (
  <div className="gpt3_header section_padding" id="home">
    <div className="gpt3_header-content">
      <h1 className="gradient_text">Let's Build Something Amazing With GPT-3 OpenAI</h1>
      <p>Where data meets insight. Intelligent systems for a better life, the future of intelligence is transforming data into decisions. The art of intelligence perfected, making the impossible possible.</p>

      <div className="gpt3_header-content-input">
        <input type="email" placeholder="Enter Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3_header-content-people">
        <img src={people} alt="people-icons" />
        <p>1,2000 people requested access to visit in the last 24 hours</p>
      </div>
    </div>

    <div className="gpt3_header-image">
      <img src={ai} alt="ai-head" />
    </div>
  </div>
);

export default Header;