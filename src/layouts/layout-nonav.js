import React from 'react';
import styled from 'styled-components';
import Index from './index';

const Main = styled.main`
  grid-area: main;
  margin: auto 15px;
  min-height:100%;
`;

const LayoutNoNav = ({children }) => (
  <Index>
    <Main>
      {children}
    </Main>
  </Index>
)

export default LayoutNoNav
