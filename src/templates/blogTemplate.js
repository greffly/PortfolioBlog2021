import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';

import './blogTemplate.css';

export default function Template({ data }) {
  const post = data.markdownRemark;
  const { title, printdate, path } = post.frontmatter;

  const decodedTitle = encodeURI(title);
  const siteURL = 'www.caitlyngreffly.com/' + path;
  const twitterShareBlurb = decodedTitle + ' by @thecaitcode ' + siteURL;
  const twitterLink =
    'https://twitter.com/intent/tweet?text=' + twitterShareBlurb;

  return (
    <Layout>
      <Link to='/blog' className='backToBlogs'>
        Back to all blogs
      </Link>
      <div className='blogTemplate'>
        <h1 className='blogTemplateTitle'>{title}</h1>
        <p className='blogTemplateDate'>{printdate}</p>
        <div
          className='blogBody'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <div className='share'>
        <a href={twitterLink} target='_blank' rel='noreferrer'>
          Share this post on Twitter{' '}
        </a>
        if you thought it was pretty cool.
      </div>
    </Layout>
  );
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date
        printdate
        title
        path
      }
      html
    }
  }
`;
