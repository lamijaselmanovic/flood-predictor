import React from 'react';
import styled from 'styled-components';

import { Color } from 'styles/constants';

const StyledHeader = styled.header`
  height: 4rem;
  background: ${Color.blue};
`;

const Header = () => {
  return <StyledHeader />;
};

export default Header;
