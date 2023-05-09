import React from 'react';
import styled, { css } from 'styled-components';

import { BorderRadius, Color, FontSize, Spacing } from 'styles/constants';

export enum ButtonVariant {
  Solid,
  Outline,
  Default
}

type ButtonProps = {
  children: string | React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  buttonType?: 'button' | 'submit' | 'reset';
};

type StyledButtonProps = {
  variant: ButtonVariant;
};

const generateCustomStyle = (variant: ButtonVariant) => {
  let color;
  let backgroundColor;
  let border;

  switch (variant) {
    case ButtonVariant.Solid:
      color = Color.light;
      backgroundColor = Color.darkBlue;
      break;
    case ButtonVariant.Outline:
      color = Color.darkBlue;
      backgroundColor = Color.light;
      border = `2px solid ${Color.darkBlue}`;
      break;
    case ButtonVariant.Default:
      color = Color.dark;
      backgroundColor = Color.light;
      border = '1px solid rgba(0, 0, 0, 0.2)';
      break;
    default:
      color = Color.dark;
      backgroundColor = Color.light;
  }

  return css`
    color: ${color};
    background-color: ${backgroundColor};
    border: ${border || 'none'};
  `;
};

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  padding: ${Spacing.button.md} ${Spacing.button.xl};
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.09);
  border-radius: ${BorderRadius.md};
  font-weight: 600;
  font-size: ${FontSize.xs};
  cursor: pointer;
  ${props => generateCustomStyle(props?.variant)}
`;

const Button = ({
  children,
  variant = ButtonVariant.Default,
  buttonType = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} type={buttonType} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
