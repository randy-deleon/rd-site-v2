import React from 'react';
import styled from 'styled-components';
import Nav from '../components/nav';
import Index from './index';

const Header = styled.header`
    grid-area: header;
`;

const Main = styled.main`
  grid-area: main;
  margin: auto 15px;
  min-height:100%;
`;

const Layout = ({children }) => (
    <Index>
        <Header>
            <Nav />
        </Header>
        <Main>
            {children}
        </Main>
     </Index>
)

export default Layout
