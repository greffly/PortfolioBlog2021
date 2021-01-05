import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';

const Blog = ({ data }) => (
  <Layout>
    <section className='allBlogPosts'>
      {data.allMarkdownRemark.edges.map((post) => {
        const {
          title,
          author,
          date,
          printdate,
          description,
          path,
        } = post.node.frontmatter;
        return (
          <Post
            title={title}
            author={author}
            date={date}
            printdate={printdate}
            description={description}
            key={`${date}__${title}`}
            path={path}
          />
        );
      })}
    </section>
  </Layout>
);

export default Blog;

export const AllBlogQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            date
            printdate
            title
            author
            description
            path
          }
        }
      }
    }
  }
`;
