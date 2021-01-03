import React from 'react';
import { Link } from 'gatsby';
import './post.css';

const Post = ({ title, printdate, description, path }) => (
  <div className='post'>
    <h3 className='postTitle'>{title}</h3>
    <div className='divider'></div>
    <p className='postDescription'>{description}</p>
    <p className='postDate'>{printdate}</p>
    <Link to={path}>Read more</Link>
  </div>
);

export default Post;
