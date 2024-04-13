import React from 'react';
import { Helmet } from 'react-helmet'; // For setting the page title
import Layout from '../components/Layout'; // Assuming Layout is adapted for non-Gatsby React

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404: Not Found</title>
    </Helmet>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
