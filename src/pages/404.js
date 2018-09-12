import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/layout';

const NotFound = styled.h3`
    text-align:center;
    font-size: 24px;
    font-weight:normal;
`;

const NotFoundPage = () => (
  <Layout>
   <NotFound>404 | nothing here...</NotFound>
  </Layout>
)

export default NotFoundPage
