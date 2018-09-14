import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Favicon from '../../static/favicon.ico';
import AppleIcon from '../../static/icons/apple-touch-icon.png';
import Copyright from '../components/copyright';
import config from '../utils/siteConfig';
import './index.css';

const GridContainer = styled.article`
  height: 100%;
  display: grid;
  grid-template-areas: 'header' 'main' 'footer';
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 1fr;
  grid-gap: 15px;
`;

const Footer = styled.footer`
    grid-area: footer;
`;

const Index = ({children}) => (
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
          <meta name="msapplication-TileColor" content="#e54b4b"></meta>
          <link rel="apple-touch-icon" sizes="180x180" href={AppleIcon} />
          <link rel="icon" href={Favicon} />
        </Helmet>
            {children}
          <Footer>
            <Copyright />
          </Footer>
      </GridContainer>
    )}
  />
)

export default Index
