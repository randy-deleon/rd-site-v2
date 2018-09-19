import { graphql } from 'gatsby';
import get from 'lodash/get';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import BlogPreview from '../components/blog-preview';
import Layout from '../layouts/layout';

const BlogContainer = styled.div`
  display: grid;
  grid-gap: 15px;
`;

const Title = styled.h2`
  letter-spacing:2px;
  text-transform: uppercase;
  text-align: center;
`;
const BlogList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: minmax(340px, 1fr);
  justify-content: center;
`;

const BlogItem = styled.li`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
  background-color: var(--bg-two-color, #fff);
  box-shadow: 0 2px 4px rgba(0,0,0,0.18);
  border-radius:2px;
`;

class BlogIndex extends Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    return (

      <Layout>
        <Helmet title="Blog"/>
        <BlogContainer>
          <Title className="section-headline">Blog</Title>
          <BlogList>
            {posts.map(({ node }) => {
              return (
                <BlogItem key={node.slug}>
                  <BlogPreview article={node} />
                </BlogItem>
              )
            })}
          </BlogList>
        </BlogContainer>
        </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          description {
            childMarkdownRemark {
              html
              timeToRead
            }
          }
        }
      }
    }
  }
`
