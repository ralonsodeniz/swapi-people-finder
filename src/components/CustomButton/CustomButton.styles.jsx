import styled, { css } from 'styled-components';

import mediaQueryHelper from '../../style/media-queries';

const getButtonColors = props => {
  switch (props.variant) {
    case 'default':
      if (props.selected) return css``;
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
  switch (props.size) {
    case 'small':
      return css`
        ${({ theme }) => theme.smallButtonStyles}
      `;
    case 'medium':
      return css`
        ${({ theme }) => theme.mediumButtonStyles}
      `;
    case 'big':
      return css`
        ${({ theme }) => theme.bigButtonStyles}
      `;
    default:
      return css`
        ${({ theme }) => theme.smallButtonStyles}
      `;
  }
};

export default styled.button`
  width: auto;
  height: min-content;
  letter-spacing: 0.5px;
  padding: 1rem;
  font-size: ${({ theme }) => theme.defaultFontSize};
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  border: none;

  ${({ collapse }) => (collapse ? 'margin: 0' : 'margin: 1px')};

  ${getButtonSize};
  ${getButtonColors};
  ${({ selected, theme }) => selected && theme.selectedButtonStyles};
  ${({ disabled, theme }) => disabled && theme.disabledButtonStyles};

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
