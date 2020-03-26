import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

const textStyles = css`
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.defaultFontSize};

  ${mediaQueryHelper(
    'phone',
    css`
      font-size: ${({ theme }) => theme.smallFontSize};
    `
  )}
`;

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.gradientColorToBot};
  flex-shrink: 0;
  margin-top: auto;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueryHelper(
    'phone-xs',
    css`
      height: 4.5rem;
    `
  )}
`;

export const FooterText = styled.span`
  ${textStyles}
`;

export const FooterLink = styled.a`
  transition: all 0.4s;
  display: inline-block;
  ${textStyles}

  &:hover,
  &:active {
    color: ${({ theme }) => theme.titleColor};
  }
`;
