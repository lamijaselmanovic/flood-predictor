import React from 'react';
import styled from 'styled-components';

import { BorderRadius, Color, Spacing } from 'styles/constants';

const StyledInput = styled.input`
  background: ${Color.backgroundSecondary};
  border: 1px solid rgba(209, 209, 209, 0.5);
  border-radius: ${BorderRadius.md};
  padding: ${Spacing.content.sm} ${Spacing.content.md};
`;

const Input = () => {
  return <StyledInput />;
};

export default Input;
