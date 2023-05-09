import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'react-grid-system';

import { Color } from 'styles/constants';

import Header from 'components/Header';

const Wrapper = styled.div`
  background: ${Color.backgroundPrimary};
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Container fluid>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default Layout;
