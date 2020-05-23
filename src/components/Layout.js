import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import '../assets/sass/resume.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
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
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Resume' },
                { name: 'keywords', content: 'site, web' },
              ]}
            >
              <html lang="en" />
            </Helmet>

            <ThemeProvider>
              <div className={'main-body'}>{children}</div>
            </ThemeProvider>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
