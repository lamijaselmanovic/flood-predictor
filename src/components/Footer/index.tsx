import React from 'react';
import styled from 'styled-components';

import { Color } from 'styles/constants';

const StyledFooter = styled.footer`
  height: 2rem;
  background: ${Color.blue};
`;

const Footer = () => {
  return <StyledFooter />;
};

export default Footer;
