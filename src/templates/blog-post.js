import { graphql } from 'gatsby';
import get from 'lodash/get';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import PublishedDate from '../components/published-date';
import TimeToRead from '../components/time-to-read';
import Layout from '../layouts/layout';

const BlogContainer = styled.div`
  background-color:#fff;
  padding:10px;
  border-top: 5px solid #e54b4b;
  box-shadow: 0 2px 4px rgba(0,0,0,0.18);
  border-radius:2px;
`;

 const BlogTitle = styled.h1`
  font-size: 1.45rem;
  line-height: 1;
  margin: 15px 15px 0px 15px;
 `;
 const BlogSubContainer = styled.div`
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin-top:5px;
    margin-left: 15px;
`;
 const BlogContent = styled.div`
  margin: 0px 0px 30px 0;
  padding:15px;
  & ol {
    margin:0px 20px;
    & li {
      margin:10px 0px;
    }
  }
  & a {
    color:#e54b4b;
  }
  & pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow:auto;
    overflow-wrap: break-word;
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    margin:10px 0px;
    padding: 6px 10px;
    border-radius: 3px;
    max-width:100vw;
    & code {
      overflow-x: auto;
    }
  }
  & img {
    margin:10px 0px;
    width:100%;
  }
 `;
class BlogPostTemplate extends Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    return (
      <Layout>
      <BlogContainer>
      <Helmet title={`Blog - ${post.title}`} />
          <BlogTitle>{post.title}</BlogTitle>
          <BlogSubContainer>
          <PublishedDate>{post.publishDate}</PublishedDate>
          <TimeToRead>{post.body.childMarkdownRemark.timeToRead} min read</TimeToRead>
          </BlogSubContainer>
          <BlogContent
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
            />
        </BlogContainer>
       </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
    }
  }
`
