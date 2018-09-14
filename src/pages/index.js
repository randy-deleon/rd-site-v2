import { graphql } from 'gatsby';
import get from 'lodash/get';
import React, { Component } from 'react';
import Hero from '../components/hero';
import LayoutNoNav from '../layouts/layout-nonav';
class HomeIndex extends Component {
  render() {
    const [author] = get(this, 'props.data.allContentfulPerson.edges');
    return (
      <LayoutNoNav>
         <Hero person={author} />
      </LayoutNoNav>
    )
  }
}
export default HomeIndex
export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPerson{
      edges {
        node {
          name
          shortBio {
            shortBio
          }
        }
      }
    }
  }
`
