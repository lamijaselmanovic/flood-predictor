import React, { useCallback } from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';

import { BorderRadius, Color, Spacing } from 'styles/constants';

import SectionWrapper from 'components/SectionWrapper';
import Text from 'components/Text';
import Button, { ButtonVariant } from 'components/Button';
import Heading from 'components/Heading';
import Badge from 'components/Badge';

import { fileReport1, fileReport2 } from './mockedData';

const StyledResultWrapper = styled.div`
  background: ${Color.backgroundSecondary};
  border-radius: ${BorderRadius.md};
  padding: ${Spacing.content.sm} ${Spacing.content.lg};
  margin: ${Spacing.content.md} 0;
`;

// const StyledReportIcon = styled(ReportIcon)`
//   margin-right: ${Spacing.content.sm};
// `;

const Results = () => {
  const generatePossibleFloods = useCallback(() => {
    console.log('Generate');
  }, []);

  return (
    <SectionWrapper title="Comparison results">
      <Row>
        <Col xs={12} sm={6}>
          <StyledResultWrapper>
            <Heading>report1.csv</Heading>
            {fileReport1.map(data => {
              return (
                <Row justify="between" key={data.value}>
                  <Col>
                    <Text>{data.title}</Text>
                  </Col>
                  <Col xs="content">
                    <Badge variant={data.type}>{data.value}</Badge>
                  </Col>
                </Row>
              );
            })}
          </StyledResultWrapper>
        </Col>
        <Col xs={12} sm={6}>
          <StyledResultWrapper>
            <Heading>report2.csv</Heading>
            {fileReport2.map(data => {
              return (
                <Row justify="between" key={data.value}>
                  <Col>
                    <Text>{data.title}</Text>
                  </Col>
                  <Col xs="content">
                    <Badge variant={data.type}>{data.value}</Badge>
                  </Col>
                </Row>
              );
            })}
          </StyledResultWrapper>
        </Col>
      </Row>
      <Row justify="end">
        <Col xs="content">
          <Button variant={ButtonVariant.Outline} onClick={generatePossibleFloods}>
            Generate
          </Button>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default Results;
