import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'react-grid-system';

import { Color } from 'styles/constants';

const Wrapper = styled.div`
  background: ${Color.backgroundPrimary};
`;

const StyledHeader = styled.header`
  height: 4rem;
  background: ${Color.blue};
`;

const Layout = () => {
  return (
    <Wrapper>
      <StyledHeader />
      <Container fluid>
        <Outlet />
      </Container>
    </Wrapper>
  );
};

export default Layout;
