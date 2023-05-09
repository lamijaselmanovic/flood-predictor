import React from 'react';
import styled from 'styled-components';
import { BorderRadius, Color, FontSize, Spacing } from 'styles/constants';

const StyledWrapper = styled.div`
  position: relative;
  border: 2px solid ${Color.primaryBorder};
  margin: ${Spacing.content.xxl} 0;
  border-radius: ${BorderRadius.md};
  padding: ${Spacing.content.lg};
  background: ${Color.light};
`;

const SectionLabel = styled.span`
  position: absolute;
  top: -0.7rem;
  left: ${Spacing.content.xl};
  padding: 0 ${Spacing.content.md};
  background: ${Color.light};
  color: ${Color.primaryText};
  font-weight: 600;
  font-size: ${FontSize.md};
`;

type SectionWrapperProps = {
  children: React.ReactNode;
  title?: string;
};

const SectionWrapper = ({ children, title }: SectionWrapperProps) => {
  return (
    <StyledWrapper>
      <SectionLabel>{title}</SectionLabel>
      <div>{children}</div>
    </StyledWrapper>
  );
};

export default SectionWrapper;
