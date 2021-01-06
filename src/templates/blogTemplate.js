import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
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
        Liked this post? Want to shit talk this post?{' '}
        <a href={twitterLink} target='_blank' rel='noreferrer'>
          Share it on Twitter!
        </a>
      </div>
      <div className='backLink'>
        <Link to='/blog' className='backToBlogsBottom'>
          Back to all blogs
        </Link>
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
