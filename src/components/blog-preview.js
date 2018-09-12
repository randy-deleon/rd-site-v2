import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

const BlogPreviewContainer = styled.div`
    background-color:#fff;
    border-top: 5px solid #e54b4b;
`;
const BlogPreview = styled.div`
    padding:15px;
`;
const PreviewSubContainer = styled.div`
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin-top:5px;
`;
const PulishedDate = styled.small`
    color: #e54b4b;
    font-weight: bolder;
    letter-spacing: 1px;
    text-transform: uppercase;
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: 20px 1fr;
    align-items: center;
    & svg {
      margin-right:5px;
    }
`;
const TimeToRead = styled.small`
    color: #555;
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: 20px 1fr;
    align-items:center;
    & svg {
      margin-right:5px;
    }
`;
const PreviewDescription = styled.p`
    margin-top:15px;
`;

const PreviewLink = styled(Link)`
    color: #555;
    text-decoration:none;
    & svg{
      max-height: 13px;
      max-width: 13px;
      margin-right: 10px;
    }
    &:hover {
      fill: #e54b4b;
      color:#e54b4b;
    }
    & li {
      margin:10px 0;
    }
`;

export default ({ article }) => (
  <BlogPreviewContainer>
    <BlogPreview>
    <h3>
      <PreviewLink to={`/blog/${article.slug}`}>
        <svg aria-labelledby="bloglink" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <title id="bloglink"></title>
          <path d="M13.757 19.868a1.62 1.62 0 0 1-1.149-.476c-2.973-2.973-2.973-7.81 0-10.783l6-6C20.048 1.169 21.963.376 24 .376s3.951.793 5.392 2.233c2.973 2.973 2.973 7.81 0 10.783l-2.743 2.743a1.624 1.624 0 1 1-2.298-2.298l2.743-2.743a4.38 4.38 0 0 0 0-6.187c-.826-.826-1.925-1.281-3.094-1.281s-2.267.455-3.094 1.281l-6 6a4.38 4.38 0 0 0 0 6.187 1.624 1.624 0 0 1-1.149 2.774z"/>
          <path d="M8 31.625a7.575 7.575 0 0 1-5.392-2.233c-2.973-2.973-2.973-7.81 0-10.783l2.743-2.743a1.624 1.624 0 1 1 2.298 2.298l-2.743 2.743a4.38 4.38 0 0 0 0 6.187c.826.826 1.925 1.281 3.094 1.281s2.267-.455 3.094-1.281l6-6a4.38 4.38 0 0 0 0-6.187 1.624 1.624 0 1 1 2.298-2.298c2.973 2.973 2.973 7.81 0 10.783l-6 6A7.575 7.575 0 0 1 8 31.625z"/>
        </svg>
        {article.title}
      </PreviewLink>
    </h3>
    <PreviewSubContainer>
      <PulishedDate>
        <svg aria-labelledby="calendaricon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><title id="calendaricon"></title><path fill="#555" d="M5 6h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zm-9 6h2v2H2zm3 0h2v2H5zm3 0h2v2H8zM5 9h2v2H5zm3 0h2v2H8zm3 0h2v2h-2zM2 9h2v2H2zm11-9v1h-2V0H4v1H2V0H0v16h15V0h-2zm1 15H1V4h13v11z"/></svg>
        <span>{article.publishDate}</span>
      </PulishedDate>
      <TimeToRead>
        <svg aria-labelledby="bookicon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><title id="bookicon"></title><path fill="#555" d="M14 2v13H3.5a1.5 1.5 0 1 1 0-3H13V0H3C1.9 0 1 .9 1 2v12c0 1.1.9 2 2 2h12V2h-1z"/><path fill="#555" d="M3.501 13H3.5a.5.5 0 0 0 0 1H12.999v-1H3.501z"/></svg>
        <span>{article.description.childMarkdownRemark.timeToRead} min read</span>
      </TimeToRead>
    </PreviewSubContainer>
    <PreviewDescription
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    </BlogPreview>
  </BlogPreviewContainer>
)
