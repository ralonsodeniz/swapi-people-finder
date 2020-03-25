import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

const smallButtonStyles = css`
  padding: 0.5rem;

  ${mediaQueryHelper(
    'phone',
    css`
      padding: 3px;
    `
  )};
`;

const bigButtonStyles = css`
  padding: 1rem;

  ${mediaQueryHelper(
    'phone',
    css`
      padding: 0.5rem;
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
  margin: 1px;
  border-radius: 5px;
  outline: none;
  border: none;

  ${getButtonSize}
  ${getButtonColors}

  &:active {
    border-style: none;
  }

  ${mediaQueryHelper(
    'tab-port',
    css`
      font-size: ${({ theme }) => theme.smallFontSize};
    `
  )};

  ${mediaQueryHelper(
    'phone',
    css`
      font-size: ${({ theme }) => theme.xsFontSize};
    `
  )};
`;
