import { Color, FontSize } from 'styles/constants';
import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h3`
  color: ${Color.primaryText};
  font-weight: 600;
  font-size: ${FontSize.md};
`;

type HeadingProps = {
  children: string | React.ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
