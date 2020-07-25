/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';

import Header from './header';
import Footer from './footer';
import ImagesProvider from './images-provider';

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ImagesProvider>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <main>{children}</main>
        <Footer />
      </ImagesProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
