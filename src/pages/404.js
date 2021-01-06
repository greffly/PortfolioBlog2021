import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';

const PageNotFound = () => (
  <Layout>
    <section>
      <div>
        <h1>Oof. I'm sorry, this sucks.</h1>
        <h2>
          Your page couldn't be found. Try heading <Link to='/'>Home</Link>
        </h2>
      </div>
    </section>
  </Layout>
);

export default PageNotFound;
