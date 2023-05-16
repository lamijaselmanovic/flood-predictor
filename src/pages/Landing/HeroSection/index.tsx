import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';

import { Color, FontSize, LineHeight, Spacing } from 'styles/constants';

import { ReactComponent as DecoratorImage } from '../assets/decorator-image.svg';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';

const Wrapper = styled.div`
  margin: ${Spacing.content.xl} 0;
`;

const Heading = styled.h1`
  color: ${Color.light};
  font-size: ${FontSize.xxl};
  margin-bottom: 0;
`;

const StyledParagraph = styled.p`
  color: ${Color.light};
  font-size: ${FontSize.md};
  line-height: ${LineHeight.md};
  margin: ${Spacing.content.xl} 0;
`;

const Button = styled.button`
  color: ${Color.azureBlue};
  background-color: ${Color.light};
  padding: ${Spacing.button.md} ${Spacing.button.lg};
  font-size: ${FontSize.md};
  font-weight: 500;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: ${FontSize.md};
  color: ${Color.light};
`;

const HeroSection = () => {
  return (
    <Container>
      <Row nogutter>
        <Col xs={12} md={6}>
          <Heading>We help you predict floods and react on time.</Heading>
          <div>
            <DecoratorImage />
          </div>
          <StyledParagraph>
            To enhance the ability to prepare for and respond to floods, it is critical to
            accurately predict their occurrence and take timely action.
          </StyledParagraph>

          <Wrapper>
            <Row align="center">
              <Col xs="content">
                <Button>See how it works</Button>
              </Col>
              <Col>
                <Text>Get free demo</Text>
                <ArrowRight />
              </Col>
            </Row>
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
