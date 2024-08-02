import React from 'react';
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => (
  <div className="gpt3_brand section_padding">
    <div>
      <img src={google} alt="google-icon" />
    </div>
    <div>
      <img src={slack} alt="slack-icon" />
    </div>
    <div>
      <img src={atlassian} alt="atlassian-icon" />
    </div>
    <div>
      <img src={dropbox} alt="dropbox-icon" />
    </div>
    <div>
      <img src={shopify} alt="shopify-icon" />
    </div>
  </div>
);

export default Brand;