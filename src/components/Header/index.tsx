import React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Color, Spacing } from 'styles/constants';

import { ReactComponent as Logo } from './assets/logo.svg';

const HeaderWrapper = styled.div`
  padding: ${Spacing.content.lg} 0;
`;

const StyledNavLink = styled(NavLink)`
  color: ${Color.light};
  text-decoration: none;
  padding: ${Spacing.content.sm} ${Spacing.content.lg};
`;

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Row justify="between">
          <Col xs="content">
            <Logo />
          </Col>
          <Col xs="content">
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/compare-data">Compare data</StyledNavLink>
            <StyledNavLink to="/flood-prediction">Flood prediction</StyledNavLink>
          </Col>
        </Row>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
