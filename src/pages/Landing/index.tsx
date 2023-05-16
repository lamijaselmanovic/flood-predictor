import React from 'react';

import { Container } from 'react-grid-system';
import styled from 'styled-components';

import { ReactComponent as AnalyticsImage } from './assets/analytics-image.svg';

import Header from 'components/Header';

import HeroSection from './HeroSection';
import InfoSection from './InfoSection';

const Cover = styled.div`
  width: 100%;
  min-height: 80vh;
  background: linear-gradient(216.04deg, #27c0ef 13.84%, #00a8db 83.53%);
  position: relative;
`;

const StyledAnalyticsImage = styled(AnalyticsImage)`
  width: 100%;
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
  bottom: -5rem;
  right: 0;
  width: 50%;
`;

const Landing = () => {
  return (
    <>
      <Cover>
        <Header />
        <AbsoluteWrapper>
          <StyledAnalyticsImage />
        </AbsoluteWrapper>
        <HeroSection />
      </Cover>

      <Container>
        <InfoSection />
      </Container>
    </>
  );
};

export default Landing;
