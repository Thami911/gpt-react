import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3_whatGPT3 section_margin" id="wgpt3">
    <div className="gpt3_whatGPT3-feature">
      <Feature title="What is GPT-3" text="Generative Pre-trained Transformer 3 is the latest iteration in OpenAI's series of advanced language models. It leverages deep learning techniques to understand and generate human-like text, making it a powerful tool for various applications." />
    </div>
    <div className="gpt3_whatGPT3-heading">
      <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3_whatGPT3-container">
      <Feature title="Chatbots" text="They are poised to revolutionize customer interaction across industries, making communication more efficient and personalized." />
      <Feature title="Knowledgebase" text="It enhances efficiency, improves customer satisfaction, and empowers users to find the information they need quickly and independently." />
      <Feature title="Education" text="AI is revolutionizing education by providing personalized, efficient, and enganging learning experiences. By embracing AI technologies, we can enhance educational outcomes and prepare students for the future." />
    </div>
  </div>
);

export default WhatGPT3;