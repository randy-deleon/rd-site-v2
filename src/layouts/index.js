import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import favicon from '../../static/favicon.ico';
import appleIcon from '../../static/icons/apple-touch-icon.png';
import Copyright from '../components/copyright';
import config from '../utils/siteConfig';
import './index.css';

const GridContainer = styled.article`
  height: 100%;
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: 60px 2fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 15px;
`;

const Footer = styled.footer`
    grid-area: footer;
    align-content: end;
    display:grid;
`;

const Index = ({children }) => (
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
      <GridContainer>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
          <meta name="description" content={config.siteDescription} />
          <link rel="apple-touch-icon" sizes="180x180" href={appleIcon}/>
          <link rel="icon" href={favicon} />
          <meta name="msapplication-TileColor" content="#e54b4b"></meta>
        </Helmet>
            {children}
          <Footer>
            <Copyright />
          </Footer>
      </GridContainer>
    )}
  />
)

Index.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Index
