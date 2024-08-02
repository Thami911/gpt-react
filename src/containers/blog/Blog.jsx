import React from 'react';
import './blog.css';
import Article from '../../components/article/Article';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';


const Blog = () => (
  <div className="gpt3_blog section_padding" id="blog">
    <div className="gpt3_blog-heading">
      <h1 className="gradient_text">A lot is happening, <br /> We also blogging about it.</h1>
    </div>
    <div className="gpt3_blog-container">
      <div className="gpt3_blog-container-groupA">
        <Article imgUrl={blog1} date="Jun 26, 2023" text="GPT-3 and Open  AI is the future. Let us help you understand code." />
      </div>
      <div className="gpt3_blog-container-groupB">
        <Article imgUrl={blog2} date="Jun 26, 2023" text="GPT-3 and Open  AI is the future. Help us learn and understand more data." />
        <Article imgUrl={blog3} date="Jun 26, 2023" text="GPT-3 and Open  AI is the future. Sharing your data with us is it safe?" />
        <Article imgUrl={blog4} date="Jun 26, 2023" text="GPT-3 and Open  AI is the next big thing in the corporate industry?" />
        <Article imgUrl={blog5} date="Jun 26, 2023" text="GPT-3 and Open  AI are they really a threat for easily automated jobs?" />
      </div>
    </div>
  </div>
);

export default Blog;