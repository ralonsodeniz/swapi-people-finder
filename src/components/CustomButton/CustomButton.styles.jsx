import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

const smallButtonStyles = css`
  padding: 0.5rem;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      padding: 3px;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      padding: 3px;
    `
  )};
`;

const bigButtonStyles = css`
  padding: 1rem;

  ${mediaQueryHelper(
    'small-desktop',
    css`
      padding: 0.75rem;
    `
  )};

  ${mediaQueryHelper(
    'tab-port',
    css`
      padding: 0.75rem;
    `
  )};
`;

const getButtonColors = props => {
  switch (props.variant) {
    case 'default':
      return css`
        ${({ theme }) => theme.darkButtonStyles}
      `;
    case 'save':
      return css`
        ${({ theme }) => theme.saveButtonStyles}
      `;
    case 'remove':
      return css`
        ${({ theme }) => theme.removeButtonStyles}
      `;
    default:
      return css`
        ${({ theme }) => theme.darkButtonStyles}
      `;
  }
};

const getButtonSize = props => {
  return props.size === 'small' ? smallButtonStyles : bigButtonStyles;
};

export default styled.button`
  width: min-content;
  height: min-content;
  letter-spacing: 0.5px;
  padding: 1rem;
  font-size: ${({ theme }) => theme.defaultFontSize};
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: none;

  ${({ collapse }) => (collapse ? 'margin: 0' : 'margin: 1px')};

  ${getButtonSize}
  ${getButtonColors}

  &:active {
    border-style: none;
  }

  ${mediaQueryHelper(
    'small-desktop',
    css`
      font-size: ${({ theme }) => theme.smallFontSize};
    `
  )};

  ${mediaQueryHelper(
    'tab-xl',
    css`
      font-size: ${({ theme }) => theme.smallFontSize};
    `
  )};
`;
