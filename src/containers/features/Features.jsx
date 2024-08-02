import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';

const featuresData = [
  {
    title: 'Machine learning',
    text: 'Enables systems to learn from data and improve over time without explicit programming.',
  },
  {
    title: 'Natural Language Processing',
    text: 'Allows machines to understand and respond to human language.',
  },
  {
    title: 'Computer Vision',
    text: 'Enables machines to interpret and make decisions based on visiual input.',
  },
  {
    title: 'Robotics',
    text: 'Integrates AI with physical machines to perform tasks autonomosly',
  },
];

const Features = () => (
  <div className="gpt3_features section_padding" id="features">
    <div className="gpt3_features-heading">
      <h1 className="gradient_text">The Future is Now and You Just Need to Realize It. Step into the Future Today, and Make it Happen.</h1>
      <p>Request Early Access to Get Started With:</p>
    </div>
    <div className="gpt3_features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;