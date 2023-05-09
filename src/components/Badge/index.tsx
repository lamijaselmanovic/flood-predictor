import React from 'react';
import styled, { css } from 'styled-components';

import { BorderRadius, Color, FontSize, Spacing } from 'styles/constants';
import { generateHexToRgba } from 'common/helpers/generateHexToRgba';

export enum BadgeVariant {
  Info,
  Success,
  Error
}

type BadgeProps = {
  children: string | number;
  variant?: BadgeVariant;
};

type StyledBadgeProps = {
  variant: BadgeVariant;
};

const generateColorStyle = (variant: BadgeVariant) => {
  let color;
  let backgroundColor;

  switch (variant) {
    case BadgeVariant.Info:
      color = Color.gray;
      backgroundColor = generateHexToRgba(Color.lightGray, 0.2);
      break;
    case BadgeVariant.Success:
      color = Color.green;
      backgroundColor = generateHexToRgba(Color.green, 0.2);
      break;
    case BadgeVariant.Error:
      color = Color.red;
      backgroundColor = generateHexToRgba(Color.red, 0.2);
      break;
    default:
      color = Color.gray;
      backgroundColor = generateHexToRgba(Color.lightGray, 0.2);
  }

  return css`
    color: ${color};
    background-color: ${backgroundColor};
  `;
};

const StyledBadge = styled.span<StyledBadgeProps>`
  padding: ${Spacing.content.xs} ${Spacing.content.sm};
  border-radius: ${BorderRadius.lg};
  font-size: ${FontSize.sm};
  font-weight: 500;
  ${props => generateColorStyle(props.variant)}
`;

const Badge = ({ children, variant = BadgeVariant.Info }: BadgeProps) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};

export default Badge;
