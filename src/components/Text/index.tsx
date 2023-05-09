import { Color, FontSize } from 'styles/constants';
import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  color: ${Color.primaryText};
  font-weight: 400;
  font-size: ${FontSize.sm};
`;

type TextProps = {
  children: string | React.ReactNode;
};

const Text = ({ children }: TextProps) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
