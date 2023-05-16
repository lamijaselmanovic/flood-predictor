import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { FontSize, LineHeight, Spacing } from 'styles/constants';

import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';
import MobileIllustration from '../assets/mobile-illustration.png';

const Wrapper = styled.div`
  margin: 10rem 0;
`;

const Heading = styled.h3`
  color: #034d82;
  font-size: ${FontSize.lg};
  font-weight: 700;
  letter-spacing: 0.3px;
`;

const StyledParagraph = styled.p`
  color: #90a3b4;
  font-weight: 400;
  font-size: ${FontSize.md};
  line-height: ${LineHeight.md};
  letter-spacing: 0.3px;
  margin: ${Spacing.content.xl} 0;
`;

const Text = styled.span`
  color: #04aadd;
  font-weight: 400;
  font-size: ${FontSize.md};
  letter-spacing: 0.3px;
`;

const InfoSection = () => {
  return (
    <Wrapper>
      <Row>
        <Col xs={12} md={6}>
          <img src={MobileIllustration} alt="Mobile illustration" />
        </Col>
        <Col xs={12} md={6}>
          <Heading>Monitor Flood Prediction</Heading>
          <StyledParagraph>
            Visualize key metrics such as prediction accuracy, flood occurrence trends, and model
            performance to gain valuable insights into flood prediction.
          </StyledParagraph>
          <Text>
            Explore performance metrics <ArrowRight />
          </Text>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default InfoSection;
